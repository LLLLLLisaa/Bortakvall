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
        on_sale: boolean;
        images: Images;
        stock_status: StockStatus;
        stock_quantity: number | null;
        tags: ProductTag[];
    }

    export interface ProductTag{
        id: number;
        name: string;
        slug: string;
    }

    export interface ProductDetail extends Product{
        description: string;
    }

    /**
 * Category is a UI-friendly subset of Tag,
 * used for navigation and filtering.
 */
export type Category = Pick<ProductTag, "name" | "slug">;