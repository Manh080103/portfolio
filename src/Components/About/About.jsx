import React from "react";
import "./about.css";
import { TbCloudDownload } from "react-icons/tb";
import profileImage from "../../Assets/manhnd.jpg";

const About = () => {
  return (
    <section id="about" className="about section container">
      <div className="sectionTitle">
        <span className="titleNumber">01.</span>
        <h5 className="titleText">
          About me
          <div className="underline">
            <span> </span>
          </div>
        </h5>
      </div>

      <div className="sectionContent grid">
        <div className="textSection">
          <h4>
            Aspiring full-stack React developer with a strong foundation in
            ReactJS, NextJS, JavaScript, Typescript, Tailwind, HTML, CSS and
            MongoDB, seeking an opportunity to contribute to the development of
            user-centered web applications. Equipped with experience in Node.js
            and Express.js, along with familiarity with RESTful APIs, I possess
            strong problem-solving and debugging skills, coupled with excellent
            communication and teamwork abilities. Eager to learn and grow
            alongside a team of talented developers.
          </h4>

          <div className="aboutBtn">
            <a href="NguyenDucManh_CV.pdf" download className="flex">
              Download CV <TbCloudDownload className="icon" />
            </a>
          </div>
        </div>

        <div className="aboutImgDiv">
          <img src={profileImage} alt="Manh Nguyen" className="aboutImg" />
        </div>
      </div>
    </section>
  );
};

export default About;
