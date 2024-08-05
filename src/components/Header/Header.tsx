import React, { useState } from "react";
import "./style.css";
import { FaBars, FaTimes } from "react-icons/fa";
import Sun from "../../assets/icons/sun.png";
import Moon from "../../assets/icons/moon.png";
import { Link } from "@mui/material";

const Header = ({
  theme,
  onClick,
  contactRef,
  projectsRef,
  skillsRef,
  aboutmeRef,
}: {
  theme: string;
  onClick: () => void;
  contactRef: React.RefObject<{ scrollToContact: () => void }>;
  projectsRef: React.RefObject<{ scrollToProjects: () => void }>;
  skillsRef: React.RefObject<{ scrollToProjects: () => void }>;
  aboutmeRef: React.RefObject<{ scrollToProjects: () => void }>;
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScrollToContact = () => {
    contactRef.current?.scrollToContact();
  };

  const handleScrollToProjects = () => {
    projectsRef.current?.scrollToProjects();
  };

  const handleScrollToSkills = () => {
    skillsRef.current?.scrollToProjects();
  };

  const handleScrollToAboutMe = () => {
    aboutmeRef.current?.scrollToProjects();
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header__toggle" onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </div>
      <nav
        className={`header__navigation ${
          isMenuOpen ? "header__navigation--open" : ""
        }`}
      >
        <Link
          href="#about-me"
          className="header__navigation-link"
          onClick={handleScrollToAboutMe}
        >
          About Me
        </Link>
        <Link
          href="#skills"
          className="header__navigation-link"
          onClick={handleScrollToSkills}
        >
          Skills
        </Link>
        <Link
          href="#my-works"
          className="header__navigation-link"
          onClick={handleScrollToProjects}
        >
          Projects
        </Link>
        <Link
          href="#contact"
          className="header__navigation-link"
          onClick={handleScrollToContact}
        >
          Contact Me
        </Link>
      </nav>
      <button className="header__button" onClick={onClick}>
        {theme === "light" ? (
          <img src={Sun} alt="sun" className="button-icon" />
        ) : (
          <img src={Moon} alt="moon" className="button-icon" />
        )}
      </button>
    </header>
  );
};

export default Header;
