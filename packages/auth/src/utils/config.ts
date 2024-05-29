import path from "path";
import { ApiError } from "../error/base-custom-error";
import dotenv from "dotenv";
function createConfig(configPath: string) {
  dotenv.config({ path: configPath });

  // Validate essential configuration
  const requiredConfig = [
    "NODE_ENV",
    "PORT",
    "MONGODB_URL",
    "LOG_LEVEL",
    "RABBITMQ_ENDPOINT",
    "CLIENT_URL",
    "JWT_EXPIRES_IN",
    "API_GATEWAY",
    "FACEBOOK_APP_SECRET",
    "FACEBOOK_APP_ID",
    "GOOGLE_CLIENT_ID",
    "GOOGLE_CLIENT_SECRET",
    "FACEBOOK_REDIRECT_URI",
    "GOOGLE_REDIRECT_URI",
    "USER_SERVICE"
  ];
  const missingConfig = requiredConfig.filter((key) => !process.env[key]);

  if (missingConfig.length > 0) {
    throw new ApiError(
      `Missing required environment variables: ${missingConfig.join(", ")}`
    );
  }

  // Return configuration object
  return {
    env: process.env.NODE_ENV,
    port: process.env.PORT,
    mongoUrl: process.env.MONGODB_URL,
    logLevel: process.env.LOG_LEVEL,
    rabbitMQ: process.env.RABBITMQ_ENDPOINT,
    clientUrl: process.env.CLIENT_URL,
    apiGateway: process.env.API_GATEWAY,
    jwtExpiresIn: process.env.JWT_EXPIRES_IN,
    faceAppId: process.env.FACEBOOK_APP_ID,
    facebookAppSecret: process.env.FACEBOOK_APP_SECRET,
    googleClientId: process.env.GOOGLE_CLIENT_ID,
    googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
    facebookRedirectUrl: process.env.FACEBOOK_REDIRECT_URI,
    googleRedirectUrl: process.env.GOOGLE_REDIRECT_URI,
    userService: process.env.USER_SERVICE
  };
}

const getConfig = (currentEnv: string = "development") => {
  const configPath =
    currentEnv === "development"
      ? path.join(__dirname, `../../configs/.env`)
      : path.join(__dirname, `../../configs/.env.${currentEnv}`);
  return createConfig(configPath);
};

export default getConfig;
