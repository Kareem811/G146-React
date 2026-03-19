import React, { useEffect, useState } from "react";
import { MdOutlineHomeWork } from "react-icons/md";
import "./nav.css";
import { Link, NavLink } from "react-router-dom";
import { IoMdHome } from "react-icons/io";
import { FaInfoCircle } from "react-icons/fa";
import { GrProductHunt } from "react-icons/gr";
import { LuContact } from "react-icons/lu";
import { IoMenu } from "react-icons/io5";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { FaRegArrowAltCircleUp } from "react-icons/fa";

const Navbar = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth <= 700);
  const [isMenu, setIsMenu] = useState(window.innerWidth <= 500);
  const [bigMenu, setBigMenu] = useState(false);
  const [isClose, setIsClose] = useState(false);
  const [scrolled, setScrolled] = useState(window.scrollY <= Math.floor(647.2000122070312));
  const handleResize = () => {
    setWindowWidth(window.innerWidth <= 700);
    setIsMenu(window.innerWidth <= 500);
  };
  const handleScroll = () => {
    setScrolled(window.scrollY <= Math.floor(647.2000122070312));
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleChangeMenu = () => {
    setBigMenu(!bigMenu);
    setIsClose(!isClose);
  };
  return (
    <>
      <header style={window.location.pathname === "/" || window.location.pathname === "/home" ? (scrolled ? { backgroundColor: "#00000031" } : { background: "#000" }) : { background: "#000" }}>
        <nav>
          <Link to={"/"} className="nav-logo">
            <MdOutlineHomeWork size={35} />
          </Link>
          <ul style={isMenu ? { display: "none" } : { display: "flex" }} className={bigMenu ? "big-menu" : ""}>
            <li>
              <NavLink to={"/home"} className={window.location.pathname === "/" || window.location.pathname === "/home" ? "active" : ""}>
                <IoMdHome size={windowWidth ? 20 : 15} /> {windowWidth ? (bigMenu ? "Home" : "") : "Home"}
              </NavLink>
            </li>
            <li>
              <NavLink to={"/about"}>
                <FaInfoCircle size={windowWidth ? 20 : 15} />
                {windowWidth ? (bigMenu ? "About" : "") : "About"}
              </NavLink>
            </li>
            <li>
              <NavLink to={"/products"}>
                <GrProductHunt size={windowWidth ? 20 : 15} />
                {windowWidth ? (bigMenu ? "Products" : "") : "Products"}
              </NavLink>
            </li>
            <li>
              <NavLink to={"/contact"}>
                <LuContact size={windowWidth ? 20 : 15} />
                {windowWidth ? (bigMenu ? "Contact" : "") : "Contact"}
              </NavLink>
            </li>
          </ul>
          {isMenu ? (
            isClose ? (
              <IoMdCloseCircleOutline size={25} cursor={"pointer"} onClick={handleChangeMenu} />
            ) : (
              <IoMenu size={25} cursor={"pointer"} onClick={handleChangeMenu} />
            )
          ) : bigMenu ? (
            <IoMdCloseCircleOutline size={25} cursor={"pointer"} onClick={handleChangeMenu} />
          ) : undefined}
        </nav>
      </header>

      {!scrolled && (
        <div
          className="scroll-btn"
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}>
          <FaRegArrowAltCircleUp size={25} cursor={"pointer"} color="#fff" />
        </div>
      )}
    </>
  );
};

export default Navbar;
