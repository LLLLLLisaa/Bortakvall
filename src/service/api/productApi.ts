import { api } from "@service/api/api";
import type { ApiResponse } from "@models/ApiResponse";
import type { Product,ProductDetail,Tag,TagProduct } from "@models/Product";

/**
 * Fetch all available products.
 *
 * @returns API response containing a list of products
 */
export async function getProducts(): Promise<ApiResponse<Product[]>>{
    const response = await api.get<ApiResponse<Product[]>>("/products");
    if (!response.data?.data) {
        throw new Error("Invalid API response");
      }
    return response.data;
}


/**
 * Fetch a single product by its unique identifier.
 *
 * @param productId - Unique identifier of the product
 * @returns API response containing the product details
 */
export async function getProductById(productId:number): Promise<ApiResponse<ProductDetail>>{
    const response = await api.get<ApiResponse<ProductDetail>>(`/products/${productId}`);
    if (!response.data?.data) {
        throw new Error("Invalid API response");
      }
    return response.data;
}

/**
 * Fetch all available product tags.
 *
 * @returns API response containing a list of tags
 */
export async function getTags(): Promise<ApiResponse<Tag[]>>{
    const response = await api.get<ApiResponse<Tag[]>>("/tags");
    if (!response.data?.data) {
        throw new Error("Invalid API response");
      }
    return response.data;
}

/**
 * Fetch products associated with a specific tag.
 *
 * @param tagId - Identifier of the tag used for filtering products
 * @returns API response containing products grouped under the given tag
 */
export async function getProductsByTagId(tagId:number): Promise<ApiResponse<TagProduct>>{
    const response = await api.get<ApiResponse<TagProduct>>(`/tags/${tagId}`); 
    if (!response.data?.data) {
        throw new Error("Invalid API response");
      } 
    return response.data;
}