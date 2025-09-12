import { Link } from "@mui/material";
import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import Employee from "../../assets/crud-app.png";
import MovieSeries from "../../assets/movie-serie-app.png";
import Prototype from "../../assets/prototype-web.png";
import Quiz from "../../assets/Quiz.png";
import Managment from "../../assets/school-management.png";
import TableTennis from "../../assets/table-tennis.png";
import CrudAdvance from "../../assets/vue-crud.png";
import MovieNight from "../../assets/movie-night-app.png";
import { CategoryProject } from "../Category";
import "./style.css";
import { CategoryType, Project } from "../../type/ProjectType";

const Projects = forwardRef((props, ref) => {
  const projectsSectionRef = useRef<HTMLElement>(null);
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>("All");


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            // dodaj klasu sa malim delay-em da idu jedan po jedan
            setTimeout(() => {
              entry.target.classList.add("animate");
            }, index * 200); // delay 200ms po projektu
            observer.unobserve(entry.target); // animacija samo jednom
          }
        });
      },
      { threshold: 0.1 }
    );

    const items = document.querySelectorAll(".project");
    items.forEach((el) => observer.observe(el));

    return () => {
      items.forEach((el) => observer.unobserve(el));
    };
  }, []);

  useImperativeHandle(ref, () => ({
    scrollToProjects: () => {
      projectsSectionRef.current?.scrollIntoView({ behavior: "smooth" });
    },
  }));

  const categories: CategoryType[] = [
    "All",
    "JavaScript",
    "React",
    "Angular",
    "Vue",
  ];

  const projects: Project[] = [
    {
      id: "quiz",
      title: "Quiz",
      img: Quiz,
      alt: "Quiz App",
      descKey: "projectOne",
      tech: "JavaScript",
      github: "https://github.com/mrStefanJ/quiz-app",
      live: "https://quiz-for-programmer.netlify.app/",
    },
    {
      id: "movie",
      title: "Movie App",
      img: MovieSeries,
      alt: "Movie Series App",
      descKey: "projectTwo",
      tech: "React",
      github: "https://github.com/mrStefanJ/movie-app",
      live: "https://movies-series-v1.netlify.app/",
    },
    {
      id: "table-tennis",
      title: "Table Tenis",
      img: TableTennis,
      alt: "table tennis",
      descKey: "projectThree",
      tech: "React",
      github: "https://github.com/mrStefanJ/table-tennis",
      live: "https://table-tenis-v1.netlify.app",
    },
    {
      id: "employee",
      title: "Employee",
      img: Employee,
      alt: "employee",
      descKey: "projectFour",
      tech: "Angular",
      github: "https://github.com/mrStefanJ/crud-app-angular",
      live: "https://crud-operation-user.netlify.app/",
    },
    {
      id: "management",
      title: "School Management",
      img: Managment,
      alt: "school management",
      descKey: "projectFive",
      tech: "Next.JS", // or "Next.JS"
      github: "https://github.com/mrStefanJ/management-dashboard",
    },
    {
      id: "prototype",
      title: "Prototype Basic",
      img: Prototype,
      alt: "prototype",
      descKey: "projectSix",
      tech: "React",
      github: "https://github.com/mrStefanJ/basic-web-site",
      live: "https://prototype-responsive.netlify.app/",
    },
    {
      id: "crud-advanced",
      title: "CRUD advanced",
      img: CrudAdvance,
      alt: "crud advanced",
      descKey: "projectSeven",
      tech: "Vue",
      github: "https://github.com/mrStefanJ/Vue/tree/main/vue-crud-advanced",
    },
    {
      id: "movie2",
      title: "Movie App",
      img: MovieNight,
      alt: "movie app",
      descKey: "projectEight",
      tech: "Angular",
      github: "https://github.com/mrStefanJ/movie-night",
    },
  ];

  const filtered = projects.filter(
    (p) => selectedCategory === "All" || p.tech === selectedCategory
  );

  return (
    <section className="projects" ref={projectsSectionRef}>
      <h2 className="projects__title">{t("myWorks")}</h2>
      <div className="project__category">
        <CategoryProject
          categories={categories}
          selectedCategory={selectedCategory}
          onChange={setSelectedCategory}
          t={t}
        />
      </div>
      <div className="projects__list">
  {filtered.map((proj) => (
    <div className="project" key={proj.id}>
      <div className="project__content">
        <div className="project__image">
          <img src={proj.img} alt={proj.alt} className="image__size" />
        </div>
        <div className="project__details">
          <h2 className="project__title">{proj.title}</h2>
          <div className="project__about">
            <p className="project__text">{t(proj.descKey)}</p>
          </div>
          <div className="project__program-language">
            <p className={proj.tech.toLowerCase().replace(".", "")}>
              {proj.tech}
            </p>
          </div>
          <div className="project__links">
            {proj.github && (
              <Link
                href={proj.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project__link"
              >
                Github Link
              </Link>
            )}
            {proj.live && (
              <Link
                href={proj.live}
                target="_blank"
                rel="noopener noreferrer"
                className="project__link"
              >
                Live
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  ))}
</div>
    </section>
  );
});

export default Projects;
