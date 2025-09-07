import { Review } from "../review/review.model";
import Service from "../services/service.model";
import User from "../user/user.model"

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

}

export const adminService = {
    adminStats
}