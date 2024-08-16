import React, { useState } from "react";
import "./style.css";
import { FaBars, FaTimes } from "react-icons/fa";
import Sun from "../../assets/icons/sun.png";
import Moon from "../../assets/icons/moon.png";
import { Link } from "@mui/material";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "../LanguageSwitcher";

const Header = ({
  theme,
  onClick,
  aboutmeRef,
  educationRef,
  skillsRef,
  projectsRef,
  contactRef,
}: {
  theme: string;
  onClick: () => void;
  aboutmeRef: React.RefObject<{ scrollToAboutMe: () => void }>;
  educationRef: React.RefObject<{ scrollToEducation: () => void }>;
  skillsRef: React.RefObject<{ scrollToProjects: () => void }>;
  projectsRef: React.RefObject<{ scrollToProjects: () => void }>;
  contactRef: React.RefObject<{ scrollToContact: () => void }>;
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();

  const handleScrollToAboutMe = () => {
    aboutmeRef.current?.scrollToAboutMe();
  };

  const handleScrollToEducation = () => {
    educationRef.current?.scrollToEducation();
  };

  const handleScrollToSkills = () => {
    skillsRef.current?.scrollToProjects();
  };

  const handleScrollToProjects = () => {
    projectsRef.current?.scrollToProjects();
  };

  const handleScrollToContact = () => {
    contactRef.current?.scrollToContact();
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
          {t("about")}
        </Link>
        <Link
          href="#education"
          className="header__navigation-link"
          onClick={handleScrollToEducation}
        >
          {t("education")}
        </Link>
        <Link
          href="#skills"
          className="header__navigation-link"
          onClick={handleScrollToSkills}
        >
          {t("skills")}
        </Link>
        <Link
          href="#my-works"
          className="header__navigation-link"
          onClick={handleScrollToProjects}
        >
          {t("project")}
        </Link>
        <Link
          href="#contact"
          className="header__navigation-link"
          onClick={handleScrollToContact}
        >
          {t("contact")}
        </Link>
      </nav>
      <div className="header__icons">
        <LanguageSwitcher />
        <button className="header__button" onClick={onClick}>
          {theme === "light" ? (
            <img src={Sun} alt="sun" className="button-icon" />
          ) : (
            <img src={Moon} alt="moon" className="button-icon" />
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
