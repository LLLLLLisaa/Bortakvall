import { useLocation, useParams, Link } from "react-router-dom";
import type { OrderResult } from "@models/Order";

/**
 * SuccessPage
 *
 * Displays order confirmation after a successful checkout.
 *
 * Responsibilities:
 * - Read order data passed via navigation state
 * - Display basic order information (id, total, date)
 */
export default function SuccessPage() {
  const { orderId } = useParams();
  const location = useLocation();

  const order = location.state?.order as OrderResult | undefined;

  if (!order) {
    return (
      <div className="container mt-5">
        <p>Kunde inte hitta orderinformation.</p>
        <Link to="/">Tillbaka till startsidan</Link>
      </div>
    );
  }

  return (
    <div className="container mt-5 text-center">
      <h1 className="mb-4">Tack för din beställning! 🎉</h1>

      <div className="card mx-auto" style={{ maxWidth: "420px" }}>
        <div className="card-body">
          <h5 className="card-title mb-3">Orderinformation</h5>

          <p>
            <strong>Ordernummer:</strong><br />
            {orderId}
          </p>

          <p>
            <strong>Totalt belopp:</strong><br />
            {order.order_total} kr
          </p>

          <p>
            <strong>Beställningsdatum:</strong><br />
            {order.order_date}
          </p>
        </div>
      </div>

      <div className="mt-4">
        <Link to="/" className="btn btn-primary">
          Tillbaka till startsidan
        </Link>
      </div>
    </div>
  );
}
