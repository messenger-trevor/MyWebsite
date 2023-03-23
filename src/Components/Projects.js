// import { useState, useRef } from "react";
// import { motion } from "framer-motion";
import classes from "./Projects.module.css";
import ProjectCards from "./ProjectCards";
import FlyInBottom from "./AnimationWrappers/FlyInBottom";
import FlyInLeft from "./AnimationWrappers/FlyInLeft";
import FlyInRight from "./AnimationWrappers/FlyInRight";

// const projectData = [
//   {
//     projectName: "Project Placeholder title",
//     image: "imageURL",
//     description: "Project Description",
//     techStack: ["react", "react", "react"],
//   },
//   {
//     projectName: "Project Placeholder title",
//     image: "imageURL",
//     description: "Project Description",
//     techStack: ["react", "react", "react"],
//   },
//   {
//     projectName: "Project Placeholder title",
//     image: "imageURL",
//     description: "Project Description",
//     techStack: ["react", "react", "react"],
//   },
// ];

const Projects = () => {
  return (
    <div className={classes.projectsSection}>
      <h1 className={classes.sectionHeader} id="WorkLink">
        My Work
      </h1>
      <div className={classes.projectsCardsContainer}>
        <FlyInLeft>
          <ProjectCards />
        </FlyInLeft>
        <FlyInBottom>
          <ProjectCards />
        </FlyInBottom>
        <FlyInRight>
          <ProjectCards />
        </FlyInRight>
        
      </div>
    </div>
  );
};

export default Projects;
