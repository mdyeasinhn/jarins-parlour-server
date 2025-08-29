import { Router } from "express";
import { userControllers } from "./user.controller";
import validateRequest from "../../middleware/validateRequest";
import { userValidation } from "./user.validation";


const userRoutes = Router();
//Get all users
userRoutes.get('/', userControllers.getUsers);

//Create a user
userRoutes.post(
  '/create-user',
  validateRequest(userValidation.userValidationSchema),
  userControllers.createUser
);

export default userRoutes;