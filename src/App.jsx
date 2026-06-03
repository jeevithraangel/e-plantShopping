import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";

function App() {
  return (
    <BrowserRouter>
      <div className="landing">

        <h1>Welcome to Paradise Nursery</h1>

        <Link to="/plants">
          <button>Get Started</button>
        </Link>

      </div>

      <Routes>
        <Route path="/" element={<AboutUs />} />
        <Route path="/plants" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;