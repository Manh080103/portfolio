import React from "react";
import "./home.css";
import { AiFillGithub, AiFillFacebook, AiFillCaretRight } from "react-icons/ai";
import { FiTwitter } from "react-icons/fi";
import { BsChevronDoubleDown } from "react-icons/bs";

const Home = () => {
  return (
    <section id="home" className="home section">
      <div className="leftIcons">
        <div className="socials grid">
          <a
            href="https://github.com/Manh080103"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillGithub className="icon" />
          </a>
          <a href="/" target="_blank" rel="noreferrer">
            <FiTwitter className="icon" />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100012166986679"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillFacebook className="icon" />
          </a>
        </div>
      </div>

      <div className="container homeContainer">
        <span className="introText">Hi my name is</span>
        <h1 className="title">Manh Nguyen</h1>
        <span className="subTitle">
          I am a React Developer who mainly focus on building web application
          with ReactJS.
        </span>
        <p className="homeParagraph">
          I code within required coding standards and styles to serve the exact
          need.
        </p>

        <div className="lowerHomeSection">
          <button className="contactBtn">
            <a href="#contact" className="flex">
              Contact Me <AiFillCaretRight className="icon" />
            </a>
          </button>

          <div className="scrollDiv">
            <a href="#about" className="flex">
              <h6 className="scroll">Scroll Down</h6>{" "}
              <BsChevronDoubleDown className="icon" />
            </a>
          </div>
        </div>
      </div>

      <div className="rightEmail">
        <div>
          <div className="emailAddress">
            <a
              href="https://mail.google.com/mail/u/0/#inbox"
              target="_blank"
              rel="noreferrer"
            >
              ducmanh080103@gmail.com
            </a>
          </div>

          <div className="line"></div>
        </div>
      </div>
    </section>
  );
};

export default Home;
