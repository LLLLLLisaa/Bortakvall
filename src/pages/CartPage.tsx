/**
 * CartPage
 *
 * Displays all items currently added to the shopping cart.
 * The page allows users to:
 * - View cart items
 * - Increase or decrease item quantity
 * - Remove items from the cart
 * - See the total cart price
 * - Navigate to the checkout page
 *
 * Cart data and actions are retrieved from the global cart store (Zustand),
 * ensuring shared cart state across the application.
 */

import { useNavigate } from "react-router-dom";
import { CartItemCard } from "../components/CartItemCard";
import { useCartStore } from "../store/cartStore";
import Loading from "../components/Loading";
import Error from "../components/Error";


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
        <h4>Din varukorg är tom</h4>
      </div>
    );
  }


  return (
    <div className="container mt-4">
      <h3 className="mb-4">Varukorg</h3>

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
        <h5>Totalt belopp: {totalPris} kr</h5>
        <button
          className="btn btn-primary"
          onClick={() => navigate("/checkout")}
        >
          Till kassan
        </button>
      </div>
    </div>
  );
}
