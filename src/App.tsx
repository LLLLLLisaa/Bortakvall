import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import type { Category } from "@models/Product";
import HomePage from "@page/HomePage";
import ProductPage from "@page/ProductPage";
import CartPage from "@page/CartPage";
import CheckoutPage from "@page/CheckoutPage";
import SuccessPage from "@page/SuccessPage";
import TagPage from "@page/TagPage";
import { Header } from "@components/Header";
import { TagBar } from "@components/TagBar";
import { Footer } from "@components/Footer";
import * as productService from "@service/productService";



function App() {

  /**
 * Fetch all products and extract unique tag names for the TagBar.
 *
 * - Retrieves products from the API
 * - Extracts tag names from each product
 * - Removes duplicate tag names
 * - Stores the result in component state
 *
 * @returns {void}
 */

  const [categories, setCategories] = useState<Category[]>([]);
  
  useEffect(() => {
    (async () => {
      try {
        const categories = await productService.fetchAllTags();
        setCategories(categories);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <BrowserRouter>
      <Header />
        <TagBar categories ={categories} />
          <Routes>        
            <Route path="/" element={<HomePage />} />

            <Route path="products">
              <Route path=":id" element={<ProductPage />} />
            </Route>

            <Route path="tags">
             {/*  <Route path=":category" element={<TagPage />} /> */}
              <Route path=":tagId" element={<TagPage />} />
            </Route>

            <Route path="cart" element={<CartPage />} />
          
            <Route path="checkout" element={<CheckoutPage />} />

            <Route path="success">
              <Route path=":orderId" element={<SuccessPage />} />
            </Route>
            
          </Routes> 
      <Footer />       
    </BrowserRouter>
  );
}

export default App;

