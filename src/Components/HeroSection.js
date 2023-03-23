import githubIcon from "../Assets/icon_github.svg";
import linkedInIcon from "../Assets/icon_linkedIn.svg";
import illustrationOfSelf from "../Assets/IllustrationOfSelf.svg";
import classes from "./HeroSection.module.css";
import FlyInLeft from "./AnimationWrappers/FlyInLeft";
import FlyInRight from "./AnimationWrappers/FlyInRight";

const HeroSection = () => {
  return (
    <div className={classes.landingSection}>
      <FlyInRight>
        <img src={illustrationOfSelf} alt="Illustration of Me Coding" />
      </FlyInRight>
      <FlyInLeft>
        <div className={classes.landingSectionText}>
          <h1>Hello, I'm Trevor.</h1>
          <h2>
            <b> A Full Stack Engineer </b>with a diverse skill set all backed by
            a strong collaborative voice.{" "}
          </h2>
          <div className={classes.buttonBar}>
            <button>
              <img src={githubIcon} alt="Github Icon" />
            </button>
            <button>
              <img src={linkedInIcon} alt="LinkedIn Icon" />
            </button>
          </div>
        </div>
      </FlyInLeft>
    </div>
  );
};

export default HeroSection;
