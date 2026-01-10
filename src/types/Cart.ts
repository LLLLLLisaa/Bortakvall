import type { Images } from "./Product";

/**
 * Represents a product item stored in the shopping cart.
 *
 * This interface contains only the data required for cart-related
 * operations, not the full product model.
 */
export interface CartItem {
    productId: number;
    name: string;
    price: number;
    productStock: number;
    quantity: number;
    image?: Images;
}