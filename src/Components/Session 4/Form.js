import React, { useState } from "react";
import formStyles from "../styles/form.module.css";
const Form = () => {
  const [product, setProduct] = useState({
    productName: "",
    productPrice: "",
    productCategory: "",
    productDescription: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(product);
  };
  return (
    <section className={formStyles.container}>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label>Product name</label>
          <input type="text" placeholder="Enter Product name" value={product.productName} onChange={(e) => setProduct({ ...product, productName: e.target.value })} />
        </div>
        <div>
          <label>Product Price</label>
          <input
            type="text"
            placeholder="Enter Product Price"
            value={product.productPrice}
            onChange={(e) =>
              setProduct({
                ...product,
                productPrice: e.target.value,
              })
            }
          />
        </div>
        <div>
          <label>Product Category</label>
          <input type="text" placeholder="Enter Product Category" value={product.productCategory} onChange={(e) => setProduct({ ...product, productCategory: e.target.value })} />
        </div>
        <div>
          <label>Product Description</label>
          <textarea type="text" placeholder="Enter Product Description" value={product.productDescription} onChange={(e) => setProduct({ ...product, productDescription: e.target.value })}></textarea>
        </div>
        <button type="subit">Submit</button>
      </form>
    </section>
  );
};

export default Form;
