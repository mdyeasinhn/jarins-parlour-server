import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { serviceService } from "./service.service";
import sendResponse from "../../utils/sendResponse";
import { StatusCodes } from "http-status-codes";

// Create  service 
const createService = catchAsync(async (req: Request, res: Response) => {
    const payload = req.body;
    const result = await serviceService.createService(payload);
    sendResponse(res, {
        success: true,
        statusCode: StatusCodes.CREATED,
        message: 'Service is created successfully!',
        data: result,
    })
});

// Get all services
const getAllServices = catchAsync(async (req: Request, res: Response) => {
    const result = await serviceService.getAllServices();
    sendResponse(res, {
        statusCode: StatusCodes.OK,
        message: "Services retrieved successfully!",
        data: result,
    })
});

export const serviceController = {
    createService,
    getAllServices
}