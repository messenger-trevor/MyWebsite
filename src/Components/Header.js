// import { useScroll, motion } from "framer-motion";
// import { useTransform } from "framer-motion";
import { useState } from "react";

import classes from "./Header.module.css";
import { Twirl as Hamburger } from "hamburger-react";
import { useMediaQuery } from "@mui/material";
import { transform } from "framer-motion";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const mediaQuery = useMediaQuery("(min-width:775px)");

  

  return (
    <>
      <div className={menuOpen?classes.pulloutMenu:classes.pulloutMenuClosed} >
        <ul>
          <li>
            <a href="#AboutMeLink">About Me</a>
          </li>
          <li>
            <a href="#WorkLink">My Work</a>
          </li>
          <li>
            <a href="#ContactLink">Contact</a>
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
                  <a href="#AboutMeLink">About Me</a>
                </li>
                <li>
                  <a href="#WorkLink">My Work</a>
                </li>
                <li>
                  <a href="#ContactLink">Contact</a>
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
