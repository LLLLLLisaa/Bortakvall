import {create} from "zustand";
import type { CartItem } from "../types/Cart";
import type { ProductDetail,Product } from "../types/Product";
import * as cartService from "../storage/cartStorage";

/**
 * CartStore defines the global cart state and available cart actions.
 */
interface CartStore {
    /** All items currently in the cart */
    items: CartItem[];

    /** Total number of items in the cart (sum of quantities) */
    totalItems: number;

    /** Total price of all items in the cart */
    totalPris: number;

    /**
   * Add a product to the cart.
   * @param product - Product or product detail to be added
   * @param quantity - Optional quantity, defaults to 1
   */
    addToCart: (product: ProductDetail | Product, quantity?: number) => void;

    /**
   * Increase quantity of a specific cart item.
   * @param productId - ID of the product
   * @param quantity - Optional amount to increase, defaults to 1
   */
    increaseQuantity:(productId: number, quantity?: number) => void;

    /**
   * Decrease quantity of a specific cart item.
   * @param productId - ID of the product
   * @param quantity - Optional amount to decrease, defaults to 1
   */
    decreaseQuantity:(productId: number, quantity?: number) => void;

    /**
   * Remove an item completely from the cart.
   * @param productId - ID of the product to remove
   */
    removeFromCart: (productId: number) => void;

    /** Clear all items from the cart */
    clearCart: () => void;

    refreshCart: () => void;
}

//define store
/**
 * useCartStore
 * Global cart store implemented with Zustand.
 * Handles cart state and synchronizes data with cartService.
 */
export const useCartStore = create<CartStore> ((set) =>({
    items: cartService.getCartItems(),

    totalItems: cartService
    .getCartItems()
    .reduce((sum, item) => sum + item.quantity, 0),

    totalPris: cartService.getTotalPrice(),

    addToCart: (product, quantity=1) =>{
        cartService.addToCart(product,quantity);
        set({
            items: cartService.getCartItems(),
            totalItems: cartService.getCartItems().reduce((sum, item) => sum + item.quantity, 0),
            totalPris: cartService.getTotalPrice(),
        })
    },

    increaseQuantity: (productId, quantity=1) =>{
        cartService.increaseQuantity(productId,quantity);
        set({
            items: cartService.getCartItems(),
            totalItems: cartService.getCartItems().reduce((sum, item) => sum + item.quantity, 0),
            totalPris: cartService.getTotalPrice(),
        })
    },

    decreaseQuantity: (productId,quantity=1)=>{
        cartService.decreaseQuantity(productId, quantity);
        set({
            items: cartService.getCartItems(),
            totalItems:cartService.getCartItems().reduce((sum, item) => sum + item.quantity, 0),
            totalPris: cartService.getTotalPrice(),
        })
    },

    removeFromCart: (productId) =>{
        cartService.removeItem(productId);
        set({
            items: cartService.getCartItems(),
            totalItems: cartService.getCartItems().reduce((sum, item) => sum + item.quantity, 0),
            totalPris: cartService.getTotalPrice(),
        })
    },

    clearCart: ()=>{
        cartService.clearCart();
        set({
            items: [],
            totalItems: 0,
            totalPris: 0,
        })
    },

    refreshCart: ()=>{
        set({
            items: cartService.getCartItems(),
            totalItems: cartService.getCartItems().reduce((sum, item) => sum + item.quantity, 0),
            totalPris: cartService.getTotalPrice(),
        })
    }

}))


