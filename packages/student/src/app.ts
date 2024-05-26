import express, { Application } from "express";
import { errorHandler } from "./middlewares/errorsHandler";
import path from "path";
import cors from "cors";
import getConfig from "./utils/config";
import loggerMiddleware from "./middlewares/logger-handler";
import { PATH_STUDENT } from "./routes/path-defs";
import Route from "./routes/v1/student.route";
import swaggerUi from 'swagger-ui-express';

//app
const app: Application = express();
//global middleware
//global middleware
app.set("trust proxy", 1);
app.use(
    cors({
      origin: getConfig().apiGateway,
      credentials: true,
      methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    })
  );
app.use(express.static("public"));
app.use(express.json({limit: "100mb"}));
app.use(express.urlencoded({ extended: true, limit: "200mb" }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(loggerMiddleware);



app.use(PATH_STUDENT.BASE, Route)
// handle swaggerUi

app.use('/swagger', swaggerUi.serve, swaggerUi.setup(undefined, {
  swaggerOptions: {
    url: '/swagger.json', // Point to the generated Swagger JSON file
  },
}));

// Serve the generated Swagger JSON file
app.get('/swagger.json', (_req, res) => {
  res.sendFile(path.join(__dirname, './swagger-dist/swagger.json'));
});
// app.use(AUTH_ROUTE,Routehealths)

//error handler globale middleware
app.use(errorHandler);
export default app;
