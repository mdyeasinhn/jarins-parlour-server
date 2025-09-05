// service.interface.ts
import { Types } from "mongoose";

export type ServiceCategory = "Hair" | "Skin" | "Nails";

export interface IService {
  _id: Types.ObjectId;
  title: string;
  description: string;
  image: string;
  price: number;
  duration: number;
  category: ServiceCategory;
  isAvailable: boolean;
  discount?: number;
  createdAt?: Date;
  updatedAt?: Date;
}