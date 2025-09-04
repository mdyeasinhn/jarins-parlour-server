import { Router } from "express";
import { authController } from "./auth.controller";
import auth from "../../middleware/auth";

const authRoutes = Router();

authRoutes.post(
  '/login',
  authController.login
)
authRoutes.post(
    '/change-password', auth("CUSTOMER", "ADMIN"),  authController.changePassword,
);

export default authRoutes;