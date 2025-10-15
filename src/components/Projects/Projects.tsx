import { Link } from "@mui/material";
import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { projects } from "../../data/projectsData";
import { CategoryType } from "../../type/ProjectType";
import { CategoryProject } from "../Category";
import "./style.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

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

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
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
    <div className="project" key={proj.id} data-aos="fade-up">
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
