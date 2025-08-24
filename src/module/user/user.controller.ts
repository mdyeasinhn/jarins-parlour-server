import { StatusCodes } from "http-status-codes"
import catchAsync from "../../utils/catchAsync"
import sendResponse from "../../utils/sendResponse"
import { userServices } from "./user.services"

const createUser = catchAsync(async (req, res) => {
  const payload = req.body
  const result = await userServices.createUser(payload)

  const data = {
    _id: result?._id,
    name : result?.name,
    email : result?.email
  }
  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.CREATED,
    message: 'User is created successfully',
    data: data,
  })
})

export const userController = {
    createUser
}