import { z } from "zod";

const loginValidationSchema = z.object({
    body: z.object({
        id: z.string({ error: "Id is required." }),
        password: z.string({ error: "Password is required." })
    })
});
const changePasswordValidationSchema = z.object({
    body: z.object({
        oldPassword: z.string({
            error: 'Old password is required'
        }),
        newPassword: z.string({ error: "Password is required." })
    })
});

export const authValidation = {
    loginValidationSchema,
    changePasswordValidationSchema,
}