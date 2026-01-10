# Project Progress Log -- Bortakvall-Webshop

## Day 1 – 2025-12-23
 - Identifierat alla vyer 
 - Konfigurerat React Router
 - Skapat .env i projektroten.


## Day 2 – 2025-12-24
 - Defined Product and Cart related types.
 - Implemented basic cart state management.


## Day 3 – 2025-12-26
 - Implemented API layer for products, tags and orders.


## Day 4 – 2026-01-03
 - Implemented initial HomePage structure
 - Built reusable ProductCard component
 - Enabled navigation from product cards to ProductPage


## Day 5 – 2026-01-04
 - Created global Header component and placed it in App
 - Enabled navigation to HomePage by clicking the site title in Header
 - Implemented a responsive TagBar component that displays product categories derived dynamically from product tags.
 - Each category links to its corresponding TagPage using dynamic routing.
 - Created a basic Footer component for the webshop.


## Day 6 – 2026-01-05
 - Implemented a Loading component to indicate data fetching state, and an error component to display a message when data loading fails.
 - Implemented an Error component to display user-friendly error messages when data fetching fails.
 - Implemented the TagPage to display products filtered by a selected tag.
  - Created a TagProduct union type to align with the API response structure for tag-based queries, which made it possible to correctly extract and use the returned products array.
  - Used useParams to extract the tagId from the URL and passed it to the API function to retrieve products associated with the selected tag.


## Day 7 – 2026-01-06
 - Implementerat en separat ProductPage för visning av enskilda produkter
 - Standardiserat all användargränssnittstext till svenska för konsekvent lokalisering
 - Uppdaterat getProductById i API-lagret så att metoden returnerar ProductDetail i stället för grundtypen Product
 - Implemented cart state integration on ProductPage
 - Added responsive cart navigation to Header with item count
 - Extended ProductCard to support adding products to the cart
   - Added “Add to cart” action on product cards with default quantity handling
   - Connected ProductCard directly to the global cart state (Zustand store)


## Day 8 – 2026-01-08
 - Implemented the core shopping cart business logic in a dedicated service layer.
   - implemented cart operations including adding items, updating quantities, removing items, clearing the cart, and calculating item subtotals and total price.
   - Derived values such as subtotals and total price are calculated dynamically instead of being stored in state, ensuring data consistency and maintainability.
 - Implemented a reusable cart item card
 - Implemented the Cart page to display items added to the shopping cart.
 - Updated the cart store to manage global cart state using Zustand.
 - Verified that cart state remains consistent across page refreshes before checkout.


## Day 9 – 2026-01-09
 - Implemented Checkout (Order) page
   - Created OrderItemCard component to display order items with quantity controls
   - Added CustomerForm component for delivery address input
   - Implemented orderService for creating orders via API
 - Implemented order success page showing confirmation details (order number, total amount and order date).
   Used route state to pass order data from checkout instead of global store to avoid unnecessary complexity.



