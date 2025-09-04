import AppError from "../../error/appError";
import User from "../user/user.model";
import { TLoginUser } from "./auth.interface";
import httpStatus from "http-status-codes";
import config from "../../config";
import bcrypt from "bcrypt";
import jwt, { JwtPayload } from 'jsonwebtoken'

const loginUser = async (payload: TLoginUser) => {
  // 1. Find user by email and include password
  const user = await User.findOne({ email: payload.email }).select("+password");

  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, "User not found!");
  }

  // 2. Check if user is blocked
  if (user.status === "BLOCKED") {
    throw new AppError(httpStatus.FORBIDDEN, "User is blocked!");
  }

  // 3. Check password
  const isPasswordMatch = await bcrypt.compare(payload.password, user.password);
  if (!isPasswordMatch) {
    throw new AppError(httpStatus.UNAUTHORIZED, "Invalid credentials!");
  }

  // 4. Generate JWT token using the utility function
 const token = jwt.sign(
    {
      id: user?._id,
      email: user?.email,
      role: user?.role,
    },
    config.jwt_access_secret as string,
    {
      expiresIn: '30d',
    }
  )

  // 5. Prepare safe user info (don't return password)
  const verifiedUser = {
    name: user.name,
    email: user.email,
    role: user.role,
  };

  return { token, verifiedUser };
};

const changePassword = async(userData: JwtPayload, payload: { oldPassword: string, newPassword: string }) => {
  // 1. Check if the user exists and select password explicitly
const user = await User.findOne({ email: userData.email }).select("+password");


  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, "The user is not found !")
  };

  // 2. Check if user is blocked
  if (user.status === "BLOCKED") {
    throw new AppError(httpStatus.FORBIDDEN, "User is blocked!");
  }

  
  // 3. Check password
  const isPasswordMatch = await bcrypt.compare(payload.oldPassword, user.password);
  if (!isPasswordMatch) {
    throw new AppError(httpStatus.UNAUTHORIZED, "Invalid credentials!");
  }

  // 4. Hash new password
  const newHashedPassword = await bcrypt.hash(
    payload.newPassword,
    Number(config.bcrypt_salt_rounds),
  );
  // 5. Update password
  await User.findOneAndUpdate({
    id: userData.userId,
    role: userData.role,
  },{
    password : newHashedPassword,
    needsPasswordChange : false,
    passwordChangeAt: new Date(),
  })
return null;
};

export const authServices = {
  loginUser,
  changePassword
};