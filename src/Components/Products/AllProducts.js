import React from "react";
import Container from "../Container/Container";
import productsStyles from "./products.module.css";
import { useNavigate } from "react-router-dom";
const AllProducts = ({ products }) => {
  const navigate = useNavigate();
  console.log(products);
  return (
    <Container className={productsStyles.container}>
      <div className={productsStyles.header}>
        <h1 className={productsStyles.title}>Collections</h1>
      </div>
      <div className={productsStyles.productsGrid}>
        {products?.map((product) => (
          <div key={product.id} className={productsStyles.card}>
            <div className={productsStyles.imageWrapper}>
              <img src={product.thumbnail} alt={product.title} />
            </div>
            <div className={productsStyles.content}>
              <h3 className={productsStyles.productTitle}>{product.title}</h3>
              <p className={productsStyles.price}>${product.price}</p>
              <button
                className={productsStyles.learnMore}
                onClick={() => {
                  navigate(`/products/${product.id}`);
                }}>
                Learn more
              </button>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default AllProducts;
