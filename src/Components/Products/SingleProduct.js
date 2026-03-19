// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// const SingleProduct = ({ products }) => {
//   const { productId } = useParams();
//   const [product, setProduct] = useState({});
//   const getProduct = () => {
//     const foundedProduct = products?.find((p) => p.id === Number(productId));
//     if (foundedProduct) {
//       setProduct(foundedProduct);
//     }
//     return foundedProduct;
//   };
//   console.log(product);
//   useEffect(() => {
//     getProduct();
//   }, [productId]);
//   return <div>SingleProduct</div>;
// };

// export default SingleProduct;

// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import singleProductStyles from "./single.module.css";
// import Container from "../Container/Container";
// const SingleProduct = () => {
//   const { productId } = useParams();
//   const [product, setProduct] = useState({});
//   useEffect(() => {
//     axios
//       .get(`https://dummyjson.com/products/${productId}`)
//       .then((res) => setProduct(res.data))
//       .catch((err) => console.log(err));
//   }, [productId]);
//   if (!product) return <div className={singleProductStyles.loading}>Loading...</div>;

//   return (
//     <Container className={singleProductStyles.container}>
//       <div className={singleProductStyles.card}>
//         <div className={singleProductStyles.imageWrapper}>
//           <img src={product.thumbnail} alt={product.title} />
//         </div>

//         <div className={singleProductStyles.content}>
//           <h4>
//             {product.category} - {product.brand}
//           </h4>
//           <h1 className={singleProductStyles.title}>{product.title}</h1>
//           <p className={singleProductStyles.price}>${product.price}</p>
//           <p className={singleProductStyles.description}>{product.description}</p>
//         </div>
//       </div>
//     </Container>
//   );
// };

// export default SingleProduct;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./single.module.css";
import Container from "../Container/Container";
import Navbar from "../Navbar/Navbar";

const SingleProduct = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${productId}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  }, [productId]);

  if (!product) return <div className={styles.loading}>Loading...</div>;

  return (
    <>
      <Navbar />
      <Container className={styles.container}>
        <div className={styles.card}>
          <div className={styles.images}>
            <img src={product.thumbnail} alt={product.title} className={styles.mainImage} />
            <div className={styles.gallery}>
              {product.images?.map((img, i) => (
                <img key={i} src={img} alt="" />
              ))}
            </div>
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>{product.title}</h1>
            <div className={styles.meta}>
              <span className={styles.price}>${product.price}</span>
              <span className={styles.rating}>⭐ {product.rating}</span>
            </div>
            <p className={styles.description}>{product.description}</p>
            <div className={styles.tags}>
              {product.tags?.map((tag, i) => (
                <span key={i}>{tag}</span>
              ))}
            </div>
            <div className={styles.infoGrid}>
              <div>
                <strong>Stock:</strong> {product.stock}
              </div>
              <div>
                <strong>Status:</strong> {product.availabilityStatus}
              </div>
              <div>
                <strong>Weight:</strong> {product.weight}kg
              </div>
              <div>
                <strong>Min Order:</strong> {product.minimumOrderQuantity}
              </div>
              <div>
                <strong>Shipping:</strong> {product.shippingInformation}
              </div>
              <div>
                <strong>Warranty:</strong> {product.warrantyInformation}
              </div>
            </div>
            <div className={styles.dimensions}>
              <h3>Dimensions</h3>
              <p>
                {product.dimensions.width} x {product.dimensions.height} x {product.dimensions.depth}
              </p>
            </div>

            <button className={styles.button}>Add to Cart</button>
          </div>
        </div>
        <div className={styles.reviews}>
          <h2>Customer Reviews</h2>
          {product.reviews?.map((review, i) => (
            <div key={i} className={styles.reviewCard}>
              <div className={styles.reviewHeader}>
                <strong>{review.reviewerName}</strong>
                <span>⭐ {review.rating}</span>
              </div>
              <p>{review.comment}</p>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
};

export default SingleProduct;
