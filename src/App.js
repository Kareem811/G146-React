import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Routes/Home";
import About from "./Routes/About";
import Products from "./Routes/Products";
import Contact from "./Routes/Contact";
import { useEffect, useState } from "react";
import axios from "axios";
import SingleProduct from "./Components/Products/SingleProduct";
function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products`)
      .then((res) => setProducts(res.data.products))
      .catch((err) => err);
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home products={products} />} />
        <Route path="/home" element={<Home products={products} />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products products={products} />} />
        <Route path="/products/:productId" element={<SingleProduct products={products} />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
