import { forwardRef, useImperativeHandle, useRef } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import DefaultProfile from "../../assets/default-avatar.png";

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
        <img src={DefaultProfile} alt="Stefan" className="image" />
      </div>
      <div className="profile__text">
        <p className="about-me__text">
          {t("hello")} <span className="text--animation">Stefan Jončić</span>.
        </p>
        <p className="about-me__text">{t("iam")} Frontend Developer.</p>
        <p className="about-me__text">{t("aboutMe")}</p>
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
        <div className="profile__CV">
          <button onClick={downloadPDFFile} className="button__download">
            Download CV
          </button>
        </div>
      </div>
    </section>
  );
});

export default AboutMe;
