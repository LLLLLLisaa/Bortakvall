import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import SuccessPage from "./pages/SuccessPage";
import TagPage from "./pages/TagPage";
import ErrorPage from "./pages/ErrorPage";
import { Header } from "./components/Header";


function App() {
  return (
    <BrowserRouter>
      <Header />
        <Routes>        
          <Route path="/" element={<HomePage />} />

          <Route path="products">
            <Route path=":id" element={<ProductPage />} />
          </Route>

          <Route path="tags">
            <Route path=":tagId" element={<TagPage />} />
          </Route>

          <Route path="cart" element={<CartPage />} />
        
          <Route path="checkout" element={<CheckoutPage />} />

          <Route path="success">
            <Route path=":orderId" element={<SuccessPage />} />
          </Route>
          
          <Route path="error" element={<ErrorPage />} />
        </Routes>        
    </BrowserRouter>
  );
}

export default App;

