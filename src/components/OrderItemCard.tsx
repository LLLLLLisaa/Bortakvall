// components/OrderItemCard.tsx
import { Link } from "react-router-dom";
import type { CartItem } from "../types/Cart";

interface OrderItemCardProps {
  item: CartItem;
  onIncrease: () => void;
  onDecrease: () => void;
}

// components/OrderItemCard.tsx
export function OrderItemCard({ item, onIncrease, onDecrease}: OrderItemCardProps) {
    const subtotal = item.price * item.quantity;
  
    return (
      <div
        className="
          d-flex justify-content-between align-items-center
          border rounded p-3 mb-2
          bg-danger bg-opacity-10
        "
      >
        <div className="flex-grow-1">
            <Link
            to={`/products/${item.productId}`}
            className="fw-semibold text-decoration-none text-dark"
            >
            {item.name}
            </Link>
        </div>
  
        <div className="d-flex align-items-center gap-2">
          <button
            type="button"
            className="btn btn-outline-secondary btn-sm"
            onClick={onDecrease}
          >
            −
          </button>
  
          <span>{item.quantity}</span>
  
          <button
            type="button"
            className="btn btn-outline-secondary btn-sm"
            onClick={onIncrease}
          >
            +
          </button>
        </div>
  
        <div className="text-end" style={{ width: "80px" }}>
          <strong>{subtotal} kr</strong>
        </div>
      </div>
    );
  }
  