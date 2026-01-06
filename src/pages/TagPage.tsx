
import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import { getProductsByTagId } from "../service/api/productApi";
import type { Product } from "../types/Product";
import Loading from "../components/Loading";
import Error from "../components/Error";
import { ProductCard } from "../components/ProductCard";

/**
 * TagPage
 *
 * Displays a list of products filtered by a specific tag.
 *
 * Route param:
 * - tagId: string
 *   Retrieved from the URL using useParams().
 *   Converted to number before being used in API calls.
 *
 * Data handling:
 * - Fetches products by tagId from the API
 * - Stores the resulting product list in component state
 * - Stores the tag name in state for display in the page heading
 *
 * UI states:
 * - Loading state while fetching data
 * - Error state if the API request fails
 *
 * This page allows users to:
 * - Browse products under a specific tag
 * - Navigate to individual product detail pages
 */

export default function TagPage() {
  const {tagId} = useParams();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [tagName, setTagName] = useState("");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);


  useEffect (() => {
      async function fetchTagProducts() {
        try {
            const response = await getProductsByTagId(Number(tagId));
            const products:Product[] = response.data.products;
            const tagName = response.data.name
            setProducts(products)
            setTagName(tagName);
        } catch (error) {
          console.error(error);  /* "Error" --- show for developer */
          setErrorMsg("Kunde inte ladda produkten");   /* "ErrorMsg" --- show for user */
        }finally{
          setLoading(false);
        }
      }
      fetchTagProducts();
  },[tagId])

    if (loading) return <Loading />;
    if (errorMsg) return <Error message ={errorMsg} />;
  


    return (
      <main className="container">
        <h1 className="my-4 d-none d-lg-block">{tagName}</h1>

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