/**
 * Data needed
 * Cart items
 * Total price
 * 
 * Page action
 * Update item quantity
 * Remove item from cart
 * Navigate to checkoutpage
 * Navigate to homepage
 * Navigate to productpage
 */

import { useNavigate } from "react-router-dom";
import { CartItemCard } from "../components/CartItemCard";
import { useCartStore } from "../store/cartStore";

export default function CartPage() {
  
  const navigate = useNavigate();

  const {
    items,
    totalPris,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCartStore();


  if (items.length === 0) {
    return (
      <div className="container mt-4">
        <h4>Your cart is empty</h4>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <h3 className="mb-4">Shopping Cart</h3>

      {items.map((item) => (
        <CartItemCard
          key={item.productId}
          item={item}
          onIncrease={() => increaseQuantity(item.productId)}
          onDecrease={() => decreaseQuantity(item.productId)}
          onRemove={() => removeFromCart(item.productId)}
        />
      ))}

      <div className="d-flex justify-content-between align-items-center mt-4">
        <h5>Total: {totalPris} kr</h5>
        <button
          className="btn btn-primary"
          onClick={() => navigate("/checkout")}
        >
          Checkout
        </button>
      </div>
    </div>
  );
}
