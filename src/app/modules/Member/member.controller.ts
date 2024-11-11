import { StatusCodes } from "http-status-codes";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { memberService } from "./member.service";
import { RequestHandler } from "express";

const createMember: RequestHandler = catchAsync(async (req, res) => {
  const result = await memberService.createMemberIntoDB(req.body);

  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    success: true,
    message: "Member created successfully",
    data: result,
  });
});

const getAllMember: RequestHandler = catchAsync(async (req, res) => {
  const result = await memberService.getAllMemberFromDB();

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Members retrieved successfully",
    data: result,
  });
});

const getMemberById: RequestHandler = catchAsync(async (req, res) => {
  const { memberId } = req.params;

  const result = await memberService.getMemberByIdFromDB(memberId);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Member retrieved successfully",
    data: result,
  });
});

const updateMember: RequestHandler = catchAsync(async (req, res) => {
  const { memberId } = req.params;
  const result = await memberService.updateMemberIntoDB(memberId, req.body);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Member updated successfully",
    data: result,
  });
});

const deleteMember: RequestHandler = catchAsync(async (req, res) => {
  const { memberId } = req.params;
  const result = await memberService.deleteMemberFromDB(memberId);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Member successfully deleted",
  });
});

export const memberController = {
  createMember,
  getAllMember,
  getMemberById,
  updateMember,
  deleteMember,
};
