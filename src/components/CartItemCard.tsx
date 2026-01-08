import type { CartItem } from "../types/Cart";

type Props = {
  item: CartItem;
  onIncrease: () => void;
  onDecrease: () => void;
  onRemove: () => void;
};

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
          <img
            src={`${IMAGE_BAS}${item.image?.thumbnail}`}
            alt={item.name}
            className="img-fluid rounded w-75"
          />
        </div>

        {/* Info */}
        <div className="col-9">
          <div className="card-body py-2">
            <h6 className="card-title mb-1">{item.name}</h6>

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
