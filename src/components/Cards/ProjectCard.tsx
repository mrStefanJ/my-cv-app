import { Link } from "@mui/material";
import { TFunction } from "i18next";
import { Project } from "../../type/ProjectType";

interface Props {
  project: Project;
  delay: number;
  t: TFunction;
}

export const ProjectCard = ({ project, delay, t }: Props) => {
  const techClass = project.tech.toLowerCase().replace(".", "");

  return (
    <div
      className="project"
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <div className="project__content">
        <div className="project__image">
          <img
            src={project.img}
            alt={project.alt}
            className="image__size"
            loading="lazy"
          />
        </div>

        <div className="project__details">
          <h2 className="project__title">{project.title}</h2>

          <div className="project__about">
            <p className="project__text">
              {t(project.descKey)}
            </p>
          </div>

          <div className="project__program-language">
            <p className={techClass}>{project.tech}</p>
          </div>

          <div className="project__links">
            {project.github && (
              <Link
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project__link"
              >
                Github
              </Link>
            )}

            {project.live && (
              <Link
                href={project.live}
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
  );
};
