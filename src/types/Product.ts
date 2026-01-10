    /**
     * Represents product image URLs in different sizes.
     */
    export interface Images{
        thumbnail: string;
        large: string;
    }

    /**
     * Indicates the availability status of a product.
     */
    export type StockStatus = "instock" | "outofstock";


    /**
     * Core product model returned from the API.
     *
     * Contains essential product information used across
     * product listings, cart, and order flows.
     */
    export interface Product{
        id: number;
        name: string;
        price: number;
        images: Images;    
        tags: Tag[];
        stock_status: StockStatus;
        stock_quantity: number | null;
    }

    /**
     * Represents a product tag returned from the API.
     *
     * Tags can be used for filtering, categorization,
     * or display purposes.
     */
    export interface Tag{
        id: number;
        name: string;
        slug: string;
    }

    /**
     * Extended product model including detailed information.
     *
     * Used on product detail pages where additional data
     * such as description is required.
     */
    export interface ProductDetail extends Product{
        description: string;
    }

    /**
     * UI-friendly subset of Tag,
     * used primarily for navigation and filtering.
     */
    export type Category = Pick<Tag, "id" | "name">;

    /**
     * Represents a tag together with its associated products.
     *
     * Useful for grouped product views or tag-based listings.
     */
    export type TagProduct = Tag & {
    products: Product[];
    };