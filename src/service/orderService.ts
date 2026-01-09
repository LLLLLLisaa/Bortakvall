import { post } from "./api/orderApi";
import type { CartItem } from "../types/Cart";
import type { Customer, OrderPayload, OrderItem } from "../types/Order";


export async function createOrder(orderPayload: OrderPayload, userId: number){
    const response =await  post(orderPayload, userId);
    return response;
}

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