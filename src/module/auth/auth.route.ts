import { Router } from "express";
import { authController } from "./auth.controller";
import auth from "../../middleware/auth";
import validateRequest from "../../middleware/validateRequest";
import { authValidation } from "./auth.validation";
import { USER_ROLE } from "../user/user.constant";

const authRoutes = Router();

authRoutes.post(
  '/login',
  validateRequest(authValidation.loginValidationSchema),
  authController.login
)
authRoutes.post(
  '/change-password', auth(USER_ROLE.admin, USER_ROLE.customer), validateRequest(authValidation.changePasswordValidationSchema), authController.changePassword,
);

export default authRoutes;