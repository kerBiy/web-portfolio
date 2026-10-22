import { useContext, useState, useEffect } from "react";

import Brightness2Icon from "@mui/icons-material/Brightness2";
import WbSunnyRoundedIcon from "@mui/icons-material/WbSunnyRounded";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import { ThemeContext } from "../../contexts/theme";
import { experience, projects, skills, contact } from "../../data";
import "./navbar.css";

const Navbar = () => {
  const [{ themeName, toggleTheme }] = useContext(ThemeContext);
  const [showNavList, setShowNavList] = useState(false);

  // Scroll Blocker
  useEffect(() => {
    document.body.style.overflow = showNavList ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showNavList]);

  const toggleNavList = () => {
    const showNav = window.innerWidth <= 600 ? !showNavList : showNavList;
    setShowNavList(showNav);
  };

  return (
    <nav className="center nav">
      <ul
        id="nav-list"
        style={{ display: showNavList ? "flex" : null }}
        className="nav__list"
      >
        {experience.length ? (
          <li className="nav__list-item">
            <a
              href="#experience"
              onClick={toggleNavList}
              className="link link--nav"
            >
              Experience
            </a>
          </li>
        ) : null}

        {projects.length ? (
          <li className="nav__list-item">
            <a
              href="#projects"
              onClick={toggleNavList}
              className="link link--nav"
            >
              Projects
            </a>
          </li>
        ) : null}

        {skills.length ? (
          <li className="nav__list-item">
            <a
              href="#skills"
              onClick={toggleNavList}
              className="link link--nav"
            >
              Skills
            </a>
          </li>
        ) : null}

        {contact.email ? (
          <li className="nav__list-item">
            <a
              href="#contact"
              onClick={toggleNavList}
              className="link link--nav"
            >
              Contact
            </a>
          </li>
        ) : null}
      </ul>

      <button
        type="button"
        onClick={toggleTheme}
        className="btn btn--icon nav__theme"
        aria-label={`Switch to ${themeName === "dark" ? "light" : "dark"} theme`}
      >
        {themeName === "dark" ? <WbSunnyRoundedIcon /> : <Brightness2Icon />}
      </button>

      <button
        type="button"
        onClick={toggleNavList}
        className="btn btn--icon nav__hamburger"
        aria-label={showNavList ? "Close menu" : "Open menu"}
        aria-expanded={showNavList}
        aria-controls="nav-list"
      >
        {showNavList ? <CloseIcon /> : <MenuIcon />}
      </button>
    </nav>
  );
};

export default Navbar;
