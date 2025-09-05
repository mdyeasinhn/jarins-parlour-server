import { Router } from "express";
import validateRequest from "../../middleware/validateRequest";
import { serviceValidation } from "./service.validation";
import { serviceController } from "./service.controller";

const serviceRoutes = Router();

serviceRoutes.get("/", serviceController.getAllServices);

serviceRoutes.post("/create-service",
    validateRequest(serviceValidation.createValidationSchema),
    serviceController.createService);
    
serviceRoutes.put("/:userId",
    serviceController.updateService);


export default serviceRoutes;
