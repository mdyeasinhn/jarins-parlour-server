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
    const user = await Service.findOne({ _id: id });
    if (!user) {
        throw new AppError(httpStatus.NOT_FOUND, "Service not found!")
    }
    const result = await Service.findOneAndUpdate({ _id: id }, data,
        { new: true, runValidators: true });
    return result;
};

const deleteService = async (id: string) => {
    const user = await Service.findOne({ _id: id });
    if (!user) {
        throw new AppError(httpStatus.NOT_FOUND, "Service not found!")
    }
    const result = Service.deleteOne({ _id: id });
    return result
}

export const serviceService = {
    createService,
    getAllServices,
    updateService,
    deleteService
}