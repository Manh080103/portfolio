import React, { useState } from "react";
import "./navbar.css";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";

const Navbar = () => {
  const [active, setActive] = useState("navBar");

  const showNavBar = () => {
    setActive("navBar activeNavBar");
  };

  const closeNavBar = () => {
    setActive("navBar");
  };

  const [activeHeader, setActiveHeader] = useState("header");

  const addBg = () => {
    if (window.scrollY >= 10) {
      setActiveHeader("header activeHeader");
    } else {
      setActiveHeader("header");
    }
  };

  window.addEventListener("scroll", addBg);

  return (
    <header className={activeHeader}>
      <div className="logoDiv">
        <h1 className="logo">
          <a href="#home">Manh.</a>
        </h1>
      </div>

      <div className={active}>
        <ul onClick={closeNavBar} className="navLists">
          <li className="navItem">
            <a href="#about" className="navLink">
              <span className="headerNumber">1.</span> About
            </a>
          </li>
          <li className="navItem">
            <a href="#skills" className="navLink">
              <span className="headerNumber">2.</span> Skills
            </a>
          </li>
          <li className="navItem">
            <a href="#projects" className="navLink">
              <span className="headerNumber">3.</span> Projects
            </a>
          </li>
          <li className="navItem">
            <a href="#contact" className="navLink">
              <span className="headerNumber">4.</span> Contact
            </a>
          </li>

          <button className="btn">
            <a href="/NguyenDucManh_CV.pdf" download>
              Resume{" "}
            </a>
          </button>
        </ul>

        <div onClick={closeNavBar} className="closeNavBar">
          <AiFillCloseCircle className="icon" />
        </div>
      </div>

      <div onClick={showNavBar} className="toogleNavBar">
        <TbGridDots className="icon" />
      </div>
    </header>
  );
};

export default Navbar;
