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

//Update user info 
const updateUserInfo = async (id: string, data: TUser) => {
  const result = await User.findOneAndUpdate({ _id: id }, data, {
    new: true
  })
  return result
}
// inActive & block user
const blockUser = async (userId: string) => {
  const user = await User.findById(userId);

  if(!user) {
    throw new Error('User not found');
  }

  if(user.status == "blocked"){
    throw new Error('User is already blocked');
  }

  user.status = "blocked";
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