import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import type { ProductDetail } from "@models/Product";
import Loading from "@components/Loading";
import Error from "@components/Error";
import { useCartStore } from "@store/cartStore";
import { fetchProductById } from "@service/productService";


/**
 * ProductPage
 *
 * Displays detailed information for a single product.
 *
 * Responsibilities:
 * - Fetch product details by product id from API
 * - Show product image, name, description, price and stock status
 * - Allow user to select quantity
 * - Add selected product and quantity to the cart
 *
 * Integration:
 * - Uses global cart store (Zustand) to manage cart state
 */
export default function ProductPage() {
    
    const IMAGE_BAS = import.meta.env.VITE_IMAGE_BASE;

    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [errorMsg, setErrorMsg] = useState<string | null>(null);
    const [count, setCount] = useState(1);
    const [product, setProduct]= useState<ProductDetail|null>(null);
        
    const addToCart = useCartStore((state) => state.addToCart);


    useEffect(()=>{
        if(!id) return;

        setLoading(true);
        setErrorMsg(null);
        setProduct(null);
        
        (async() =>{
            try {
                const product = await fetchProductById(Number(id));
                setProduct(product);
            } catch (error) {
                //console.error(error);
                setErrorMsg("Kunde inte ladda produkten");   
            }finally{
                setLoading(false);
            }
        })();
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
                    max={product.stock_quantity ?? undefined}
                    value={count}
                    onChange={(e) => { 
                        const inputValue = Number(e.target.value);
                        setCount(Number.isNaN(inputValue)?1:inputValue)}
                       }
                    className="form-control"
                    style={{ width: "80px" }}
                    />

                    <button 
                    className="btn btn-primary px-4"
                    disabled={product.stock_status !== "instock"}
                    onClick={()=>{
                        if(count>0){                       
                        addToCart(product,count)
                        setCount(1)
                    }}
                        }>
                    Lägg i kundvagn
                    </button>
                </div>

                {/* Go to cart */}
                <div className="mt-3">
                    <Link to="/cart" className="btn btn-outline-secondary">
                        Gå till varukorg
                    </Link>
                </div>
        
            </div>
          </div>
        </div>
      );
      
    

  /* return <h1>Product {id}</h1>; */
    
}