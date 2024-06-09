"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("./config"));
class NodemailerSmtpServer {
    constructor() {
        this.host = (0, config_1.default)().smtpHost;
        this.port = parseInt((0, config_1.default)().smtpPort);
        this.user = (0, config_1.default)().senderEmail;
        this.pass = (0, config_1.default)().senderEmailPassword;
    }
    getConfig() {
        return {
            host: this.host,
            port: this.port,
            auth: {
                user: this.user,
                pass: this.pass,
            },
        };
    }
}
exports.default = NodemailerSmtpServer;
//# sourceMappingURL=nodemailer-smtp-server.js.map