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
  const { category } = useParams<{ category: string }>();

  return (
    <main className="container">
      <h1 className="my-4">Category: {category}</h1>
      <p>This page will show products for this category later.</p>
    </main>
  );
}
