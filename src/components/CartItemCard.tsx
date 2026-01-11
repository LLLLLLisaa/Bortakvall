import { Link } from "react-router-dom";
import type { CartItem } from "@models/Cart";


type Props = {
  item: CartItem;
  onIncrease: () => void;
  onDecrease: () => void;
  onRemove: () => void;
};


/**
 * CartItemCard
 *
 * Displays a single cart item with:
 * - Product image and name (clickable, links to product page)
 * - Quantity controls (increase / decrease)
 * - Remove button
 */
export function CartItemCard({
  item,
  onIncrease,
  onDecrease,
  onRemove,
}: Props) {
    const IMAGE_BAS = import.meta.env.VITE_IMAGE_BASE;

  return (
    <div className="card mb-3">
      <div className="row g-0 align-items-center">

        {/* Image */}
        
        <div className="col-3 text-center">
        <Link
            to={`/products/${item.productId}`}>
          <img
            src={`${IMAGE_BAS}${item.image?.thumbnail}`}
            alt={item.name}
            className="img-fluid rounded w-75"
          />
         </Link>
        </div>

        {/* Info */}
        <div className="col-9">
          <div className="card-body py-2">
          <Link
            to={`/products/${item.productId}`}
            className="text-decoration-none">
                <strong className="text-primary">
                    {item.name}
                </strong>
          </Link>

            <p className="mb-2 fw-semibold">
                {item.price * item.quantity} kr
            </p>

            <div className="d-flex justify-content-between align-items-center mt-2">
              
              {/* Quantity controls */}
              <div className="btn-group btn-group-sm">
                <button
                  className="btn btn-outline-secondary"
                  onClick={onDecrease}
                >
                  −
                </button>
                <span className="btn btn-outline-secondary disabled">
                  {item.quantity}
                </span>
                <button
                  className="btn btn-outline-secondary"
                  onClick={onIncrease}
                >
                  +
                </button>
              </div>

              {/* Remove */}
              <button
                className="btn btn-outline-danger btn-sm"
                onClick={onRemove}
              >
                🗑️
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
