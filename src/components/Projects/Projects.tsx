import { Link } from "@mui/material";
import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from "react";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";

import { projects } from "../../data/projectsData";
import { CategoryType } from "../../type/ProjectType";
import { CategoryProject } from "../Category";
import "./style.css";
import { ProjectCard } from "../Cards/ProjectCard";

interface ProjectsHandle {
  scrollToProjects: () => void;
}

const Projects = forwardRef<ProjectsHandle>((_, ref) => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { t } = useTranslation();

  const [selectedCategory, setSelectedCategory] =
    useState<CategoryType>("All");

  /* ------------------ AOS INIT ------------------ */
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  /* ------------------ EXPOSE SCROLL ------------------ */
  useImperativeHandle(ref, () => ({
    scrollToProjects() {
      sectionRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    },
  }));

  /* ------------------ CATEGORIES ------------------ */
  const categories: CategoryType[] = useMemo(
    () => ["All", "JavaScript", "React", "Angular", "Vue", "Next.JS"],
    [],
  );

  /* ------------------ FILTER LOGIC ------------------ */
  const filteredProjects = useMemo(() => {
    if (selectedCategory === "All") return projects;
    return projects.filter((p) => p.tech === selectedCategory);
  }, [selectedCategory]);

  return (
    <section className="projects" ref={sectionRef}>
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
        {filteredProjects.map((proj, index) => (
          <ProjectCard
            key={proj.id}
            project={proj}
            delay={index * 120}
            t={t}
          />
        ))}
      </div>
    </section>
  );
});

export default Projects;
