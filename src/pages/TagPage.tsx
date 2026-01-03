/**
 * Data needed
 * Products filtered by tagId(tagId from route param)
 * Loading state
 * Error state
 * 
 * Page action
 * Fetch products by tagId
 * Add product to cart
 * Navigate to product detail page
 * Navigate to homepage
 */


import { useParams } from "react-router-dom";
export default function TagPage() {
  const { id } = useParams();
    
  return <h1>TagProduct {id}</h1>;
  }