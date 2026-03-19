import React, { useEffect, useState } from "react";
import landingStyles from "./landing.module.css";
const Landing = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const data = [
    {
      title: "New Collection",
      description: "Discover the latest trends in fashion.\n Fresh styles designed for everyday confidence",
      image: "/images/image1.jpg",
    },
    {
      title: "Summer Style",
      description: "Light, comfortable pieces perfect for sunny days.\n Stay cool while looking effortlessly stylish",
      image: "/images/image2.jpg",
    },
    {
      title: "Premium Quality",
      description: "High-quality fabrics designed for comfort and elegance.",
      image: "/images/image3.jpg",
    },
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % data.length);
    }, 3000);
  }, []);
  return (
    <section className={landingStyles.container}>
      <img src={data[currentIndex].image} alt="Landing" />
      <div className={landingStyles.layer}>
        <div className={landingStyles.data}>
          <h1>{data[currentIndex].title}</h1>
          <p>{data[currentIndex].description}</p>
          <button>Get Started</button>
        </div>
      </div>
    </section>
  );
};

export default Landing;
