// service.model.ts
import { Schema, model } from "mongoose";
import { IService, ServiceCategory } from "./service.interface";

const serviceSchema = new Schema<IService>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100,
    },
    description: {
      type: String,
      required: true,
      maxlength: 500,
    },
    image: {
      type: String,
      required: true,
      validate: {
        validator: function (v: string) {
          return /^(https?:\/\/).+\.(jpg|jpeg|png|webp|gif)$/i.test(v);
        },
        message: "Image must be a valid URL with image extension",
      },
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    duration: {
      type: Number, // in minutes
      required: true,
      min: 1,
    },
    category: {
      type: String,
      enum: Object.values(["Hair", "Skin", "Nails"]) as ServiceCategory[],
      required: true,
    },
    isAvailable: {
      type: Boolean,
      default: true,
    },
    discount: {
      type: Number,
      min: 0,
      max: 100,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

// Optional: Add index for better query performance
serviceSchema.index({ category: 1, isAvailable: 1 });
serviceSchema.index({ price: 1 });

const Service = model<IService>("Service", serviceSchema);
export default Service;