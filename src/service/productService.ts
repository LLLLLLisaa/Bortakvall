import * as productApi from "@service/api/productApi"
import type { Product, ProductDetail,TagProduct,Tag } from "@models/Product"

/**
 * Product service.
 *
 * Provides high-level functions for fetching product-related data.
 * This service abstracts away API response structures and exposes
 * clean domain models to the page layer.
 */
export async function fetchAllProducts():Promise<Product[]> {
    const response = await productApi.getProducts();
    return response.data;
}

export async function fetchProductById(productId: number): Promise<ProductDetail> {
    const response = await productApi.getProductById(productId);
    return response.data;

}

export async function fetchAllTags():Promise<Tag[]> {
    const response = await productApi.getTags();
    return response.data;
}

export async function fetchProductsByTagId(tagId: number): Promise<TagProduct>{
    const response = await productApi.getProductsByTagId(tagId);
    return response.data;
}




