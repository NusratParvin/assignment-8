import express from "express";
import { borrowReturnController } from "./borrowReturn..controller";

const router = express.Router();

router.post("/", borrowReturnController.createBorrow);
router.post("/", borrowReturnController.returnBook);

export const borrowReturnRoutes = router;
