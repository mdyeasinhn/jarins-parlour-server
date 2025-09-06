import { Schema, model } from "mongoose";
import { IReview } from "./review.interface";

const reviewSchema = new Schema<IReview>(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",      // Reference to User collection
      required: true,
    },
    service: {
      type: Schema.Types.ObjectId,
      ref: "Service",   // Reference to Service collection
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
    comment: {
      type: String,
      trim: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
);

export const Review = model<IReview>("Review", reviewSchema);
