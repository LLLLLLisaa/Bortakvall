//type---CartProduct/CartItem
import type { Images } from "./Product";

export interface CartItem {
    productId: number;
    name: string;
    price: number;
    productStock: number;
    quantity: number;
    image?: Images;
}