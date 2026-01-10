import { createOrder } from "@service/api/orderApi";
import type { CartItem } from "@models/Cart";
import type { Customer, OrderPayload, OrderItem,OrderResult } from "@models/Order";
import type { ApiResponse } from "@models/ApiResponse";

/**
 * Order service helpers.
 *
 * Contains business-level functions related to order handling,
 * such as submitting an order and building the order payload
 * from customer and cart data.
 *
 * This layer sits between the API layer and the page layer.
 */


/**
 * Submits a new order for a specific user.
 *
 * Delegates the actual API request to the order API layer.
 * Errors are propagated to the caller (page layer).
 *
 * @param orderPayload - Complete order data to be sent to the backend
 * @param userId - Identifier of the user placing the order
 * @returns API response containing the created order
 */
export async function submitOrder(orderPayload: OrderPayload, userId: number)
: Promise<ApiResponse<OrderResult>>{
    return createOrder(orderPayload, userId);
}


/**
 * Builds an OrderPayload object from customer information
 * and cart items.
 *
 * Transforms cart items into order items and calculates
 * item totals required by the backend API.
 *
 * @param customer - Customer details from the checkout form
 * @param cartItems - Items currently in the shopping cart
 * @param total - Total order price
 * @returns A complete OrderPayload object
 */
export function buildOrderPayload(
  customer: Customer,
  cartItems: CartItem[],
  total: number
): OrderPayload {
  const orderItems: OrderItem[] = cartItems.map(item => ({
    product_id: item.productId,
    qty: item.quantity,
    item_price: item.price,
    item_total: item.price * item.quantity,
  }));

  return {
    ...customer,
    order_total: total,
    order_items: orderItems,
  };
}