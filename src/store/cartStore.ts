import {create} from "zustand";
import type { CartProduct } from "../types/Cart";
import type { ProductDetail } from "../types/Product";

interface CartStore {
    items: CartProduct[];
    totalItems: number;
    addToCart: (product: ProductDetail, quantity: number) => void;
    removeFromCart: (productId: number) => void;
    updateQuantity: (productId: number, quantity: number) => void;
    clearCart: () => void;
}

//define store
export const useCartStore = create<CartStore> ((set) =>({
    items: [],
    totalItems: 0,
    addToCart: (product,quantity) => {
        set((state) => {
            return {
                items: [...state.items, {
                    productId: product.id,
                    name: product.name,
                    price: product.price,
                    quantity,
                }]

            }
            
        })
    },
    removeFromCart: (productId) => {
        set((state) => {
            return {
                items: state.items.filter((item) => item.productId !== productId),
            }

        })
    },
    updateQuantity: (productId: number, quantity: number) =>{
        set((state) => {
            return {
                items: state.items.map((item) => item.productId === productId ? {...item,quantity} : item),
            }
        })
    },
    clearCart: () => {set({ items: [] });},

}))


