import { ObjectId } from "mongodb";
import { Types } from "mongoose";

export interface IReview {
    _id?: Types.ObjectId;
    user: ObjectId;
    service: ObjectId;
    rating: number;
    comment: string;
    createdAt?: Date;
}
