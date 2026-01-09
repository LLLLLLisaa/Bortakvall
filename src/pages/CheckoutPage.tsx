/**
 * Data needed
 * Cart items
 * Total price
 * Order submission status (loading / success / error)
 * 
 * Page state(local)
 * Customer form data (name, address, email, etc.)
 * 
 * Page action
 * Submit order
 * Navigate back to cartpage
 * Navigate back to homepage
 * Navigate to successpage
 */

import { CartItemCard } from "../components/CartItemCard";
import { useCartStore } from "../store/cartStore";
import { useState } from "react";
import { createOrder, buildOrderPayload } from "../service/orderService";
import type { Customer } from "../types/Order";
import { initialCustomer } from "../types/Order";
import { CustomerForm } from "../components/CustomerForm";
import { OrderItemCard } from "../components/OrderItemCard";





export default function CheckoutPage() {
    const { items, totalPris, increaseQuantity, decreaseQuantity,removeFromCart } = useCartStore();
    const [customer, setCustomer] = useState<Customer>(initialCustomer);
    const [errorMsg, setErrorMsg] = useState<string | null>(null);
    const USER_ID = 90;

    const handleSubmit = async ()=>{
        try {
            setErrorMsg(null);
            const orderPayload = buildOrderPayload(customer,items,totalPris);
            await createOrder(orderPayload, USER_ID);
        } catch (error) {
            console.error(error);   
            setErrorMsg("Kunde inte lägga beställningen. Försök igen.");
        }
    }

    return (
        <div className="container mt-4">
          <h1 className="mb-4">Kassa</h1>
      
          {errorMsg && (
            <div className="alert alert-danger">
              Kunde inte lägga beställningen. Försök igen.
            </div>
          )}
      
          {/* Orderöversikt */}
         <div className="card mb-4">
            <div className="card-body bg-success bg-opacity-10 rounded">
                <h5 className="card-title mb-3">Orderöversikt</h5>

                {items.map(item => (
                <OrderItemCard
                    key={item.productId}
                    item={item}
                    onIncrease={() => increaseQuantity(item.productId)}
                    onDecrease={() => decreaseQuantity(item.productId)}
                />
                ))}

                <div className="d-flex justify-content-between mt-3 pt-2 border-top">
                <strong>Totalt</strong>
                <strong>{totalPris} kr</strong>
                </div>
            </div>
         </div>

      
          {/* Leveransadress */}
          <div className="card mb-5">
            <div className="card-body bg-info bg-opacity-10 rounded">
              <h5 className="card-title mb-3">Leveransadress</h5>
      
              <CustomerForm
                value={customer}
                onChange={setCustomer}
              />
            </div>
          </div>
      
          {/* Lägg beställning */}
          <div className="d-flex justify-content-center">
            <button
              type="button"
              className="btn btn-primary btn-lg px-5"
              onClick={handleSubmit}
              disabled={items.length === 0}
            >
              Lägg beställning
            </button>
          </div>
        </div>
      );
      
  }