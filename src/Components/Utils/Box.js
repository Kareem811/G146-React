import React from "react";
const Box = (props) => {
  return (
    <>
      <div
        style={{
          background: props.x,
          color: props.x !== "red" ? "#fff" : "black",
        }}
        className={"box"}>
        {props.y}
      </div>
    </>
  );
};
export default Box;
