import type { Product } from "../types/Product";
import { Link } from "react-router-dom";

type ProductCardProps ={
    product: Product;
}

export function ProductCard({product}: ProductCardProps){
    const IMAGE_BAS = import.meta.env.VITE_IMAGE_BASE;

    return (
        <div className="card h-100">
          <Link to={`/products/${product.id}`}>
            <img
                src={`${IMAGE_BAS}${product.images.thumbnail}`}
                className="card-img-top"
                alt={product.name}
            />
           </Link>
    
          <div className="card-body d-flex flex-column">
            <Link to={`/products/${product.id}`}>
              <h5 className="card-title">{product.name}</h5>
            </Link>
            <p className="card-text">{product.price} kr</p>
    
            <div className="mt-auto">
              <Link to={`/products/${product.id}`}>
                <button className="btn btn-outline-primary btn-sm w-100">
                  Read more
                </button>
              </Link>
            </div>
          </div>
        </div>
      );
}