import { Router } from "express";
import { userControllers } from "./user.controller";


const userRoutes = Router()
userRoutes.post(
  '/create-user',
  userControllers.createUser
);

export default userRoutes;