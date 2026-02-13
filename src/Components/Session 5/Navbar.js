import React from "react";
import "../styles/nav.css";
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  console.log(window.location.pathname);
  return (
    <header>
      <nav>
        <span>LOGO</span>
        <ul>
          <li>
            <NavLink to={"/home"} className={window.location.pathname === "/home" || window.location.pathname === "/" ? "active" : ""}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/about"}>About</NavLink>
          </li>
          <li>
            <NavLink to={"/products"}>Products</NavLink>
          </li>
          <li>
            <NavLink to={"/contact"}>Contact</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
