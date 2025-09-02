import { Router } from "express";
import { userControllers } from "./user.controller";
import validateRequest from "../../middleware/validateRequest";
import { userValidation } from "./user.validation";

const userRoutes = Router();
//Get all users
userRoutes.get('/', userControllers.getUsers);

//Get a user by eamil 
userRoutes.get('/:email', userControllers.retrieveUserProfile);

//Update user info 
userRoutes.put('/:userId',
  validateRequest(userValidation.updateUserValidation),
  userControllers.updateUserInfo);
userRoutes.patch('/block/:userId',  userControllers.blockUser);
//Create a user
userRoutes.post(
  '/create-user',
  validateRequest(userValidation.crateUserValidationSchema),
  userControllers.createUser
);

export default userRoutes;