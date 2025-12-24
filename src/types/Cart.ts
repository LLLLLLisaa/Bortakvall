//type---CartProduct/CartItem
export interface CartProduct {
    productId: number;
    name: string;
    price: number;
    quantity: number;
    image?: string;
}