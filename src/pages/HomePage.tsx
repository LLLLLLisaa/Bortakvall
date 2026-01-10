import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { ProductCard } from "@components/ProductCard";
import type { Product } from "@models/Product";
import Loading from "@components/Loading";
import Error from "@components/Error";
import { fetchAllProducts }  from "@service/productService"

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

    useEffect(() =>{
        (async() =>{
           try {
            const products = await fetchAllProducts();
            setProducts(products)
            
           } catch (error) {
            console.error(error);
            setErrorMsg("Kunde inte ladda produkter")
            setProducts([]);
          }finally{
            setLoading(false);
          }
        })
        ();
    },[])

    if (loading && products.length === 0) return <Loading />;
    if (errorMsg) return <Error message ={errorMsg} />;

    return (
        <main className="container">
           <div className="d-flex justify-content-between align-items-center my-4">
            <h1 className="mb-0">Alla produkter</h1>

                <Link to="/cart" className="btn btn-outline-primary">
                    Gå till varukorg
                </Link>
           </div>

           {products.length === 0 && (
            <div className="alert alert-info">
                Inga produkter hittades under denna tag.
            </div>
            )}

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