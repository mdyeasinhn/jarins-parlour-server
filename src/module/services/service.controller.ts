import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { serviceService } from "./service.service";
import sendResponse from "../../utils/sendResponse";
import { StatusCodes } from "http-status-codes";

const createService = catchAsync(async (req: Request, res: Response) => {
    const payload = req.body;
    const result = serviceService.createService(payload);

    sendResponse(res, {
        success: true,
        statusCode: StatusCodes.CREATED,
        message: 'Service is created successfully!',
        data: result,
    })
})

export const servicController = {
    createService
}