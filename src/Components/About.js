import classes from "./About.module.css";
import profileIcon from "../Assets/profileIcon.svg";
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
import Highlight from "./Highlight.js";

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
      <div id="AboutMeLink" className={classes.sectionHeader}>
        <Highlight translate="15" />
        <h1>Skills</h1>
      </div>
      <FlyInRight>
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
      </div>
    </div>
  );
};

export default About;
