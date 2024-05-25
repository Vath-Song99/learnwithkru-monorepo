import express, { Application, NextFunction, Request , Response } from "express";
import getConfig from "./utils/createConfig";
import compression from "compression";
import cookieSession from "cookie-session";
import hpp from "hpp";
import helmet from "helmet";
import cors from "cors";
import { applyRateLimit } from "./middlewares/rate-limit";
import applyProxy from "./middlewares/proxy";
import { errorHandler } from "./middlewares/error-handler";
import { StatusCode } from "./utils/consts";
import { logger } from "./utils/logger";
import unless from "./middlewares/unless-route";
import { verifyUser } from "./middlewares/auth-middleware";
import cookieParser from "cookie-parser";
import swaggerUi from 'swagger-ui-express';
import axios from "axios";
import { merge } from 'swagger-merge';

const app: Application = express();

const config = getConfig();

// ===================
// Security Middleware
// ===================
app.set("trust proxy", 1);
app.use(compression());
app.use(cookieParser())
app.use(
  cookieSession({
    name: "session",
    keys: [`${config.cookieSecretKeyOne}`, `${config.cookieSecretKeyTwo}`],
    maxAge: 24 * 60 * 60 * 1000,
    secure: config.env !== "development", // update with value from config
    ...(config.env !== "development" && {
      sameSite: "none",
    }),
  })
);

// Prevent HTTP Parameter Pollution attacks
app.use(hpp());
// Prevent Some Security:
// - Stops browsers from sharing your site's vistor data
// - Stops your website from being displayed in a frame
// - Prevent XSS, etc.
app.use(helmet());

// Only Allow Specific Origin to Access API Gateway (Frontend)
// Mock getConfig function. Replace with your actual config logic.

const corsOptions = {
  origin: config.env !== 'development' ? '*' : config.clientUrl,
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions));

// Apply Limit Request
applyRateLimit(app);

// Hide Express Server Information
app.disable("x-powered-by");

// ===================
// JWT Middleware
// ===================
app.use(unless("/v1/auth", verifyUser));
-
// ===================
// Proxy Routes
// ===================
applyProxy(app);


const swaggerUrls = [
  'http://localhost:3001/swagger.json',
  'http://localhost:3002/swagger.json',
  // Add more URLs as needed
];

// Function to fetch Swagger JSON from all microservices
const fetchSwaggerDocs = async () => {
  const swaggerDocs = await Promise.all(
    swaggerUrls.map(url => axios.get(url).then(res => res.data))
  );
  return swaggerDocs;
};

// Endpoint to serve aggregated Swagger documentation
app.get('/swagger.json', async (_req, res) => {
  try {
    const swaggerDocs = await fetchSwaggerDocs();
    const mergedSwaggerDoc = merge(swaggerDocs);
    res.json(mergedSwaggerDoc);
  } catch (error) {
    res.status(500).send('Error aggregating Swagger documentation');
  }
});

// Serve Swagger UI
app.use('/docs', swaggerUi.serve, swaggerUi.setup(undefined, {
  swaggerUrl: '/swagger.json',
}));
// ====================
// Global Error Handler
// ====================
app.use("*", (req: Request, res: Response, _next: NextFunction) => {
  const fullUrl = `${req.protocol}://${req.get("host")}${req.originalUrl}`;
  logger.error(`${fullUrl} endpoint does not exist`);
  res
    .status(StatusCode.NotFound)
    .json({ message: "The endpoint called does not exist." });
});

app.use(errorHandler);

export default app;
