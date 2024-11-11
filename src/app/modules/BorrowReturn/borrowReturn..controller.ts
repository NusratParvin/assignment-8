import { RequestHandler } from "express";
import catchAsync from "../../../shared/catchAsync";
import { borrowReturnService } from "./borrowReturn.service";
import sendResponse from "../../../shared/sendResponse";
import { StatusCodes } from "http-status-codes";

const createBorrow: RequestHandler = catchAsync(async (req, res) => {
  const result = await borrowReturnService.createBorrowIntoDB(req.body);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Book borrowed successfully",
    data: result,
  });
});

export const borrowReturnController = {
  createBorrow,
};
