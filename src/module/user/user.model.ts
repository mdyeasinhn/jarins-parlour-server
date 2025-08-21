import { model, Schema } from "mongoose";

const userSchema = new Schema({
    id: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        select: 0,
    },
    needsPasswordChange: {
        type: Boolean,
        default: true,
    },
    passwordChangeAt: {
        type: Date,
    },
    role: {
        type: String,
        enum: ['customer', 'admin'],
    },
    status: {
        type: String,
        enum: ['active', 'blocked'],
        default: 'active',
    },
    isDeleted: {
        type: Boolean,
        default: false,
    },
},
    {
        timestamps: true,
    },
);


const User = model("User", userSchema)
export default User

