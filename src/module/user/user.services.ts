import mongoose from "mongoose";
import AppError from "../../error/appError";
import { TUser } from "./user.interface"
import User from "./user.model"
import httpStatus from 'http-status-codes';
//Create a user 
const createUser = async (payload: TUser) => {
  const result = await User.create(payload)
  return result
};

//Get all users 
const getUsers = async () => {
  const result = await User.find()
  return result
};

//Geting user by email
const retrieveUserProfile = async (email: string) => {
  const result = await User.findOne({ email });
  return result;
}

//Update user info 
const updateUserInfo = async (id: string, data: TUser) => {
  // Check if the provided ID is a valid MongoDB ObjectId
   if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new AppError(httpStatus.BAD_REQUEST, "Invalid user ID!");
  };
    // Find the user by ID and update with the new data
  const result = await User.findOneAndUpdate({ _id: id }, data, {
    new: true
  })
  return result
}
// inACTIVE & block user
const blockUser = async (userId: string) => {
  // Check if the provided ID is a valid MongoDB ObjectId
  if (!mongoose.Types.ObjectId.isValid(userId)) {
    throw new AppError(httpStatus.BAD_REQUEST, "Invalid user ID!");
  }
  const user = await User.findById(userId);

  if (!user) {
    throw new AppError(httpStatus.BAD_REQUEST, 'User not found!');
  }

  if (user.status == "BLOCKED") {
    throw new Error('User is already BLOCKED!');
  }

  user.status = "BLOCKED";
  await user.save();

  return user
}

export const userServices = {
  createUser,
  getUsers,
  retrieveUserProfile,
  updateUserInfo,
  blockUser,
  //   getSingleUser,
  //   deleteUser,
}