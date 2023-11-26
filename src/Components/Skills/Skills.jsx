import React from "react";
import "./skills.css";
import { TbBrandNextjs } from "react-icons/tb";
import {
  SiCss3,
  SiHtml5,
  SiMongodb,
  SiTypescript,
  SiTailwindcss,
  SiReact,
  SiJavascript,
} from "react-icons/si";
import { IoLogoSass } from "react-icons/io";
import { FaNodeJs, FaGithub, FaGitSquare, FaJava } from "react-icons/fa";
import { AiFillAndroid } from "react-icons/ai";

const Skills = () => {
  return (
    <section className="skills container section" id="skills">
      <div className="sectionTitle">
        <span className="titleNumber">02.</span>
        <h5 className="titleText">
          Skills
          <div className="underline">
            <span></span>
          </div>
        </h5>
      </div>

      <div className="skillsContainer grid">
        <div className="skillGroup">
          <div className="groupTitle">
            <h2 className="title">Front-end Development</h2>
            {/* <span className="subTitle">1 Years Experience</span> */}
          </div>

          <div className="generalSkills">
            <div className="singleSkill">
              <div className="iconBox flex">
                <SiReact className="icon" />
              </div>
              <span className="skillName">React</span>
            </div>

            <div className="singleSkill">
              <div className="iconBox flex">
                <SiTailwindcss className="icon" />
              </div>
              <span className="skillName">Tailwind</span>
            </div>

            <div className="singleSkill">
              <div className="iconBox flex">
                <IoLogoSass className="icon" />
              </div>
              <span className="skillName">Sass</span>
            </div>

            <div className="singleSkill">
              <div className="iconBox flex">
                <SiCss3 className="icon" />
              </div>
              <span className="skillName">CSS</span>
            </div>

            <div className="singleSkill">
              <div className="iconBox flex">
                <SiHtml5 className="icon" />
              </div>
              <span className="skillName">HTML</span>
            </div>
          </div>
        </div>

        <div className="skillGroup">
          <div className="groupTitle">
            <h2 className="title">Back-End Development</h2>
            {/* <span className="subTitle">1 Years Experience</span> */}
          </div>

          <div className="generalSkills">
            <div className="singleSkill">
              <div className="iconBox flex">
                <SiReact className="icon" />
              </div>
              <span className="skillName">ReactJS</span>
            </div>

            <div className="singleSkill">
              <div className="iconBox flex">
                <TbBrandNextjs className="icon" />
              </div>
              <span className="skillName">NextJS</span>
            </div>

            <div className="singleSkill">
              <div className="iconBox flex">
                <FaNodeJs className="icon" />
              </div>
              <span className="skillName">NodeJS</span>
            </div>

            <div className="singleSkill">
              <div className="iconBox flex">
                <SiTypescript className="icon" />
              </div>
              <span className="skillName">Typescript</span>
            </div>

            <div className="singleSkill">
              <div className="iconBox flex">
                <SiJavascript className="icon" />
              </div>
              <span className="skillName">Javascript</span>
            </div>

            <div className="singleSkill">
              <div className="iconBox flex">
                <SiMongodb className="icon" />
              </div>
              <span className="skillName">MongoDB</span>
            </div>
          </div>
        </div>

        <div className="skillGroup">
          <div className="groupTitle">
            <h2 className="title">Other Skills</h2>
            {/* <span className="subTitle">1 Years Experience</span> */}
          </div>

          <div className="generalSkills">
            <div className="singleSkill">
              <div className="iconBox flex">
                <FaGitSquare className="icon" />
              </div>
              <span className="skillName">Git</span>
            </div>

            <div className="singleSkill">
              <div className="iconBox flex">
                <FaGithub className="icon" />
              </div>
              <span className="skillName">Github</span>
            </div>

            <div className="singleSkill">
              <div className="iconBox flex">
                <FaJava className="icon" />
              </div>
              <span className="skillName">Java</span>
            </div>

            <div className="singleSkill">
              <div className="iconBox flex">
                <AiFillAndroid className="icon" />
              </div>
              <span className="skillName">Android</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
