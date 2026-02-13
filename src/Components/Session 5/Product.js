import React, { useEffect, useState } from "react";
import productsStyles from "../styles/products.module.css";
import axios from "axios";
import ProductItem from "./ProductItem";
import Loading from "./Loading";
const Product = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const getProducts = (url) => {
    axios
      .get(url)
      .then((res) => {
        setProducts(res.data.products);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getProducts("https://dummyjson.com/products");
  }, []);
  if (loading) {
    return <Loading />;
  }
  return (
    <section className={productsStyles.container}>
      <div className={productsStyles.content}>
        <h1>Available Products : {products.length}</h1>
        <div className={productsStyles.data}>
          {products.map((product) => (
            <ProductItem product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Product;

// Request Methods:
// POST
// GET
// PUT
// DELETE
// PATCH
