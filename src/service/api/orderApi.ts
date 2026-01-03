import { api } from "./api";
import type { ApiResponse } from "../../types/ApiResponse";
import type { OrderPayload } from "../../types/Order";


/**
 * Create a new order for customer
 * @param orderPayload -- The order data to be submitted
 * @param userId -- the Id of user for who places the order
 * @returns ApiResponse indicating whether the order was successfully created
 */
export async function createOrder(orderPayload:OrderPayload, userId: number):Promise<ApiResponse<void>>{
    const response = await api.post<ApiResponse<void>>(`/users/${userId}/orders`,orderPayload);
    return response.data;
}