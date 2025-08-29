import { StatusCodes } from "http-status-codes"
import catchAsync from "../../utils/catchAsync"
import sendResponse from "../../utils/sendResponse"
import { userServices } from "./user.services"

const createUser = catchAsync(async (req, res) => {
  const payload = req.body;
  const result = await userServices.createUser(payload)

  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.CREATED,
    message: 'User is created successfully',
    data: result,
  })
});

const getUsers = catchAsync(async (req, res) => {
  const result = await userServices.getUsers()
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: 'Users getting succesfully',
    data: result,
  })
})

export const userControllers = {
    createUser,
    getUsers,
}