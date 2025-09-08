import { Router } from "express";
import { categoryController } from "./category.controller";
import validateRequest from "../../middleware/validateRequest";
import { categoryValidation } from "./category.validation";

const categoryRoutes = Router();

categoryRoutes.post("/create",
    validateRequest(categoryValidation.createCategoryValidationSchema),
    categoryController.createCategoryIntoDB);

export default categoryRoutes;