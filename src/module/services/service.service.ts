import { IService } from "./service.interface";
import { Service } from "./service.model";

// Create a service 
const createService = async (payload: IService) => {
    const result = await Service.create(payload);
    return result;
};

// Get all services
const getAllServices = async () => {
    const result = await Service.find();
    return result
}

export const serviceService = {
    createService,
    getAllServices
}