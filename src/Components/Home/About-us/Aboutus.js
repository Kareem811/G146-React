import React from "react";
import Container from "../../Container/Container";
import aboutStyles from "./about.module.css";
import { useNavigate } from "react-router-dom";
const Aboutus = () => {
  const navigate = useNavigate();
  return (
    <Container className={aboutStyles.aboutContainer}>
      <div className={aboutStyles.aboutContent}>
        <div className={aboutStyles.imageOverflow}>
          <img src="/images/image1.jpg" alt="About" />
        </div>
        <div className={aboutStyles.aboutData}>
          <h1>About us</h1>
          <p>
            Discover the latest trends in fashion. Fresh styles designed for everyday Discover the latest trends in fashion. Fresh styles designed for everyday confidence Discover the latest trends in
            fashion. Fresh styles designed for everyday confidence
          </p>
          <button onClick={() => navigate("/about")}>Learn more</button>
        </div>
      </div>
    </Container>
  );
};

export default Aboutus;
