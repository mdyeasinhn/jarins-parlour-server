import { Router } from "express";
import { adminController } from "./admin.controller";

const adminRoutes = Router();

adminRoutes.get("/dashboard-stats", adminController.adminStats)

export default adminRoutes;