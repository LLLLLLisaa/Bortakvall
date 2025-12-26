// type-- OrderItem/OrderRequest

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
    product_id: number,
    qty: number,
    item_price: number,
    item_total: number, //måste vara qty multiplicerat med item_price

}