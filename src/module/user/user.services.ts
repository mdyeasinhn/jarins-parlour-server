import { TUser } from "./user.interface"
import User from "./user.model"

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



export const userServices = {
  createUser,
  getUsers,
  retrieveUserProfile
  //   getSingleUser,
  //   updateUser,
  //   deleteUser,
  //   blockUser,
}