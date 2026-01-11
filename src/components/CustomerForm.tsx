import type { Customer } from "@models/Order";

interface CustomerFormProps {
  value: Customer;
  onChange: (customer: Customer) => void;
}

/**
 * CustomerForm
 *
 * Controlled form component for collecting customer details during checkout.
 *
 * - Receives customer data via props
 * - Emits updated customer object on every input change
 * - Contains no internal state or validation logic
 */
export function CustomerForm({ value, onChange }: CustomerFormProps) {
  return (
    <form className="row g-3">

      <div className="col-md-6">
        <label className="form-label">Förnamn</label>
        <input
          type="text"
          className="form-control"
          value={value.customer_first_name}
          onChange={e =>
            onChange({ ...value, customer_first_name: e.target.value })
          }
          required
        />
      </div>

      <div className="col-md-6">
        <label className="form-label">Efternamn</label>
        <input
          type="text"
          className="form-control"
          value={value.customer_last_name}
          onChange={e =>
            onChange({ ...value, customer_last_name: e.target.value })
          }
          required
        />
      </div>

      <div className="col-12">
        <label className="form-label">Adress</label>
        <input
          type="text"
          className="form-control"
          value={value.customer_address}
          onChange={e =>
            onChange({ ...value, customer_address: e.target.value })
          }
          required
        />
      </div>

      <div className="col-md-4">
        <label className="form-label">Postnummer</label>
        <input
          type="text"
          className="form-control"
          value={value.customer_postcode}
          maxLength={6}
          onChange={e =>
            onChange({ ...value, customer_postcode: e.target.value })
          }
          required
        />
      </div>

      <div className="col-md-8">
        <label className="form-label">Ort</label>
        <input
          type="text"
          className="form-control"
          value={value.customer_city}
          onChange={e =>
            onChange({ ...value, customer_city: e.target.value })
          }
          required
        />
      </div>

      <div className="col-md-6">
        <label className="form-label">E-post</label>
        <input
          type="email"
          className="form-control"
          value={value.customer_email}
           //placeholder="example@email.com"
          onChange={e =>
            onChange({ ...value, customer_email: e.target.value })
          }
          required
        />
      </div>

      <div className="col-md-6">
        <label className="form-label">Telefon (valfritt)</label>
        <input
          type="text"
          className="form-control"
          value={value.customer_phone ?? ""}
          onChange={e =>
            onChange({ ...value, customer_phone: e.target.value })
          }
        />
      </div>

    </form>
  );
}
