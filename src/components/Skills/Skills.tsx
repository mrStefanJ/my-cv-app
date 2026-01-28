import React from "../../assets/icons/react.svg";
import Redux from "../../assets/icons/redux.svg";
import JavaScript from "../../assets/icons/javascript.svg";
import Angular from "../../assets/icons/angular.svg";
import Css from "../../assets/icons/css.svg";
import Git from "../../assets/icons/git.svg";
import Html from "../../assets/icons/html.svg";
import Json from "../../assets/icons/json.svg";
import TypeScript from "../../assets/icons/typescript.svg";
import Sass from "../../assets/icons/sass.svg";
import VisualStudio from "../../assets/icons/visual-studio-code.svg";
import Firebase from "../../assets/icons/firebase.png";
import NextJS from "../../assets/icons/nextJS.png";
import Python from "../../assets/icons/python.png";
import Mongodb from "../../assets/icons/mongodb.png";
import "./style.css";
import { forwardRef, useImperativeHandle, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "@mui/material";

const Skills = forwardRef((prop, ref) => {
  const skillsSectionRef = useRef<HTMLElement>(null);
  const { t } = useTranslation();

  useImperativeHandle(ref, () => ({
    scrollToProjects: () => {
      skillsSectionRef.current?.scrollIntoView({ behavior: "smooth" });
    },
  }));

  return (
    <section className="skills" ref={skillsSectionRef}>
      <h2>{t("skills")}</h2>
      <div className="icons">
        <div className="icon--tooltip">
          <Link
            href="https://react.dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={React} alt="React" className="icon" />
          </Link>
          <span className="tooltip-text">React</span>
        </div>
        <div className="icon--tooltip">
          <Link
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Redux} alt="Redux" className="icon" />
          </Link>
          <span className="tooltip-text">Redux</span>
        </div>
        <div className="icon--tooltip">
          <Link
            href="https://nextjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={NextJS} alt="Redux" className="icon" />
          </Link>
          <span className="tooltip-text">Next.JS</span>
        </div>
        <div className="icon--tooltip">
          <Link
            href="https://www.w3schools.com/js/default.asp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={JavaScript} alt="JavaScript" className="icon" />
          </Link>
          <span className="tooltip-text">JavaScript</span>
        </div>
        <div className="icon--tooltip">
          <Link
            href="https://angular.dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Angular} alt="Angular" className="icon" />
          </Link>
          <span className="tooltip-text">Angular</span>
        </div>
        <div className="icon--tooltip">
          <Link
            href="https://www.w3schools.com/html/default.asp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Html} alt="Html" className="icon" />
          </Link>
          <span className="tooltip-text">HTML5</span>
        </div>
        <div className="icon--tooltip">
          <Link
            href="https://www.w3schools.com/css/default.asp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Css} alt="Css" className="icon" />
          </Link>
          <span className="tooltip-text">CSS3</span>
        </div>
        <div className="icon--tooltip">
          <Link
            href="https://www.json.org/json-en.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Json} alt="Json" className="icon" />
          </Link>
          <span className="tooltip-text">JSON</span>
        </div>
        <div className="icon--tooltip">
          <Link
            href="https://www.typescriptlang.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={TypeScript} alt="TypeScript" className="icon" />
          </Link>
          <span className="tooltip-text">TypeScript</span>
        </div>
        <div className="icon--tooltip">
          <Link
            href="https://sass-lang.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Sass} alt="Sass" className="icon" />
          </Link>
          <span className="tooltip-text">SASS</span>
        </div>
        <div className="icon--tooltip">
          <Link
            href="https://code.visualstudio.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={VisualStudio} alt="Visula Studio" className="icon" />
          </Link>

          <span className="tooltip-text">Visual Studio Code</span>
        </div>
        <div className="icon--tooltip">
          <Link
            href="https://git-scm.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Git} alt="Git" className="icon" />
          </Link>
          <span className="tooltip-text">Git</span>
        </div>
        <div className="icon--tooltip">
          <Link
            href="https://firebase.google.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Firebase} alt="Firebase" className="icon" />
          </Link>
          <span className="tooltip-text">Firebase</span>
        </div>
        <div className="icon--tooltip">
          <Link
            href="https://www.python.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Python} alt="Python" className="icon" />
          </Link>
          <span className="tooltip-text">Python</span>
        </div>
        <div className="icon--tooltip">
          <Link
            href="https://www.mongodb.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Mongodb} alt="Mongodb" className="icon" />
          </Link>
          <span className="tooltip-text">Mongodb</span>
        </div>
      </div>
    </section>
  );
});

export default Skills;
