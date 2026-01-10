import type { CartItem } from "@models/Cart";
import type { Product } from "@models/Product";

/**
 * Cart service
 *
 * Responsibilities:
 * - Encapsulates cart domain logic (quantity rules, stock limits, removal)
 * - Manages cart persistence using localStorage
 *
 * Design note:
 * This module currently combines domain logic and persistence for simplicity.
 * If the application grows, persistence logic can be extracted into
 * a separate layer without affecting the UI or store layers.
 */

const CART_STORAGE_KEY = "cart";

/**
 * Loads cart data from localStorage.
 *
 * Persistence concern:
 * - This function handles localStorage access directly.
 * - In a larger application, persistence could be extracted
 *   into a dedicated persistence layer.
 */
function loadCart(): CartItem[] {
    const raw = localStorage.getItem(CART_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
}

/**
 * Persists the current cart state to localStorage.
 *
 * Persistence concern:
 * - This function is responsible only for storage.
 * - Kept here for simplicity in the current project scope.
 */
function saveCart(cart: CartItem[]): void {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
}

let cart: CartItem[] = loadCart();

export function getCartItems():CartItem[]{
    return [...cart];
}

export function addToCart(product: Product, quantity: number=1):void{
    const productStock =
    product.stock_status === "outofstock"
      ? 0
      : product.stock_quantity ?? 0;

  if (productStock === 0) return;

    const existing = cart.find(item => item.productId === product.id);

    if(existing){
        if (existing.quantity + quantity > existing.productStock) return;
        existing.quantity += quantity;
    }else {
        cart.push({
            productId: product.id,
            name: product.name,
            image: product.images,
            price: product.price,
            productStock,
            quantity,
        })
    }
    saveCart(cart);
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
    if(item.quantity + delta > item.productStock) return;
  
    item.quantity += delta;
  
    if (item.quantity <= 0) {
      cart = cart.filter(i => i.productId !== productId);
    }
    saveCart(cart);
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
    saveCart(cart);

}

export function clearCart(): void {
    cart = [];
    saveCart(cart);
  }
