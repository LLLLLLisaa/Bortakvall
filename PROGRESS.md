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