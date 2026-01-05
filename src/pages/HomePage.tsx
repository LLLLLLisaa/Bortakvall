import { getProducts } from "../service/api/productApi";
import { useEffect, useState } from "react";
import { ProductCard } from "../components/ProductCard";
import type { Product } from "../types/Product";
import Loading from "../components/Loading";
import Error from "../components/Error";

/**
 * HomePage
 *
 * Displays a list of all products in the webshop.
 *
 * - Fetches product data from the API on initial render
 * - Handles loading and error states
 * - Renders products using the ProductCard component
 *
 * This page serves as the main entry point of the webshop.
 */

export default function HomePage() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [errorMsg, setErrorMsg] = useState<string | null>(null);

    useEffect (() => {
        async function fetchProducts() {
          try {
              const response = await getProducts();
              setProducts(response.data)
          } catch (error) {
            console.error(error);  /* "Error" --- show for developer */
            setErrorMsg("Failed to load products");   /* "ErrorMsg" --- show for user */
          }finally{
            setLoading(false);
          }
        }
        fetchProducts();
    },[])

    if (loading) return <Loading />;
    if (errorMsg) return <Error message ={errorMsg} />;

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