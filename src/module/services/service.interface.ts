import { Types } from "mongoose";

export interface IService {
    _id: Types.ObjectId;
    title: string;
    description: string;
    image: string;
    price: number;
    duration: number;
    category: "Hair" | "Skin" | "Nails";
    isAvailable: boolean; // to enable/disable a service
    discount?: number;
}