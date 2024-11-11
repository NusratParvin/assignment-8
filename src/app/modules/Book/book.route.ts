import express from "express";
import { bookControllers } from "./book.controller";

const router = express.Router();

router.post("/", bookControllers.createBook);
router.get("/", bookControllers.getAllBook);
router.get("/:bookId", bookControllers.getBookById);
router.put("/:bookId", bookControllers.updateBook);
router.delete("/:bookId", bookControllers.deleteBook);

export const bookRoutes = router;
