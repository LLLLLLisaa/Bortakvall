import {create} from "zustand";
import type { CartProduct } from "../types/Cart";
import type { Product } from "../types/Product";

interface CartStore {
    items: CartProduct[];
    addToCart: (product: Product) => void;
    removeFromCart: (productId: number) => void;
    updateQuantity: (productId: number, quantity: number) => void;
    clearCart: () => void;
}

//define store
export const useCartStore = create<CartStore> ((set) =>({
    items: [],
    addToCart: (product) => {
        set((state) => {
            return {
                items: [...state.items, {
                    productId: product.id,
                    name: product.name,
                    price: product.price,
                    quantity: 1
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
            const index = state.items.findIndex(
                (item) => item.productId === productId
              );
          
              if (index === -1) {
                return state; // 或者 { items: state.items }
              }
          
              const updatedItems = [...state.items];
              updatedItems[index] = {
                ...updatedItems[index],
                quantity,
              };
          
              return { items: updatedItems };
        })
    },
    clearCart: () => {set({ items: [] });},

}))


