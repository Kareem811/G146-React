import React from "react";
import featuredStyles from "./featured.module.css";
import Container from "../../Container/Container";
import { useNavigate } from "react-router-dom";
const Featured = ({ products }) => {
  const navigate = useNavigate();
  return (
    <Container className={featuredStyles.featuredContainer}>
      <div className={featuredStyles.header}>
        <h1 className={featuredStyles.title}>Featured Products</h1>
        <button className={featuredStyles.viewAll} onClick={() => navigate("/products")}>
          View All
        </button>
      </div>
      <div className={featuredStyles.productsGrid}>
        {products?.slice(0, 3).map((product) => (
          <div key={product.id} className={featuredStyles.card}>
            <div className={featuredStyles.imageWrapper}>
              <img src={product.thumbnail} alt={product.title} />
            </div>
            <div className={featuredStyles.content}>
              <h3 className={featuredStyles.productTitle}>{product.title}</h3>
              <p className={featuredStyles.price}>${product.price}</p>
              <button className={featuredStyles.learnMore}>Learn more</button>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Featured;
