import type { CartItem } from "./Cart";

/**
 * Payload used when creating a new order.
 *
 * This interface represents the exact structure expected by the backend API
 * when submitting an order, including customer information and order items.
 */
export interface OrderPayload {
    customer_first_name: string,
    customer_last_name: string,
    customer_address: string,
    customer_postcode: string,
    customer_city: string,
    customer_email: string,
    customer_phone?: string,

    /** Total order amount (sum of all item totals) */
    order_total: number, 
    order_items: OrderItem[],
}

 /**
 * Represents a single item within an order payload.
 *
 * Values are derived from the corresponding CartItem to ensure
 * consistency between cart and order data.
 */
export interface OrderItem {
    product_id: CartItem["productId"];
    qty: CartItem["quantity"],
    item_price: CartItem["price"],

    /** Quantity multiplied by item price */
    item_total: number, 
}

/**
 * Response returned from the API after a successful order creation.
 */
export interface OrderResult {
    id: number;          
    order_total: number; 
    order_date: string;  
  }

 /**
 * Represents customer information associated with an order.
 *
 * This interface can be reused independently from order creation
 * when handling customer-related data.
 */
export interface Customer {
    customer_first_name: string,
    customer_last_name: string,
    customer_address: string,
    customer_postcode: string,
    customer_city: string,
    customer_email: string,
    customer_phone?: string,
}

