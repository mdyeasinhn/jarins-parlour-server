import { IService } from "./service.interface";
import { Service } from "./service.model";

const createService = async (payload: IService) => {
    const result = await Service.create(payload);
    return result;
}

export const serviceService = {
    createService,
}