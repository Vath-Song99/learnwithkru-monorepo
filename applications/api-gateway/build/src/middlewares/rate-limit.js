"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyRateLimit = void 0;
const express_rate_limit_1 = require("express-rate-limit");
const createConfig_1 = __importDefault(require("../utils/createConfig"));
const limiterOptions = (0, express_rate_limit_1.rateLimit)({
    windowMs: 15 * 60 * 1000, // 15 minutes in milliseconds
    max: (0, createConfig_1.default)().env === 'development' ? 500 : 100, // Limit each IP to 100 requests per windowMs
    message: "Too many requests from this IP, please try again after 15 minutes",
});
const applyRateLimit = (app) => {
    app.use(limiterOptions);
};
exports.applyRateLimit = applyRateLimit;
//# sourceMappingURL=rate-limit.js.map