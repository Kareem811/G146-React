import React from "react";
import productsStyles from "../styles/products.module.css";
const ProductItem = (props) => {
  const { product } = props;
  return (
    <div key={+product.key} className={productsStyles.product}>
      <img src={product.thumbnail} alt="Product" />
      <div className={productsStyles.productData}>
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <h3>{product.category}</h3>
        <span>${product.price}</span>
        <button>Read more</button>
      </div>
    </div>
  );
};

export default ProductItem;
