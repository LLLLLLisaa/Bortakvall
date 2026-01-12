import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useCartStore } from "@store/cartStore";
import { submitOrder,buildOrderPayload } from "@service/orderService";
import type { Customer } from "@models/Order";
import { CustomerForm } from "@components/CustomerForm";
import { OrderItemCard } from "@components/OrderItemCard";
import Error from "@components/Error";

/**
 * CheckoutPage
 *
 * Handles the checkout process:
 * - Displays cart items and total price
 * - Collects customer information
 * - Submits the order to the backend
 *
 * Navigates to the success page only when the order
 * is successfully created, otherwise shows an error message.
 */
export default function CheckoutPage() {
    const CUSTOMER_STORAGE_KEY = "customer";
    const USER_ID = Number(import.meta.env.VITE_USER_ID);

    const navigate =useNavigate();
    const { items, totalPris, increaseQuantity, decreaseQuantity, clearCart} = useCartStore();
    const [customer, setCustomer] = useState<Customer>(
        () => {        
            const stored = localStorage.getItem(CUSTOMER_STORAGE_KEY);
                return stored
                ? JSON.parse(stored)
                : {
                    customer_first_name: "",
                    customer_last_name: "",
                    customer_address: "",
                    customer_postcode: "",
                    customer_city: "",
                    customer_email: "",
                    customer_phone: "",
                    };
            });
      
    const [errorMsg, setErrorMsg] = useState<string | null>(null);
    
    const handleSubmit = async ()=>{
        try {
            setErrorMsg(null);
            const orderPayload = buildOrderPayload(customer,items,totalPris);
            const response = await submitOrder(orderPayload, USER_ID);
            clearCart();
            localStorage.removeItem(CUSTOMER_STORAGE_KEY);
            const orderId = response.data.id;

            navigate(`/success/${orderId}`,{
                state:{
                    order: response.data,},
            });
   
        } catch (err) {
            /* console.log(error);   
            setErrorMsg(error.message); */


            //const message = err instanceof Error ? err.message : String(err);
            //console.log(message);   
            //setErrorMsg("Kunde inte lägga beställningen. Försök igen.");
            setErrorMsg("Please make sure the email address is valid.");
        }
    }

    useEffect(() => {
        localStorage.setItem(
          CUSTOMER_STORAGE_KEY,
          JSON.stringify(customer)
        );
      }, [customer]);

    return (
        <div className="container mt-4">
          <h1 className="mb-4">Kassa</h1>
      
          {errorMsg && <Error message={errorMsg} />}

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