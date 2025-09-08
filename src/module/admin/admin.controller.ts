import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { adminService } from "./admin.service";
import sendResponse from "../../utils/sendResponse";
import { StatusCodes } from "http-status-codes";

//Dashboard statistics
const adminStats = catchAsync(async (req: Request, res: Response) => {
    const result = await adminService.adminStats();
    sendResponse(res, {
        statusCode: StatusCodes.OK,
        message: "System statistics retrieved successfully.",
        data: result,
    });
});

// Manage user 
const manageUserByAdmin = catchAsync(async (req, res) => {
    const userId = req.params.userId;
    await adminService.manageUserByAdmin(userId, req.body);

    let message = "User updated seccessfully.";

    if (req.body.status) {
        message = `User status update "${req.body.status}" successfully`;
    } else if (req.body.role) {
        message = `User role update "${req.body.role}" successfully`;
    } else if (req.body.isDeleted !== undefined) {
        message = req.body.isDeleted
            ? "User deleted successfully"
            : "User restored successfully";
    }
    sendResponse(res, {
        success: true,
        statusCode: StatusCodes.OK,
        message
    })
});

export const adminController = {
    adminStats,
    manageUserByAdmin
}