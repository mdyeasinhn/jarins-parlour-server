import z from "zod";

const createReviewValidationSchema = z.object({
  user: z.string({ error: "User ID is required." }),
  service: z.string({ error: "Service ID is required." }),
  rating: z
    .number({ error: "Rating is required." })
    .min(1, "Rating must be at least 1.")
    .max(5, "Rating cannot be more than 5."),
  comment: z
    .string()
    .optional(),
});

export const reviewValidation = {
  createReviewValidationSchema,
};
