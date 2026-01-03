/**
 * Data needed
 * Selected product
 * Loading state for product
 * Error state
 * 
 * Page state(local)
 * Selected quantity (optional, default = 1)
 * 
 * Page action
 * Fetch product by id
 * Add product to cart
 * Navigate to checkoutpage
 * Navigate back to homepage
 * Navigate to tagPage
 */

import { useParams } from "react-router-dom";

export default function ProductPage() {
  const { id } = useParams();

  return <h1>Product {id}</h1>;
}