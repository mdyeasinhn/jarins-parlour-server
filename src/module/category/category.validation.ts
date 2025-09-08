import z from "zod";

const createCategoryValidationSchema = z.object({
  name: z
    .string({ error: "Category name is required." })
    .min(3, "Category name must be at least 3 characters long.")
    .trim(),
});

const updateCategoryValidationSchema = z.object({
  name: z
    .string()
    .min(3, "Category name must be at least 3 characters long.")
    .trim()
    .optional(),
});

export const categoryValidation = {
  createCategoryValidationSchema,
  updateCategoryValidationSchema,
};
