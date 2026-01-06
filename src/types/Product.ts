// type---Product / ProductTag / ProductDetail

    export interface Images{
        thumbnail: string;
        large: string;
    }

    export type StockStatus = "instock" | "outofstock";

    export interface Product{
        id: number;
        name: string;
        price: number;
        images: Images;    
        tags: Tag[];
    }

    export interface Tag{
        id: number;
        name: string;
        slug: string;
    }

    export interface ProductDetail extends Product{
        on_sale: boolean;
        stock_status: StockStatus;
        stock_quantity: number | null;
        description: string;
    }

    /**
 * Category is a UI-friendly subset of Tag,
 * used for navigation and filtering.
 */
export type Category = Pick<Tag, "id" | "name">;
export type TagProduct = Tag & {
    products: Product[];
  };