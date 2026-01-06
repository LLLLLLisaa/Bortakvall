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



import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../service/api/productApi";
import type { ProductDetail } from "../types/Product";
import Loading from "../components/Loading";
import Error from "../components/Error";

export default function ProductPage() {
    const IMAGE_BAS = import.meta.env.VITE_IMAGE_BASE;

    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [errorMsg, setErrorMsg] = useState<string | null>(null);
    const [count, setCount] = useState(1);
    const [product, setProduct]= useState<ProductDetail|null>(null);
        


    useEffect(()=>{
        async function fetchProductById() {
            try {
                const response = await getProductById(Number(id));
                const product = response.data;
                setProduct(product);
            } catch (error) {
                console.error(error);  /* "Error" --- show for developer */
                setErrorMsg("Kunde inte ladda produkten");   /* "ErrorMsg" --- show for user */    
            } finally{
                setLoading(false);
            }
        }
        fetchProductById();
    },[id])

    if (loading) return <Loading />;
    if (errorMsg) return <Error message ={errorMsg} />;
    if (!product) return <Error />

    return (
        <div className="container mt-4">
          <div className="row">
      
            {/* Left: Image (不改) */}
            <div className="col-md-6">
              <img
                src={`${IMAGE_BAS}${product.images.large}`}
                alt={product.name}
                className="img-fluid"
              />
            </div>
      
            {/* Right: Info */}
            <div className="col-md-6">
      
              {/* Name */}
                <div className="mb-3">
                    <h1
                        className="mb-1"
                        style={{
                        fontFamily: "'Baloo 2', cursive",
                        color: "#FF8A3D",
                        fontWeight: 600,
                        letterSpacing: "0.3px",
                        }}
                    >
                        {product.name}
                    </h1>

                    <div
                        className="small"
                        style={{ color: "#6B4F3F" }}
                        dangerouslySetInnerHTML={{ __html: product.description }}
                    />
                </div>
      
              {/* Price */}
                <div className="mb-3">
                    <span className="small" style={{ color: "#6b6478" }}>
                    Pris
                    </span>
                    <p
                    className="fs-4 mb-0"
                    style={{ color: "#2A6F97" }}   
                    >
                    {product.price} kr/kg
                    </p>
                </div>
      
              {/* Stock */}
                <div className="mb-3">
                    {product.stock_status === "instock" ? (
                    <span style={{ color: "#2fa36b" }}>
                        I lager ({product.stock_quantity})
                    </span>
                    ) : (
                    <span style={{ color: "#e25555" }}>
                        Slut i lager
                    </span>
                    )}
                </div>
      
              {/* Add to cart */}
                <div className="d-flex align-items-center gap-2">
                    <input
                    type="number"
                    min={1}
                    value={count}
                    onChange={(e) => setCount(Number(e.target.value))}
                    className="form-control"
                    style={{ width: "80px" }}
                    />

                    <button className="btn btn-primary px-4">
                    Lägg i kundvagn
                    </button>
                </div>
        
            </div>
          </div>
        </div>
      );
      
    

  /* return <h1>Product {id}</h1>; */
    
}