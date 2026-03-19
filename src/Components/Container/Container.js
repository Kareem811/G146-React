import React from "react";
import "./container.css";
const Container = ({ children, className }) => {
  return <section className={`container ${className ? className : ""}`}>{children}</section>;
};

export default Container;
