import { z } from "zod";

export const userValidationSchema = z.object({
    name: z.string({
        error: "Name is required",
    }).min(2, "Name must be at least 2 characters long"),
    email: z.string({
        error: "Email is required",
    }).email("Invalid email address"),
    password: z.string({
        error: "Password is required",
    }).min(6, "Password must be at least 6 characters long"),
    phone: z.string({
        error: "Phone number is required",
    }).regex(/^[0-9]{10,15}$/, "Phone must be 10–15 digits"),
    photo: z.string().url("Photo must be a valid URL").optional(),
});

export const userValidation = {
    userValidationSchema,
};