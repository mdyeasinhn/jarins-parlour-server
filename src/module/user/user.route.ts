import { Router } from "express";
import { userControllers } from "./user.controller";
import validateRequest from "../../middleware/validateRequest";
import { userValidation } from "./user.validation";


const userRoutes = Router()
userRoutes.post(
  '/create-user',
  validateRequest(userValidation.userValidationSchema),
  userControllers.createUser
);

export default userRoutes;