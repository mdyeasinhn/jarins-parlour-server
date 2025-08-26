import { StatusCodes } from "http-status-codes"
import catchAsync from "../../utils/catchAsync"
import sendResponse from "../../utils/sendResponse"
import { userServices } from "./user.services"

const createUser = catchAsync(async (req, res) => {
  const payload = req.body
  //console.log(payload)
  const result = await userServices.createUser(payload)

  // const data = {
  //   _id: result?._id,
  //   name : result?.name,
  //   email : result?.email,
  //   phone: result?.phone
  // }
  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.CREATED,
    message: 'User is created successfully',
    data: result,
  })
})

export const userControllers = {
    createUser
}