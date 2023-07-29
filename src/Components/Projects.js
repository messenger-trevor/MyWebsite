// import { useState, useRef } from "react";
// import { motion } from "framer-motion";
import { Element } from "react-scroll";
import classes from "./Projects.module.css";
import ProjectCards from "./ProjectCards";
import schoolProjectImage from "../Assets/marvin-meyer-SYTO3xs06fU-unsplash.jpg"
import inProgressImage from "../Assets/dummyProjectOne.jpg"
// import FlyInBottom from "./AnimationWrappers/FlyInBottom";
// import FlyInLeft from "./AnimationWrappers/FlyInLeft";
// import FlyInRight from "./AnimationWrappers/FlyInRight";


// data for populating project cards, **gitHub and liveSite must be valid urls, or 0 to indicate null**
const projectData = [
  {
    index: 0,
    projectName: "Game of the Month (In-Progress)",
    subheader: "Full-Stack Web Application",
    image: inProgressImage,
    description:
      "Game of the Month is an open-source social server for friendgroups to discuss and decide which games to play together each month. I'm working with a designer currently for UI/UX but will begin backend development shortly keep an eye on my github in the meantime.",
    techStack: "Java, Spring, Node.js, React, Postgres",
    gitHub: "https://github.com/messenger-trevor",
    liveSite: 0,
  },
  {
    index: 1,
    projectName: "School Projects",
    subheader: "Various Full-Stack Applications",
    image: schoolProjectImage,
    description:
      "A repository for school projects to show compentency of skills. Some files have been redacted as per project sharing policy.",
    techStack: "Java, Spring, Angular, Docker JPA/Hibernate, MVC, Web Dev",
    gitHub: "https://github.com/messenger-trevor/school-projects",
    liveSite: 0,
  }
];

const Projects = () => {
  return (
    <div className={classes.projectsSection} id="WorkLink">
      <Element name="projectDestination" className="projectDestination" />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          direction: "ltr",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <h1 className={classes.sectionHeader}>My Work</h1>
        <div className={classes.projectsCardsContainer}>
          {projectData.map((project) => {
            return (
              <ProjectCards
                key={project.index}
                projectName={project.projectName}
                subheader={project.subheader}
                description={project.description}
                image={project.image}
                techStack={project.techStack}
                gitHub={project.gitHub}
                liveSite={project.liveSite}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
