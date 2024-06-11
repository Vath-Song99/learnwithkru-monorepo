"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const dotenv_1 = __importDefault(require("dotenv"));
const base_custom_error_1 = require("../error/base-custom-error");
function createConfig(configPath) {
    dotenv_1.default.config({ path: configPath });
    // Validate essential configuration
    const requiredConfig = [
        "NODE_ENV",
        "PORT",
        "MONGODB_URL",
        "LOG_LEVEL",
        "AUTH_SERVICE_GET",
    ];
    const missingConfig = requiredConfig.filter((key) => !process.env[key]);
    if (missingConfig.length > 0) {
        throw new base_custom_error_1.ApiError(`Missing required environment variables: ${missingConfig.join(", ")}`);
    }
    // Return configuration object
    return {
        env: process.env.NODE_ENV,
        port: process.env.PORT,
        mongoUrl: process.env.MONGODB_URL,
        logLevel: process.env.LOG_LEVEL,
        apiGateway: process.env.API_GATEWAY,
        authService: process.env.AUTH_SERVICE_GET,
        jwtExpiresIn: process.env.JWT_EXPIRES_IN,
    };
}
const getConfig = (currentEnv = "development") => {
    const configPath = currentEnv === "development"
        ? path_1.default.join(__dirname, `../../configs/.env`)
        : path_1.default.join(__dirname, `../../configs/.env.${currentEnv}`);
    return createConfig(configPath);
};
exports.default = getConfig;
//# sourceMappingURL=config.js.map