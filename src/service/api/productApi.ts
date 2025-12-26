import { api } from "./api";
import type { ApiResponse } from "../../types/ApiResponse";
import type { Product, ProductTag } from "../../types/Product";

/**
 * Get all products.
 * @returns ApiResponse containing a list of products
 */
export async function getProducts():Promise<ApiResponse<Product[]>>{
    const response = await api.get<ApiResponse<Product[]>>("/products");
    return response.data;
}

/**
 * Get special product.
 * @param productId--unique id for product
 * @returns ApiResponse containing the product
 */
export async function getProductById(productId:number):Promise<ApiResponse<Product>>{
    const response = await api.get<ApiResponse<Product>>(`/products/${productId}`);
    return response.data
}

/**
 * Get all tags
 * @returns ApiResponse containing a list of tags
 */
export async function getTags():Promise<ApiResponse<ProductTag[]>>{
    const response = await api.get<ApiResponse<ProductTag[]>>("/tags");
    return response.data;
}

/**
 * Get all products which have the same tag
 * @param tagId--The tag identifier for filtering products
 * @returns ApiResponse containing a list of products under the same tagId
 */
export async function getProductsByTagId(tagId:number):Promise<ApiResponse<Product[]>>{
    const response = await api.get<ApiResponse<Product[]>>(`/tags/${tagId}`);
    return response.data;
}