import { z } from "zod";

const crateUserValidationSchema = z.object({
    name: z.string({
        error: () => ({ message: "Name is required" }),
    }).min(2, "Name must be at least 2 characters long"),

    email: z.string({
        error: () => ({ message: "Email is required" }),
    }).email("Invalid email address"),

    password: z.string({
        error: () => ({ message: "Password is required" }),
    }).min(6, "Password must be at least 6 characters long"),

    phone: z.string({
        error: () => ({ message: "Phone number is required" }),
    }).regex(/^[0-9]{10,15}$/, "Phone must be 10–15 digits"),

    photo: z.string().url("Photo must be a valid URL").optional(),
});

// ✅ Update schema (all fields optional)
const updateUserValidation = z.object({
    email: z.string().optional().refine((val) => val === undefined, {
        message: "You are not allowed to update the email address.",
    }),

    role: z.string().optional().refine((val) => val === undefined, {
        message: "You cannot change your role — contact an administrator.",
    }),
    name: z.string().min(2, "Name must be at least 2 characters long.").optional(),
    password: z.string().min(6, "Password must be at least 6 characters long.").optional(),
    phone: z.string().regex(/^[0-9]{10,15}$/, "Phone must be 10–15 digits.").optional(),
    photo: z.string().url("Photo must be a valid URL.").optional(),

});

export const userValidation = {
    crateUserValidationSchema,
    updateUserValidation,
};
