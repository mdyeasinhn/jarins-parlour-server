import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { adminService } from "./admin.service";
import sendResponse from "../../utils/sendResponse";
import { StatusCodes } from "http-status-codes";

const adminStats = catchAsync(async (req: Request, res: Response) => {
    const result = await adminService.adminStats();
    sendResponse(res, {
        statusCode: StatusCodes.OK,
        message: "Admin statistics retrieved successfully.",
        data: result,
    });
});

export const adminController = {
    adminStats
}