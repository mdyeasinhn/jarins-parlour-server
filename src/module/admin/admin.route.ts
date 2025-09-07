import { Router } from "express";
import { adminController } from "./admin.controller";
import { USER_ROLE } from "../user/user.constant";
import auth from "../../middleware/auth";

const adminRoutes = Router();

adminRoutes.get("/stats", adminController.adminStats)

// Block user 
adminRoutes.patch('/manage/:userId'
  , auth(USER_ROLE.admin),
  adminController.manageUserByAdmin);


export default adminRoutes;