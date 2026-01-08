import {create} from "zustand";
import type { CartItem } from "../types/Cart";
import type { ProductDetail,Product } from "../types/Product";
import * as cartService from "../service/cartService";

interface CartStore {
    items: CartItem[];
    totalItems: number;
    totalPris: number;
    addToCart: (product: ProductDetail | Product, quantity?: number) => void;
    increaseQuantity:(productId: number, quantity?: number) => void;
    decreaseQuantity:(productId: number, quantity?: number) => void;
    removeFromCart: (productId: number) => void;
    clearCart: () => void;
}

//define store
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
    }

}))


