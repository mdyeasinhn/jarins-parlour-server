import { ICategory } from "./category.interface"
import { Category } from "./category.model"

const createCategoryIntoDB = async (payload: ICategory) => {
    const result = Category.create(payload);
    return result;
};

export const categoryService = {
    createCategoryIntoDB
}