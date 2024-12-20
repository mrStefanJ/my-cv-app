import TableTennis from "../../assets/table-tennis.png";
import MovieSeries from "../../assets/movie-serie-app.png";
import Quiz from "../../assets/Quiz.png";
import Employee from "../../assets/crud-app.png";
import Managment from "../../assets/school-management.png";
import Prototype from "../../assets/prototype-web.png";
import "./style.css";
import { forwardRef, useImperativeHandle, useRef } from "react";
import { Link } from "@mui/material";
import { useTranslation } from "react-i18next";

const Projects = forwardRef((props, ref) => {
  const projectsSectionRef = useRef<HTMLElement>(null);
  const { t } = useTranslation();

  useImperativeHandle(ref, () => ({
    scrollToProjects: () => {
      projectsSectionRef.current?.scrollIntoView({ behavior: "smooth" });
    },
  }));

  return (
    <section className="projects" ref={projectsSectionRef}>
      <h2 className="projects__title">{t("myWorks")}</h2>
      <div className="projects__list">
        <div className="project">
          <img src={Quiz} alt="Quiz App" className="project__image" />
          <h2 className="project__title">Quiz</h2>
          <div className="project__about">
            <p className="project__text">{t("projectOne")}</p>
          </div>
          <div className="project__program-language">
            <p className="javascript">JavaScript</p>
          </div>
          <div className="project__links">
            <Link
              href="https://github.com/mrStefanJ/quiz-app"
              target="_blank"
              rel="noopener noreferrer"
              className="project__link"
            >
              Github Link
            </Link>
            <Link
              href="https://quiz-for-programmer.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="project__link"
            >
              Live
            </Link>
          </div>
        </div>
        <div className="project">
          <img
            src={MovieSeries}
            alt="Movie Series App"
            className="project__image"
          />
          <h2 className="project__title">Movie App</h2>
          <div className="project__about">
            <p className="project__text">{t("projectTwo")}</p>
          </div>
          <div className="project__program-language">
            <p className="react">React</p>
          </div>
          <div className="project__links">
            <Link
              href="https://github.com/mrStefanJ/movie-app"
              target="_blank"
              rel="noopener noreferrer"
              className="project__link"
            >
              Github Link
            </Link>
            <Link
              href="https://movies-series-v1.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="project__link"
            >
              Live
            </Link>
          </div>
        </div>
        <div className="project">
          <img
            src={TableTennis}
            alt="table tennis"
            className="project__image"
          />
          <h2 className="project__title">Table Tenis</h2>
          <div className="project__about">
            <p className="project__text">{t("projectThree")}</p>
          </div>
          <div className="project__program-language">
            <p className="react">React</p>
          </div>
          <div className="project__links">
            <Link
              href="https://github.com/mrStefanJ/table-tennis"
              target="_blank"
              rel="noopener noreferrer"
              className="project__link"
            >
              Github Link
            </Link>
            <Link
              href="https://table-tenis-v1.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="project__link"
            >
              Live
            </Link>
          </div>
        </div>
        <div className="project">
          <img src={Employee} alt="employee" className="project__image" />
          <h2 className="project__title">Employee</h2>
          <div className="project__about">
            <p className="project__text">{t("projectFour")}</p>
          </div>
          <div className="project__program-language">
            <p className="angular">Angular</p>
          </div>
          <div className="project__links">
            <Link
              href="https://github.com/mrStefanJ/crud-app-angular"
              target="_blank"
              rel="noopener noreferrer"
              className="project__link"
            >
              Github Link
            </Link>
            <Link
              href="https://crud-operation-user.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="project__link"
            >
              Live
            </Link>
          </div>
        </div>
        <div className="project">
          <img src={Managment} alt="employee" className="project__image" />
          <h2 className="project__title">School Management</h2>
          <div className="project__about">
            <p className="project__text">{t("projectFive")}</p>
          </div>
          <div className="project__program-language">
            <p className="nextjs">Next.JS</p>
          </div>
          <div className="project__links">
            <Link
              href="https://github.com/mrStefanJ/management-dashboard"
              target="_blank"
              rel="noopener noreferrer"
              className="project__link"
            >
              Github Link
            </Link>
            {/* <Link
              href="https://school-next.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="project__link"
            >
              Live
            </Link> */}
          </div>
        </div>
        <div className="project">
          <img src={Prototype} alt="employee" className="project__image" />
          <h2 className="project__title">Prototype Basic</h2>
          <div className="project__about">
            <p className="project__text">{t("projectSix")}</p>
          </div>
          <div className="project__program-language">
            <p className="react">React</p>
          </div>
          <div className="project__links">
            <Link
              href="https://github.com/mrStefanJ/basic-web-site"
              target="_blank"
              rel="noopener noreferrer"
              className="project__link"
            >
              Github Link
            </Link>
            <Link
              href="https://prototype-responsive.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="project__link"
            >
              Live
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Projects;
