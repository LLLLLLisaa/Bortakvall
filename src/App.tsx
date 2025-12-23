/* import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App */



import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import CheckoutPage from "./pages/CheckoutPage";
import SuccessPage from "./pages/SuccessPage";
import TagPage from "./pages/TagPage";
import ErrorPage from "./pages/ErrorPage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<HomePage />} />

        <Route path="products">
          <Route path=":id" element={<ProductPage />} />
        </Route>

        <Route path="tags">
          <Route path=":tagId" element={<ProductPage />} />
        </Route>

        
       
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

