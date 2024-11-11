import { Response } from "express";

type TResponseData<T> = {
  statusCode: number;
  success: boolean;
  message: string;
  data?: T | null;
};

const sendResponse = <T>(res: Response, params: TResponseData<T>) => {
  res.status(params.statusCode).json({
    status: params.statusCode,
    success: params.success,
    message: params.message,
    data: params.data || null,
  });
};

export default sendResponse;
