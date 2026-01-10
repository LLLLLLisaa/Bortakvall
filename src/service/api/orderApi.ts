import { api } from "./api";
import type { ApiResponse } from "../../types/ApiResponse";
import type { OrderPayload } from "../../types/Order";
import type { OrderResponse } from "../../types/Order";


/**
 * Create a new order for customer
 * @param orderPayload -- The order data to be submitted
 * @param userId -- the Id of user for who places the order
 * @returns ApiResponse indicating whether the order was successfully created
 */
export async function post(orderPayload:OrderPayload, userId: number):Promise<ApiResponse<OrderResponse>>{
    
    const response = await api.post<ApiResponse<OrderResponse>>(`/users/${userId}/orders`,orderPayload);
    if (!response.data || !response.data.data) {
        throw new Error("Invalid API response when creating order");
      }
    return response.data;
}