import { Router } from "express";
import { authController } from "./auth.controller";
import auth from "../../middleware/auth";
import validateRequest from "../../middleware/validateRequest";
import { authValidation } from "./auth.validation";

const authRoutes = Router();

authRoutes.post(
  '/login',
  validateRequest(authValidation.loginValidationSchema),
  authController.login
)
authRoutes.post(
  '/change-password', auth("CUSTOMER", "ADMIN"), validateRequest(authValidation.changePasswordValidationSchema), authController.changePassword,
);

export default authRoutes;