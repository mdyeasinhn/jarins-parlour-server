import { Router } from "express";
import { userControllers } from "./user.controller";
import validateRequest from "../../middleware/validateRequest";
import { userValidation } from "./user.validation";
import auth from "../../middleware/auth";
import { USER_ROLE } from "./user.constant";

const userRoutes = Router();
//Get all users
userRoutes.get('/', userControllers.getUsers);

//Get a user by eamil 
userRoutes.get('/:email', userControllers.retrieveUserProfile);

//Update user info 
userRoutes.put('/:userId',
  validateRequest(userValidation.updateUserValidation),
  userControllers.updateUserInfo);

// Block user 
userRoutes.patch('/block/:userId'
  , auth(USER_ROLE.admin),
  userControllers.blockUser);
  
//Create a user
userRoutes.post(
  '/create-user',
  validateRequest(userValidation.crateUserValidationSchema),
  userControllers.createUser
);

export default userRoutes;