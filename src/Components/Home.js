import React from "react";
const Home = () => {
  const x = "orwej";
  const y = "content";
  const z = true;
  const elementStyles = {
    color: "red",
    backgroundColor: "black",
    padding: z ? "100px" : "20px",
  };
  return <h1 style={x === "container" ? elementStyles : {}}>Hello</h1>;
};
export default Home;
