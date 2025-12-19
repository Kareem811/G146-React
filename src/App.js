// imports
import React from "react";
import Home from "./Components/Home";
import Box from "./Components/Box";
import "./Components/styles/style.css";
import About from "./Components/About";
import Counter from "./Components/Counter";
import "./App.css";
const App = () => {
  return (
    <div className="container">
      {/* <h1>This is App Component</h1> */}
      {/* <Home />
      <About /> */}
      {/* <section className="container">
        <Box x={"red"} y={"This is Box 1"} /> 
        <Box x={"navy"} y={"This is Box 2"} /> 
        <Box x={"black"} y={"This is Box 3"} /> 
      </section> */}
      <Counter />
    </div>
  );
};

// export
export default App;
