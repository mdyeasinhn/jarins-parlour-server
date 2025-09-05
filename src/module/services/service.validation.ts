import z from "zod";

const createValidationSchema = z.object({
    title: z
        .string({ error: "Title is required." })
        .min(3, "Title must be at least 3 characters long."),

    description: z
        .string({ error: "Description is required." })
        .min(10, "Description must be at least 10 characters long."),

    image: z
        .string({ error: "Image is required." })
        .url("Invalid image URL."),

    price: z
        .number({ error: "Price is required." })
        .min(0, "Price must be greater than or equal to 0."),

    duration: z
        .number({ error: "Duration is required." })
        .min(1, "Duration must be at least 1 minute."),

    category: z.enum(["Hair", "Skin", "Nails"],),
    discount: z
        .number()
        .min(0, "Discount cannot be negative.")
        .max(100, "Discount cannot exceed 100%.")
        .optional(),
});


const updateValidationSchema = z.object({
    title: z
        .string()
        .min(3, "Title must be at least 3 characters long.")
        .optional(),

    description: z
        .string()
        .min(10, "Description must be at least 10 characters long.")
        .optional(),

    image: z
        .string()
        .url("Invalid image URL.")
        .optional(),

    price: z
        .number()
        .min(0, "Price must be greater than or equal to 0.")
        .optional(),

    duration: z
        .number()
        .min(1, "Duration must be at least 1 minute.")
        .optional(),

    category: z.enum(["Hair", "Skin", "Nails"]).optional(),

    discount: z
        .number()
        .min(0, "Discount cannot be negative.")
        .max(100, "Discount cannot exceed 100%.")
        .optional(),
});

export const serviceValidation = {
    createValidationSchema,
    updateValidationSchema
};
