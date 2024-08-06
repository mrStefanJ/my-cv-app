import TableTennis from "../../assets/Table_tennis.png";
import MovieSeries from "../../assets/movie_serie_app.png";
import Quiz from "../../assets/Javascript_test.png";
import "./style.css";
import { forwardRef, useImperativeHandle, useRef } from "react";
import { Link } from "@mui/material";

const Projects = forwardRef((props, ref) => {
  const projectsSectionRef = useRef<HTMLElement>(null);

  useImperativeHandle(ref, () => ({
    scrollToProjects: () => {
      projectsSectionRef.current?.scrollIntoView({ behavior: "smooth" });
    },
  }));

  return (
    <section className="projects" ref={projectsSectionRef}>
      <h2 className="projects__title">My Works</h2>
      <div className="projects__list">
        <div className="project">
          <img src={Quiz} alt="Quiz App" className="project__image" />
          <h2 className="project__title">Javascript Test</h2>
          <div className="project__about">
            <p className="project__text">
              This is simple project about Quiz app.
            </p>
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
              href="https://javascript-quiz-v1.netlify.app"
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
            <p className="project__text">
              This is app for Movies and Series, where user can see on Tending
              page all Movies and Series. On Movies or Series page will have
              options to select genres and display it.
            </p>
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
            <p className="project__text">
              This project is Table Tennis which user can adding new Player,
              display all Players and showing result of the games.
            </p>
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
      </div>
    </section>
  );
});

export default Projects;
