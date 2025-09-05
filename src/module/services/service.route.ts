import { Router } from "express";
import { servicController } from "./service.controller";
import validateRequest from "../../middleware/validateRequest";
import { serviceValidation } from "./service.validation";

const serviceRoutes = Router();

serviceRoutes.get("/", servicController.getAllServices);

serviceRoutes.post("/create-service",
    validateRequest(serviceValidation.createValidationSchema),
    servicController.createService);


export default serviceRoutes;
