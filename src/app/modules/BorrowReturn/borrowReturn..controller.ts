import { RequestHandler } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { StatusCodes } from "http-status-codes";
import { borrowReturnService } from "./borrowReturn.service";

const createBorrow: RequestHandler = catchAsync(async (req, res) => {
  const result = await borrowReturnService.createBorrowIntoDB(req.body);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Book borrowed successfully",
    data: result,
  });
});

const createReturn: RequestHandler = catchAsync(async (req, res) => {
  const { borrowId } = req.body;
  const result = await borrowReturnService.returnBookIntoDB(borrowId);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Book returned successfully",
    // data: result,
  });
});

const getOverdueBorrowList: RequestHandler = catchAsync(async (req, res) => {
  const overdueList = await borrowReturnService.getOverdueBorrowListFromDB();

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message:
      overdueList.length === 0
        ? "No overdue books"
        : "Overdue borrow list fetched",
    data: overdueList,
  });
});

export const borrowReturnController = {
  createBorrow,
  createReturn,
  getOverdueBorrowList,
};
