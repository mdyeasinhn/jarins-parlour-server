import { Router } from "express";
import { reviewController } from "./review.controller";
import auth from "../../middleware/auth";
import { USER_ROLE } from "../user/user.constant";

const reviewRoutes = Router();

reviewRoutes.get('/', reviewController.getAllReviews);

reviewRoutes.post("/create-review", auth(USER_ROLE.admin), reviewController.createReview);

export default reviewRoutes;