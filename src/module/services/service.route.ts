import { Router } from "express";
import validateRequest from "../../middleware/validateRequest";
import { serviceValidation } from "./service.validation";
import { serviceController } from "./service.controller";
import auth from "../../middleware/auth";
import { USER_ROLE } from "../user/user.constant";

const serviceRoutes = Router();

serviceRoutes.get("/", serviceController.getAllServices);

serviceRoutes.post("/create-service",
    auth(USER_ROLE.admin),
    validateRequest(serviceValidation.createValidationSchema),
    serviceController.createService);

serviceRoutes.put("/:serviceId",
    auth(USER_ROLE.admin),
    validateRequest(serviceValidation.updateValidationSchema),
    serviceController.updateService);

serviceRoutes.delete("/:serviceId",
    auth(USER_ROLE.admin),
    serviceController.deleteService);


export default serviceRoutes;
