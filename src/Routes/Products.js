import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import AllProducts from "../Components/Products/AllProducts";

const Products = ({ products }) => {
  return (
    <>
      <Navbar />
      <AllProducts products={products} />
    </>
  );
};

export default Products;
