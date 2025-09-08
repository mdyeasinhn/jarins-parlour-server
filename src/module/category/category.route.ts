import { Router } from "express";
import { categoryController } from "./category.controller";

const categoryRoutes = Router();

categoryRoutes.post("/create", categoryController.createCategoryIntoDB);

export default categoryRoutes;