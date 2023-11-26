import React from "react";
import "./projects.css";
import discord from "../../Assets/discord.png";
import tweeter from "../../Assets/twitter.png";
import netflix from "../../Assets/netflix.png";
import { AiFillYoutube } from "react-icons/ai";
import { FiGithub } from "react-icons/fi";

const data = [
  {
    id: 1,
    image: discord,
    demo: "",
    liveLink: "",
    github: "",
    title: "Discord",
    desc: "This is a web application of the Discord app including features such as: Authentication, Servers and Channels management, Real time messages, Voice and Video chat and more.",
    tech1: "NextJS",
    tech2: "Tailwind",
    tech3: "Typescript",
    tech4: "Prisma",
  },

  {
    id: 2,
    image: tweeter,
    demo: "",
    liveLink: "https://tweeter-clone-five.vercel.app",
    github: "",
    title: "Tweeter",
    desc: "This is a web application of the Twitter web app including features such as: Authentication, Profile management, Post Tweets, Like and Comments, Notification and more.",
    tech1: "ReactJS",
    tech2: "Tailwind",
    tech3: "Typescript",
    tech4: "MongoDB",
  },

  {
    id: 3,
    image: netflix,
    demo: "",
    liveLink: "https://netflix-clone-phi-henna.vercel.app/auth",
    github: "",
    title: "Netflix",
    desc: "This is a web application of the Netflix web app including features such as: Authentication, Favorite movies list, Online movie player and more.",
    tech1: "NextJS",
    tech2: "Tailwind",
    tech3: "Typescript",
    tech4: "MongoDB",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects container section">
      <div className="sectionTitle">
        <span className="titleNumber">03.</span>
        <h5 className="titleText">
          Projects
          <div className="underline">
            <span></span>
          </div>
        </h5>
      </div>

      <div className="projectContainer grid">
        {data.map(
          ({
            id,
            demo,
            github,
            image,
            title,
            liveLink,
            desc,
            tech1,
            tech2,
            tech3,
            tech4,
          }) => {
            return (
              <div key={id} className="singleProject">
                <div className="externalLinks flex">
                  <div className="youtubeIcon">
                    <a href={demo} target="_blank" rel="noreferrer">
                      <AiFillYoutube className="icon" />
                    </a>
                  </div>
                  <div className="githubIcon">
                    <a href={github} target="_blank" rel="noreferrer">
                      <FiGithub className="icon" />
                    </a>
                  </div>
                </div>

                <div className="imgDiv">
                  <a href={liveLink} target="_blank" rel="noreferrer">
                    <img src={image} alt={title} />
                  </a>
                </div>

                <div className="projectTitle">
                  <h3>{title}</h3>
                </div>

                <div className="desc">{desc}</div>

                <div className="technologies flex">
                  <small>{tech1}</small>
                  <small>{tech2}</small>
                  <small>{tech3}</small>
                  <small>{tech4}</small>
                </div>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
};

export default Projects;
