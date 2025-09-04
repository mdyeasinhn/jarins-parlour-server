import { Router } from "express";
import { servicController } from "./service.controller";

const serviceRoutes = Router();

serviceRoutes.post("/create-service", servicController.createService);

export default serviceRoutes;
