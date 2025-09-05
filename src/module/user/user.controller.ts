import { StatusCodes } from "http-status-codes"
import catchAsync from "../../utils/catchAsync"
import sendResponse from "../../utils/sendResponse"
import { userServices } from "./user.service"

//Create a user
const createUser = catchAsync(async (req, res) => {
  const payload = req.body;
  const result = await userServices.createUser(payload)

  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.CREATED,
    message: 'User is created successfully!',
    data: result,
  })
});

//Get all user 
const getUsers = catchAsync(async (req, res) => {
  const result = await userServices.getUsers()
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: 'Users retrieved succesfully!',
    data: result,
  })
})

// get user by email
const retrieveUserProfile = catchAsync(async (req, res) => {
  const { email } = req.params;
  const result = await userServices.retrieveUserProfile(email);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: 'User profile retrieved successfully!',
    data: result,
  })
});
// user update 
const updateUserInfo = catchAsync(async (req, res) => {
  const userId = req.params.userId;
  const body = req.body;
  const result = await userServices.updateUserInfo(userId, body);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: 'User updated succesfully!',
    data: result,
  })
});

// inACTIVE & block user
const blockUser = catchAsync(async (req, res) => {
  const userId = req.params.userId;
  await userServices.blockUser(userId);

  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: 'User BLOCKED successfully',
  })
});

export const userControllers = {
  createUser,
  getUsers,
  retrieveUserProfile,
  updateUserInfo,
  blockUser
}