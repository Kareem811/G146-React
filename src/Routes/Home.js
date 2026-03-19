import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Landing from "../Components/Home/Landing/Landing";
import Aboutus from "../Components/Home/About-us/Aboutus";
import Featured from "../Components/Home/FeaturedProducts/Featured";
const Home = ({ products }) => {
  return (
    <>
      <Navbar />
      <Landing />
      <Aboutus />
      <Featured products={products} />
    </>
  );
};

export default Home;
