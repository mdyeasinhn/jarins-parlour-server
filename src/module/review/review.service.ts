import { StatusCodes } from "http-status-codes";
import AppError from "../../error/appError";
import { IReview } from "./review.interface"
import { Review } from "./review.model"
import User from "../user/user.model";
import Service from "../services/service.model";

// Create a review 
const createReview = async (payload: IReview) => {
    const { user,  service } = payload;

    // check if user exists
    const userExists = await User.findById(user);
    if (!userExists) {
        throw new AppError(StatusCodes.NOT_FOUND, "User not found!");
    };
    // check if service exists
    const serviceExists = await Service.findById(service);
    if (!serviceExists) {
        throw new AppError(StatusCodes.NOT_FOUND, "Service not found!");
    };

    const review = await Review.create(payload);

    // populate before returning
    const result = await Review.findById(review._id)
        .populate("user", "name email")
        .populate("service", "title category price");
    return result;
};

export const reviewService = {
    createReview,
} 