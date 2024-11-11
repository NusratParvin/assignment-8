import express from "express";
import { borrowReturnController } from "./borrowReturn..controller";

const router = express.Router();

router.post("/borrow", borrowReturnController.createBorrow);
router.get("/borrow/overdue", borrowReturnController.getOverdueBorrowList);
router.post("/return", borrowReturnController.createReturn);

export const borrowReturnRoutes = router;
