import { RequestHandler } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { StatusCodes } from "http-status-codes";
import { bookServices } from "./book.service";

const createBook: RequestHandler = catchAsync(async (req, res) => {
  const result = await bookServices.createBookIntoDB(req.body);

  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    success: true,
    message: "Book created successfully",
    data: result,
  });
});

const getAllBook: RequestHandler = catchAsync(async (req, res) => {
  const result = await bookServices.getAllBookFromDB();

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Books retrieved successfully",
    data: result,
  });
});

const getBookById: RequestHandler = catchAsync(async (req, res) => {
  const { bookId } = req.params;
  const result = await bookServices.getBookByIdFromDB(bookId);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Book retrieved successfully",
    data: result,
  });
});

const updateBook: RequestHandler = catchAsync(async (req, res) => {
  const { bookId } = req.params;
  const result = await bookServices.updateBookIntoDB(bookId, req.body);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Book updated successfully",
    data: result,
  });
});

const deleteBook: RequestHandler = catchAsync(async (req, res) => {
  const { bookId } = req.params;
  const result = await bookServices.deleteBookFromDB(bookId);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Book successfully deleted",
    // data: result,
  });
});

export const bookControllers = {
  createBook,
  getAllBook,
  getBookById,
  updateBook,
  deleteBook,
};
