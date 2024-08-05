import { forwardRef, useImperativeHandle, useRef } from "react";
import DefaultProfile from "../../assets/default-avatar.png";
import "./style.css";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const AboutMe = forwardRef((props, ref) => {
  const aboutmeSectionRef = useRef<HTMLElement>(null);

  useImperativeHandle(ref, () => ({
    scrollToProjects: () => {
      aboutmeSectionRef.current?.scrollIntoView({ behavior: "smooth" });
    },
  }));

  return (
    <section className="profile" ref={aboutmeSectionRef}>
      <div className="profile__image">
        <img src={DefaultProfile} alt="Stefan" className="image" />
      </div>
      <div className="profile__text">
        <p className="about-me__text">
          Hello, my name is{" "}
          <span className="text--animation">Stefan Jončić</span>.
        </p>
        <p className="about-me__text">I am Frontend Developer.</p>
        <p className="about-me__text">
          I have theoretical and practical knowledge in Information system
          technologies. Analytic ability to come the core of problem, strong
          organizational skills that help me meet deadlines readiness work both
          as a team member individually. I have theoretical and practical
          knowledge in Information system technologies.
        </p>
        <div className="profile__icons">
          <a
            href="https://www.linkedin.com/in/stefan-jon%C4%8Di%C4%87-64958a86/"
            className="icon--link"
          >
            <FaLinkedinIn />
          </a>
          <a href="https://github.com/mrStefanJ" className="icon--link">
            <FaGithub />
          </a>
        </div>
      </div>
    </section>
  );
});

export default AboutMe;
