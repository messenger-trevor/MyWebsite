import classes from "./About.module.css";
import TechCard from "./TechCard";
import reactLogo from "../Assets/reactLogo.svg";
import expressLogo from "../Assets/expressLogo.svg";
import nodeLogo from "../Assets/nodejsLogo.svg";
import mongoDBLogo from "../Assets/mongoDBLogo.svg";
import javaLogo from "../Assets/javaLogo.svg";
import mySQLLogo from "../Assets/mySQLLogo.svg";
import javascriptLogo from "../Assets/javascriptLogo.svg";
import HTMLLogo from "../Assets/HTML5Logo.svg";
import CSSLogo from "../Assets/CSSLogo.svg";
import FlyInLeft from "./AnimationWrappers/FlyInLeft";
import FlyInRight from "./AnimationWrappers/FlyInRight";
import PopulateChildrenDelayed from "./AnimationWrappers/PopulateChildrenDelayed";
import { TypeAnimation } from "react-type-animation";

const About = () => {
  const logoData = [
    { index: 0, file: reactLogo, altText: "React Logo" },
    { index: 1, file: expressLogo, altText: "Express.js Logo" },
    { index: 2, file: nodeLogo, altText: "Node.js Logo" },
    { index: 3, file: mongoDBLogo, altText: "MongoDB Logo" },
    { index: 4, file: javaLogo, altText: "Java Logo" },
    { index: 5, file: mySQLLogo, altText: "MySQL Logo" },
    { index: 6, file: javascriptLogo, altText: "JavaScript Logo" },
    { index: 7, file: HTMLLogo, altText: "HTML Logo" },
    { index: 8, file: CSSLogo, altText: "CSS Logo" },
  ];

  return (
    <div className={classes.aboutSectionContainer}>
      <div className={classes.lineGraphic1}>
        <span
          style={{
            fontSize: "2.5em",
            height: "350px",
            paddingRight: '100px',
            width: "45vw",
          }}
        >
          <span
            style={{
              width: "300px",
            }}
          >
            A developer who gets&nbsp;
          </span>
          <TypeAnimation
            style={{ whiteSpace: "pre-line", width: "500px", height: "280px" }}
            sequence={[
              "frontend",
              1000,
              "frontend\n\nWeb Apps\nUI/UX Design\nSEO Optimization",
              1000,
              "backend\n\nData Structures\nAPI's\nDatabase Design",
              1000,
              "collaboration\n\nSoft Skills\nProject Lifecycle\nVersion Control",
              1000,
            ]}
            repeat={Infinity}
          />
        </span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          direction: "rtl",
          overflow: "hidden",
          
        }}
      >
        <div id="AboutMeLink" className={classes.sectionHeader}>
          <h1 className={classes.skills}>Tech Stack</h1>
        </div>
        <div className={classes.skillsSection}>
          <PopulateChildrenDelayed>
            {logoData.map((logo) => {
              return (
                <TechCard
                  key={logo.index}
                  image={logo.file}
                  altText={logo.altText}
                />
              );
            })}
          </PopulateChildrenDelayed>
        </div>
      </div>
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            overflow: "hidden",
          }}
        >
          <div className={classes.sectionHeader}>
            <h1 className={classes.Experience}>Experience</h1>
          </div>
          <div className={classes.skillsSection}>
            <PopulateChildrenDelayed>
              {logoData.map((logo) => {
                return (
                  <TechCard
                    key={logo.index}
                    image={logo.file}
                    altText={logo.altText}
                  />
                );
              })}
            </PopulateChildrenDelayed>
          </div>
        </div>
      </div>
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            direction: "ltr",
            overflow: "hidden",
            width: "90vw",
          }}
        >
          <div className={classes.sectionHeader}>
            <h1 className={classes.about}>About</h1>
          </div>
          <div className={classes.skillsSection}>
            <PopulateChildrenDelayed>
              {logoData.map((logo) => {
                return (
                  <TechCard
                    key={logo.index}
                    image={logo.file}
                    altText={logo.altText}
                  />
                );
              })}
            </PopulateChildrenDelayed>
          </div>
        </div>
      </div>

      {/* <FlyInRight>
        <div className={classes.biography}>
          <div className={classes.header}>
            <img src={profileIcon} alt="Orange Profile Icon" />
            <h2>Personal Profile</h2>
          </div>
          <p>
            As an upcoming Software Engineering bachelor graduate. I have a near
            decade experience in professional theatre, and currently work as a
            tech-writer and part time software developer freelancer. As a
            developer I bring a strong set of soft skills that allow me to
            String string = "a sentence" together just as well as a line of
            code.{" "}
          </p>
          <div>
            <button>View Resume</button>
          </div>
          <div className={classes.header}>
            <img src={profileIcon} alt="Orange Profile Icon" />
            <h2>Education</h2>
          </div>
          <p>
            I am currently completing my Software Engineering bachelors, with a
            fall expected graduation. Relevant course work includes coding in
            Java and Python, building web applications utilizing the MERN tech
            stack, data structures/algorithms, database design, project
            lifecycle management, UI/UX design, and a foundational understanding
            of IT and network security.
          </p>
          <p>
            I previously obtained a Bachelors of Fine Arts from Southern Utah
            University.
          </p>
        </div>
      </FlyInRight>
      <div className={classes.technologiesGraphicContainer}>
        <FlyInLeft>
          <div className={classes.skillsSection}>
            <div className={classes.header}>
              <img src={profileIcon} alt="Orange Profile Icon" />
              <h2>Skills</h2>
            </div>

            <PopulateChildrenDelayed>
              {logoData.map((logo) => {
                return (
                  <TechCard
                    key={logo.index}
                    image={logo.file}
                    altText={logo.altText}
                  />
                );
              })}
            </PopulateChildrenDelayed>
          </div>
        </FlyInLeft>
        <FlyInLeft>
          <div className={classes.skillsSection}>
            <div className={classes.header}>
              <img src={profileIcon} alt="Orange Profile Icon" />
              <h2>Certificates</h2>
            </div>

            <PopulateChildrenDelayed>
              <ul>
                <li>CompTia Project+</li>
                <li>CompTia A+</li>
                <li>ITIL v4</li>
                <li>*In Progress* AWS Foundational</li>
              </ul>
            </PopulateChildrenDelayed>
          </div>
        </FlyInLeft>
      </div> */}
    </div>
  );
};

export default About;
