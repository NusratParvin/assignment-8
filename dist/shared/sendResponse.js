"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sendResponse = (res, params) => {
    const responseBody = {
        status: params.statusCode,
        success: params.success,
        message: params.message,
    };
    if (params.data !== undefined) {
        responseBody.data = params.data;
    }
    res.status(params.statusCode).json(responseBody);
};
exports.default = sendResponse;
