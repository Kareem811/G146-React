// import React, { useState } from "react";

// const Counter = () => {
//   const [count, setCount] = useState(1);
//   return (
//     <>
//       <h1>Count: {count}</h1>
//       <button
//         onClick={() => {
//           if (count <= 9) {
//             setCount(count + 1);
//           } else {
//             setCount(10);
//             window.alert("Game over");
//           }
//         }}>
//         Increment
//       </button>
//     </>
//   );
// };

// export default Counter;

import React, { useState } from "react";

const Counter = () => {
  // const [userName, setUserName] = useState("");
  const [x, setX] = useState(false);
  return (
    <>
      <div
        style={{
          background: x ? "red" : "gold",
        }}>
        <h1>{x ? "Hello" : "Welcome"}</h1>
        <button onClick={() => setX(!x)}>{x ? "Show" : "Hide"}</button>
      </div>
      {x && <h1>Ahmed</h1>}
    </>
  );
};

export default Counter;
