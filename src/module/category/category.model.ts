import { model, Schema } from "mongoose";
import { ICategory } from "./category.interface";

const categorySchema = new Schema<ICategory>({
    _id: {
        type: Schema.Types.ObjectId,
        auto: true,
    },
    name: {
        type: String,
        required: [true, "Category name is required"],
        minlength: [3, "Category name must be at least 3 characters long"],
        trim: true,
        unique: true,
    },
},
    {
        timestamps: true,
    }
);

export const Category = model<ICategory>("Category", categorySchema);