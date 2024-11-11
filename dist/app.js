"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./routes"));
const globalErrorHandlers_1 = __importDefault(require("./app/middlewares/globalErrorHandlers"));
const http_status_codes_1 = require("http-status-codes");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.send({
        message: "Welcome to Library ",
    });
});
app.use("/api", routes_1.default);
app.use(globalErrorHandlers_1.default);
app.use((req, res, next) => {
    res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json({
        success: false,
        status: http_status_codes_1.StatusCodes.NOT_FOUND,
        message: `${req.originalUrl} - Your requested path is not found!`,
    });
});
exports.default = app;
