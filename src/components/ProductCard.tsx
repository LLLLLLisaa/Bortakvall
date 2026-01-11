import type { Product } from "../types/Product";
import { Link } from "react-router-dom";
import { useCartStore } from "@store/cartStore";

type ProductCardProps ={
    product: Product;
}

/**
 * ProductCard
 *
 * Presentational component for displaying a single product
 * in product listings (home page, tag page, etc.).
 *
 * - Displays product image, name and price
 * - Provides quick actions: view details and add to cart
 */
export function ProductCard({product}: ProductCardProps){
    const IMAGE_BAS = import.meta.env.VITE_IMAGE_BASE;
    const addToCart = useCartStore((state) => state.addToCart);

    return (
        <div className="card h-100">
            <div
                style={{
                    backgroundColor: "#F1E6DC",   
                    padding: "16px",
                    borderRadius: "12px",
                }}
                >
                <Link to={`/products/${product.id}`}>
                    <img
                    src={`${IMAGE_BAS}${product.images.thumbnail}`}
                    alt={product.name}
                    style={{
                        width: "100%",
                        objectFit: "contain",
                    }}
                    />
                </Link>
            </div>
    
            <div
                className="card-body d-flex flex-column"
                style={{ backgroundColor: "#FBF6EF" }} 
            >

            <Link to={`/products/${product.id}`} className="text-decoration-none">
                <h5
                    className="mb-2"
                    style={{
                    fontFamily: "'Baloo 2', cursive",
                    color: "#E38B6D",
                    fontWeight: 600,
                    }}
                >
                    {product.name}
                </h5>
            </Link>

            <div className="flex-grow-1" />

            <p 
                className="mb-3"
                style={{
                    color: "#5C8FA6", 
                    fontWeight: 500,
                }}>
                    {product.price} kr
            </p>
    
            <div className="mt-auto d-flex flex-column gap-2">

            <button
                className="btn btn-sm"
                style={{
                    backgroundColor: "#E38B6D",
                    color: "white",
                    borderRadius: "10px",
                  }}
                onClick={() => addToCart(product, 1)}
            >
                Lägg i kundvagn
            </button>

            <Link
                to={`/products/${product.id}`}
                style={{
                    textAlign: "center",
                    color: "#845EC2",
                    textDecoration: "underline",
                    fontSize: "0.9rem",
                    transition: "background-color 0.15s ease",
                }}
                onMouseOver={(e) =>
                    (e.currentTarget.style.color = "#6A4BC3")
                }
                onMouseOut={(e) =>
                    (e.currentTarget.style.color = "#845EC2")
                }
                >
                Läs mer
            </Link>

            </div>
          </div>
        </div>
      );
}