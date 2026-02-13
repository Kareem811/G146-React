import React from "react";
import homeStyles from "./styles/home.module.css";
// import cat from "../images/cat.jpg";
const Home = () => {
  return (
    <>
      <h1 className={homeStyles.text}>Home Component</h1>
      {/* <img src={"../src/images/cat.jpg"} alt="" /> */}
      <img src={"/images/cat.jpg"} alt="" />
    </>
  );
};
export default Home;
