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
import "./style.css";
import { forwardRef, useImperativeHandle, useRef } from "react";

const Skills = forwardRef((prop, ref) => {
  const skillsSectionRef = useRef<HTMLElement>(null);

  useImperativeHandle(ref, () => ({
    scrollToProjects: () => {
      skillsSectionRef.current?.scrollIntoView({ behavior: "smooth" });
    },
  }));

  return (
    <section className="skills" ref={skillsSectionRef}>
      <h2>Skills</h2>
      <div className="icons">
        <div className="icon--tooltip">
          <img src={React} alt="React" className="icon" />
          <span className="tooltip-text">React</span>
        </div>
        <div className="icon--tooltip">
          {" "}
          <img src={Redux} alt="Redux" className="icon" />
          <span className="tooltip-text">Redux</span>
        </div>
        <div className="icon--tooltip">
          {" "}
          <img src={JavaScript} alt="JavaScript" className="icon" />
          <span className="tooltip-text">JavaScript</span>
        </div>
        <div className="icon--tooltip">
          {" "}
          <img src={Angular} alt="Angular" className="icon" />
          <span className="tooltip-text">Angular</span>
        </div>
        <div className="icon--tooltip">
          {" "}
          <img src={Html} alt="Html" className="icon" />
          <span className="tooltip-text">HTML5</span>
        </div>
        <div className="icon--tooltip">
          {" "}
          <img src={Css} alt="Css" className="icon" />
          <span className="tooltip-text">CSS3</span>
        </div>
        <div className="icon--tooltip">
          <img src={Json} alt="Json" className="icon" />
          <span className="tooltip-text">JSON</span>
        </div>
        <div className="icon--tooltip">
          <img src={TypeScript} alt="TypeScript" className="icon" />
          <span className="tooltip-text">TypeScript</span>
        </div>
        <div className="icon--tooltip">
          <img src={Sass} alt="Sass" className="icon" />
          <span className="tooltip-text">SASS</span>
        </div>
        <div className="icon--tooltip">
          <img src={VisualStudio} alt="Visula Studio" className="icon" />
          <span className="tooltip-text">Visual Studio Code</span>
        </div>
        <div className="icon--tooltip">
          {" "}
          <img src={Git} alt="Git" className="icon" />
          <span className="tooltip-text">Git</span>
        </div>
        <div className="icon--tooltip">
          <img src={Firebase} alt="Firebase" className="icon" />
          <span className="tooltip-text">Firebase</span>
        </div>
      </div>
    </section>
  );
});

export default Skills;
