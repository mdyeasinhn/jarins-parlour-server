import { StatusCodes } from "http-status-codes";
import AppError from "../../error/appError";
import { Review } from "../review/review.model";
import Service from "../services/service.model";
import User from "../user/user.model"
import { TUser } from "../user/user.interface";

const adminStats = async () => {
    const totalUsers = await User.countDocuments();
    const totalReviews = await Review.countDocuments();
    const totalServices = await Service.countDocuments();
    // const totalPayment = await Payment.countDocuments();
    // const totalRevenue = await Payment.aggregate([
    //     { $group: { _id: null, revenue: { $sum: "$amount" } } }
    // ]);
    return {
        totalUsers,
        totalReviews,
        totalServices,
    };
};
// inACTIVE & block user
const manageUserByAdmin = async (userId: string, payload: Partial<TUser>) => {

    const user = await User.findById({ _id: userId });
    if (!user) {
        throw new AppError(StatusCodes.BAD_REQUEST, 'User not found!');
    };

    // Prevent re-blocking a blocked user
    if (payload.status === "BLOCKED" && user.status === "BLOCKED") {
        throw new AppError(StatusCodes.BAD_REQUEST, "User is already BLOCKED!");
    };

    // Apply updates
    if (payload.status) user.status = payload.status;
    if (payload.role) user.role = payload.role;
    if (payload.isDeleted !== undefined) user.isDeleted = payload.isDeleted;


    user.status = "BLOCKED";
    await user.save();

    return user
}

export const adminService = {
    adminStats,
    manageUserByAdmin,
}