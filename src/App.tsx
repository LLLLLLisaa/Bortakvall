import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { getProducts } from "./service/api/productApi";
import type { Category } from "./types/Product";

import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import SuccessPage from "./pages/SuccessPage";
import TagPage from "./pages/TagPage";
import { Header } from "./components/Header";
import { TagBar } from "./components/TagBar";
import { Footer } from "./components/Footer";



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
  
  useEffect(()=>{

    async function fetchTags(){
      const response = await getProducts();
      const allTags = response.data.flatMap(product => product.tags);
      const uniqueMap = new Map<number, Category>();

    allTags.forEach(tag => {
      uniqueMap.set(tag.id, {
        id: tag.id,
        name: tag.name,
       
      });
    });

    setCategories(Array.from(uniqueMap.values()));
      
    }
    fetchTags();
  },[])



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

