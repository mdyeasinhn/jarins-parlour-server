import { ObjectId } from "mongodb";
import { Types } from "mongoose";

export interface IReview {
    _id: Types.ObjectId;
    userId: ObjectId;
    serviceId: ObjectId;
    rating: number;
    comment: string;
    createdAt: Date;
}
