import { useState } from "react";
import {
  Link,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

import classes from "./Header.module.css";
import { Twirl as Hamburger } from "hamburger-react";
import { useMediaQuery } from "@mui/material";

const Header = () => {

  //at min-width 775px change header to hamburger menu for mobile support
  const [menuOpen, setMenuOpen] = useState(false);
  const mediaQuery = useMediaQuery("(min-width:775px)");

  // supporting logic for scroll animations to be added later, currently unused
  //
  //
  // function componentDidMount() {
  //   Events.scrollEvent.register("begin", function (to, element) {
  //     console.log("begin", arguments);
  //   });

  //   Events.scrollEvent.register("end", function (to, element) {
  //     console.log("end", arguments);
  //   });

  //   scrollSpy.update();
  // }
  // function componentWillUnmount() {
  //   Events.scrollEvent.remove("begin");
  //   Events.scrollEvent.remove("end");
  // }

  //current scroll animation logic, react-scroll library
  function scrollTo() {
    scroller.scrollTo("scroll-to-element", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  }

  return (
    <>
      <div
        className={menuOpen ? classes.pulloutMenu : classes.pulloutMenuClosed}
      >
        <ul>
          <li>
            <Link
              activeClass="active"
              className="aboutLink"
              to="aboutDestination"
              spy={true}
              smooth={true}
              duration={500}
            >
              About Me
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              className="projectLink"
              to="projectDestination"
              spy={true}
              smooth={true}
              duration={500}
            >
              My Work
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              className="contactLink"
              to="contactDestination"
              spy={true}
              smooth={true}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <nav className={classes.header}>
        <div className={classes.logo}>
          Trevor<span>Messenger.dev</span>
        </div>
        <div>
          <ul>
            {!mediaQuery && (
              <Hamburger
                color="#097179"
                onToggle={(toggled) => {
                  if (toggled) {
                    setMenuOpen(!menuOpen);
                  } else {
                    setMenuOpen(!menuOpen);
                  }
                }}
              />
            )}
            {mediaQuery && (
              <>
                <li>
                  <Link
                    activeClass="active"
                    className="aboutLink"
                    to="aboutDestination"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={150}
                  >
                    About Me
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    className="projectLink"
                    to="projectDestination"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-150}
                  >
                    My Work
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    className="contactLink"
                    to="contactDestination"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    Contact
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
