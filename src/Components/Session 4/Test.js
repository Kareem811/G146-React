// import React, { useState } from "react";

// const Test = () => {
//   const [ahmed, setAhmed] = useState(false);
//   return (
//     <div>
//       <button onClick={() => setAhmed(!ahmed)}>{ahmed ? "Hide" : "Greet"}</button>
//       {ahmed && <h1>Welcome Ahmed</h1>}
//     </div>
//   );
// };

// export default Test;

// import React from "react";
// import Form from "./Form";

// const Test = () => {
//   const user = "Admin";
//   if (user === "Admin") {
//     return <Form />;
//   }
//   if (user === "aaa") {
//     return <div>Welcome User</div>;
//   }
//   return "KKKK";
// };

// export default Test;

// import React from "react";

// const Test = () => {
//   const role = "User";
//   return <div>Welcome {role === "User" && "User"}</div>;
// };

// export default Test;

import React from "react";

const Test = () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const names = ["ahmed", "mohamed", "ahmed", "mohamed", "ahmed", "mohamed"];
  return (
    <div>
      {/* <ul>
        {numbers.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul> */}
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Test;
