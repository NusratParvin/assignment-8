"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.borrowReturnRoutes = void 0;
const express_1 = __importDefault(require("express"));
const borrowReturn__controller_1 = require("./borrowReturn..controller");
const router = express_1.default.Router();
router.post("/borrow", borrowReturn__controller_1.borrowReturnController.createBorrow);
router.get("/borrow/overdue", borrowReturn__controller_1.borrowReturnController.getOverdueBorrowList);
router.post("/return", borrowReturn__controller_1.borrowReturnController.createReturn);
exports.borrowReturnRoutes = router;
