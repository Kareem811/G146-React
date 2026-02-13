// import React, { useState, useEffect } from "react";

// function CounterComponent() {
//   const [count, setCount] = useState(0);
//   useEffect(() => {
//     if (count >= 10) {
//       console.log(count);
//     }
//   }, [count]);
//   return (
//     <div>
//       <h1>Count : {count}</h1>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//       <button onClick={() => setCount(count - 1)}>Decrement</button>
//       <button onClick={() => setCount(0)}>Reset</button>
//     </div>
//   );
// }

// export default CounterComponent;

import React, { useEffect, useState } from "react";

const CounterComponent = () => {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });
  useEffect(() => {
    const eventHandler = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener("mousemove", eventHandler);
    return () => {
      window.removeEventListener("mousemove", eventHandler);
    };
  }, []);
  return (
    <div style={{ width: "100%", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
      <h1>X---- {position.x}</h1>
      <h1>Y---- {position.y}</h1>
    </div>
  );
};

export default CounterComponent;
