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
  return (
    <div className="card mb-3">
      <div className="row g-0 align-items-center">
        <div className="col-md-3 text-center">
          <img
            src={item.image}
            alt={item.name}
            className="img-fluid rounded-start"
          />
        </div>

        <div className="col-md-9">
          <div className="card-body d-flex flex-column h-100">
            <div>
              <h5 className="card-title mb-1">{item.name}</h5>
              <p className="mb-1">Price: {item.price} kr</p>
              <p className="mb-0">
                Subtotal: {item.price * item.quantity} kr
              </p>
            </div>

            <div className="mt-auto d-flex justify-content-between align-items-center">
              <div className="btn-group" role="group">
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={onDecrease}
                >
                  −
                </button>
                <span className="btn btn-outline-secondary disabled">
                  {item.quantity}
                </span>
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={onIncrease}
                >
                  +
                </button>
              </div>

              <button
                type="button"
                className="btn btn-outline-danger"
                onClick={onRemove}
                aria-label="Remove item"
              >
                🗑
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
