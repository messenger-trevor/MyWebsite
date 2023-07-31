import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";
// import useInView from "react-intersection-observer";
// import { useEffect } from "react";

import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import classes from "./App.module.css";

import Amplify from '@aws-amplify/core'
import config from '../src/aws-exports'
Amplify.configure(config)


// import FlyInRight from "./Components/AnimationWrappers/FlyInRight";
// import PopulateChildrenDelayed from "./Components/AnimationWrappers/PopulateChildrenDelayed";

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress);
  return (
    <div>
      {/* <div className={classes.backgroundGreenPolygon}></div> */}
      <Header />
      <motion.div className={classes.progressBar} style={{ scaleX }} />
      <HeroSection />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
