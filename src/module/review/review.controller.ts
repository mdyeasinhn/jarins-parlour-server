import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { reviewService } from "./review.service";
import sendResponse from "../../utils/sendResponse";
import { StatusCodes } from "http-status-codes";

// Create a review 
const createReview = catchAsync(async (req: Request, res: Response) => {
    const userId = req.user.id;
    const { serviceId, rating, comment } = req.body;

    const result = await reviewService.createReview({
        userId,
        serviceId,
        rating,
        comment,
    });

    sendResponse(res, {
        success: true,
        statusCode: StatusCodes.CREATED,
        message: 'Review is posted successfully!',
        data: result,
    });

});

export const reviewController = {
    createReview,
}