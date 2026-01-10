import * as productApi from "@service/api/productApi"
import type { Product, ProductDetail,TagProduct,Tag } from "@models/Product"

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




