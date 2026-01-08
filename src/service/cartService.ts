import type { CartItem } from "../types/Cart";
import type { Product } from "../types/Product";

/**
 * Returns a shallow copy of all items currently in the cart.
 *
 * @returns {CartItem[]} Array of cart items
 */

let cart: CartItem[]=[];

export function getCartItems():CartItem[]{
    return [...cart];
}

export function addToCart(product: Product, quantity: number=1):void{
    const existing = cart.find(item => item.productId === product.id);

    if(existing){
        existing.quantity += quantity;
    }else {
        cart.push({
            productId: product.id,
            name: product.name,
            image: product.images,
            price: product.price,
            quantity,
        })
    }
}

export function getItemSubtotal(item: CartItem): number {
    return item.price * item.quantity;
  }

export function getTotalPrice():number {
    return cart.reduce((sum,item)=>sum+item.price*item.quantity,0)
}

export function updateQuantity(
    productId: number,
    delta: number = 1
  ): void {
    const item = cart.find(i => i.productId === productId);
    if (!item) return;
  
    item.quantity += delta;
  
    if (item.quantity <= 0) {
      cart = cart.filter(i => i.productId !== productId);
    }
  }
  

export function increaseQuantity(
    productId: number,
    amount: number = 1
):void{
    updateQuantity(productId, amount);
}

export function decreaseQuantity(
    productId: number, 
    amount: number = 1
):void{
   updateQuantity(productId, -amount);
}

export function removeItem(productId: number):void {
    cart = cart.filter(item => item.productId !== productId);

}

export function clearCart(): void {
    cart = [];
  }
