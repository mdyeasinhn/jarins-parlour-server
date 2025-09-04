import { Schema, model, } from "mongoose";
import { IService } from "./service.interface";

const serviceSchema = new Schema<IService>(
  {
    title: {
      type: String,
      required: true,
 
    },
    description: {
      type: String,
      required: true,
    
    },
    image: {
      type: String,
      required: true,
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
      enum: ["Hair", "Skin", "Nails"],
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
    },
  },
  {
    timestamps: true, // adds createdAt & updatedAt
  }
);

export const ServiceModel = model<IService>("Service", serviceSchema);
