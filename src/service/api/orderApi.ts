import { api } from "@service/api/api";
import type { ApiResponse } from "@models/ApiResponse";
import type { OrderPayload } from "@models/Order";
import type { OrderResult } from "@models/Order";


/**
 * Create a new order for customer
 * @param orderPayload -- The order data to be submitted
 * @param userId -- the Id of user for who places the order
 * @returns ApiResponse indicating whether the order was successfully created
 */
export async function createOrder(orderPayload:OrderPayload, userId: number): Promise<ApiResponse<OrderResult>>{
    
    const response = await api.post<ApiResponse<OrderResult>>(`/users/${userId}/orders`,orderPayload);

    if (response.data.status !== "success") {
        const errorMsg = response.data.message;
        console.log("---error reason from api---", errorMsg)   
        console.log("---data of unsuccesful result---", response.data);
        throw new Error(errorMsg+". Please make sure the email address is valid.");
      }
    return response.data;
}