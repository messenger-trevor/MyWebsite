import githubIcon from "../Assets/icon_github.svg";
import linkedInIcon from "../Assets/icon_linkedIn.svg";
import illustrationOfSelf from "../Assets/IllustrationOfSelf.svg";
import classes from "./HeroSection.module.css";
import FlyInLeft from "./AnimationWrappers/FlyInLeft";
import FlyInRight from "./AnimationWrappers/FlyInRight";

const HeroSection = () => {
  return (
    <div className={classes.landingSection}>
      <FlyInLeft>
        <div className={classes.orangeHighlight}></div>
        <div className={classes.landingSectionText}>
          <div className={classes.LogoStuff}>
            <span>/</span>
            <h1>
              Trevor <br />
              Messenger
            </h1>
          </div>
          <h2>
            <b>Full Stack Engineer </b>
          </h2>
          <div className={classes.buttonBar}>
            <button>
              <a href="https://github.com/messenger-trevor" target="_blank" rel="noreferrer"><img src={githubIcon} alt="Github Icon" /></a>
            </button>
            <button>
              <a href="https://www.linkedin.com/in/trevor-messenger/" target="_blank" rel="noreferrer"><img  src={linkedInIcon} alt="LinkedIn Icon" /></a>
            </button>
          </div>
        </div>
      </FlyInLeft>
      <FlyInRight>
        <img className={classes.graphic} src={illustrationOfSelf} alt="Illustration of Me Coding" />
      </FlyInRight>
    </div>
  );
};

export default HeroSection;
