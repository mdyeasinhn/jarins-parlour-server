import mongoose from "mongoose";
import { IService } from "./service.interface";
import Service from "./service.model";
import AppError from "../../error/appError";
import httpStatus from 'http-status-codes';


// Create a service 
const createService = async (payload: IService) => {
    const result = await Service.create(payload);
    return result;
};

// Get all services
const getAllServices = async () => {
    const result = await Service.find();
    return result
};

// update service data
const updateService = async (id: string, data: IService) => {
    if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new AppError(httpStatus.BAD_REQUEST, "Invalid user ID!");
    }
    const result = await Service.findOneAndUpdate({ _id: id }, data,
        { new: true, runValidators: true });
    return result;
};



export const serviceService = {
    createService,
    getAllServices,
    updateService
}