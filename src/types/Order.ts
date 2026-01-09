// type-- OrderItem/OrderRequest
import type { CartItem } from "./Cart";

export interface OrderPayload {
    customer_first_name: string,
    customer_last_name: string,
    customer_address: string,
    customer_postcode: string,
    customer_city: string,
    customer_email: string,
    customer_phone?: string,
    order_total: number, //måste vara summan av alla item_total
    order_items: OrderItem[],
}

export interface OrderItem {
    product_id: CartItem["productId"];
    qty: CartItem["quantity"],
    item_price: CartItem["price"],
    item_total: number, //måste vara qty multiplicerat med item_price

}

// types/OrderResponse.ts
export interface OrderResponse {
    id: number;          
    order_total: number; 
    order_date: string;  
  }

export interface Customer {
    customer_first_name: string,
    customer_last_name: string,
    customer_address: string,
    customer_postcode: string,
    customer_city: string,
    customer_email: string,
    customer_phone?: string,
}

