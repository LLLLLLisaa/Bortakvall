
import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import type { Product} from "@models/Product";
import Loading from "@components/Loading";
import Error from "@components/Error";
import { ProductCard } from "@components/ProductCard";
import { fetchProductsByTagId } from "@service/productService";

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


  useEffect(()=>{
    if(!tagId) return;
    (async() =>{
      try {
        const tagProduct = await fetchProductsByTagId(Number(tagId));
        const products: Product[] = tagProduct.products
        const tagName = tagProduct.name
        setProducts(products);
        setTagName(tagName);
      } catch (error) {
        console.error(error);
        setErrorMsg("Kunde inte ladda produktern under tag")
        
      }finally{
        setLoading(false)
      }
    })();
  },[tagId])

    if (loading) return <Loading />;
    if (errorMsg) return <Error message ={errorMsg} />;
  


    return (
      <main className="container">
       
        <div className="d-flex justify-content-between align-items-center my-4">
          <h1 className="mb-0 d-none d-lg-block">{tagName}</h1>

          <Link to="/cart" className="btn btn-outline-primary">
            Gå till varukorg
          </Link>
        </div>

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