import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { StatusCodes } from "http-status-codes";
import { authServices } from "./auth.service";

const login = catchAsync(async (req: Request, res: Response) => {
  const result = await authServices.loginUser(req.body)

  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: 'Login successful',
    data: {
      token: result.token,
    }
  })
});

const changePassword = catchAsync(async (req: Request, res: Response) => {
  const { ...passwordData } = req.body;
  const result = await authServices.changePassword(req.user, passwordData);

  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: "Password is updated successfully!",
    data: result,
  })
})
export const authController = {
  login,
  changePassword
}