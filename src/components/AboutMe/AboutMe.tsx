import { forwardRef, useImperativeHandle, useRef } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import DefaultProfile from "../../assets/Stefan-Joncic.png";

import "./style.css";

const AboutMe = forwardRef((props, ref) => {
  const aboutmeSectionRef = useRef<HTMLElement>(null);
  const { t } = useTranslation();

  useImperativeHandle(ref, () => ({
    scrollToAboutMe: () => {
      aboutmeSectionRef.current?.scrollIntoView({ behavior: "smooth" });
    },
  }));

  const downloadPDFFile = () => {
    const pdfUrl = "Stefan_Joncic_CV.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Stefan_Joncic.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="profile" ref={aboutmeSectionRef}>
  <div className="profile__image">
    <div className="image__wrapper">
      <img src={DefaultProfile} alt="Stefan" className="image" />
      <div className="image__glow"></div>
    </div>
  </div>

  <div className="profile__text">
    <p className="intro__hello">{t("hello")}</p>
    <h1 className="intro__name text--animation">Stefan Jončić</h1>
    <h2 className="intro__role">Frontend Developer</h2>
    <p className="about-me__text">{t("aboutMe")}</p>

    <div className="profile__icons">
      <a
        href="https://www.linkedin.com/in/stefan-jon%C4%8Di%C4%87-64958a86/"
        className="icon--link"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedinIn />
      </a>
      <a
        href="https://github.com/mrStefanJ"
        className="icon--link"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub />
      </a>
    </div>

    <div className="profile__CV">
      <button onClick={downloadPDFFile} className="button__download">
        {t("download")}
      </button>
    </div>
  </div>
</section>

  );
});

export default AboutMe;
