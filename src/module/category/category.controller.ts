import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { categoryService } from "./category.service";
import sendResponse from "../../utils/sendResponse";
import { StatusCodes } from "http-status-codes";

const createCategoryIntoDB = catchAsync(async (req: Request, res: Response) => {
    const payload = req.body;
    const result = await categoryService.createCategoryIntoDB(payload);
    sendResponse(res, {
        success: true,
        statusCode: StatusCodes.CREATED,
        message: 'Category is created successfully.',
        data: result,
    });

})

export const categoryController = {
    createCategoryIntoDB
}