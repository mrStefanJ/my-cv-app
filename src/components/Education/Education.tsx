import { forwardRef, useImperativeHandle, useRef } from "react";
import { useTranslation } from "react-i18next";
import "./style.css";
import { Link } from "@mui/material";
import { VscMortarBoard } from "react-icons/vsc";
import MaskiskiLogo from "../../assets/icons/masinski-logo.png";

const Education = forwardRef((props, ref) => {
  const educationSectionRef = useRef<HTMLElement>(null);
  const { t } = useTranslation();

  useImperativeHandle(ref, () => ({
    scrollToEducation: () => {
      educationSectionRef.current?.scrollIntoView({ behavior: "smooth" });
    },
  }));

  return (
    <section className="education" ref={educationSectionRef}>
      <h2 className="education__title">{t("education")}</h2>
      <div className="education__level">
        <div className="education__faculty">
          <div className="faculty flex">
            <div className="faculty__logo">
              <Link
                href={t("facultyLink")}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={MaskiskiLogo}
                  alt={t("facultyName")}
                  className="icon"
                />
              </Link>
            </div>
            <div className="faculty__describe">
              <p className="faculty-name">{t("facultyName")}</p>
              <p className="date">2015-2017</p>
              <div className="degree">
                <VscMortarBoard />
                <p className="degree__name">Master Degree</p>
              </div>
            </div>
          </div>
          <div className="faculty flex">
            <div className="faculty__logo">
              <Link
                href={t("facultyLink")}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={MaskiskiLogo}
                  alt={t("facultyName")}
                  className="icon"
                />
              </Link>
            </div>
            <div className="faculty__describe">
              <p className="faculty-name">{t("facultyName")}</p>
              <p className="date">2011-2015</p>
              <div className="degree">
                <VscMortarBoard />
                <p className="degree__name">Bachelor Degree</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Education;
