import { getProducts } from "../service/api/productApi";
import { useEffect, useState } from "react";
import { ProductCard } from "../components/ProductCard";
import type { Product } from "../types/Product";

/**
 * Data needed
 * List of Products -1
 * List of tags
 * Loading state for products -1
 * Loading state of tags
 * Error state（tags/products) -1
 * 
 * Page action
 * Fetch all products -1
 * Navigate to product detail page -1
 * Navigate to tag page
 */

export default function HomePage() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const IMG_BASE = import.meta.env.VITE_IMAGE_BASE;

    useEffect (() => {
        async function fetchProducts() {
          try {
              const response = await getProducts();
              setProducts(response.data)
          } catch (error) {
            setError("Failed to load products"); 
          }finally{
            setLoading(false);
          }
        }
        fetchProducts();
    },[])

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <main className="container">
            <h1 className="my-4 d-none d-lg-block">All products</h1>

            <div className="row">
                {products.map(product => (
                    <div
                    key={product.id}
                    className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
                    >
                    <ProductCard product={product} />
                    </div>
                ))}
            </div>
        </main>
      ); 


  }