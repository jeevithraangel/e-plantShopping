import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import AboutUs from "./components/AboutUs";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";

function App() {
  const [showProducts, setShowProducts] = useState(false);

  const handleGetStarted = () => {
    setShowProducts(true);
  };

  return (
    <BrowserRouter>
      <div className="landing-page">
        <h1>Welcome to Paradise Nursery</h1>

        <Link to="/plants">
          <button onClick={handleGetStarted}>
            Get Started
          </button>
        </Link>
      </div>

      <Routes>
        <Route path="/" element={<AboutUs />} />
        <Route
          path="/plants"
          element={showProducts ? <ProductList /> : <AboutUs />}
        />
        <Route path="/cart" element={<CartItem />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;