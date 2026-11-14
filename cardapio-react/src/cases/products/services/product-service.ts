import { api } from "../../../lib/axios/axios";
import type { Product } from "../dtos/product";

const ENDPOINT = "/products?key=da94f380";

export const productService = {
    async listAll(): Promise<Product[]>{
        const result =await api.get<Product[]>(ENDPOINT);
        return result.data;
    }
}