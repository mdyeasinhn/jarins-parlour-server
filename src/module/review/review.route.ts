import { Router } from "express";
import { reviewController } from "./review.controller";
import auth from "../../middleware/auth";
import { USER_ROLE } from "../user/user.constant";
import validateRequest from "../../middleware/validateRequest";
import { reviewValidation } from "./review.validation";

const reviewRoutes = Router();

reviewRoutes.get('/', reviewController.getAllReviews);

reviewRoutes.post("/create-review",
    auth(USER_ROLE.customer),
    validateRequest(reviewValidation.createReviewValidationSchema),
    reviewController.createReview);

export default reviewRoutes;