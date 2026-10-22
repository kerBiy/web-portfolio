import ProjectRow from "../ProjectRow/ProjectRow.jsx";
import { about, projects } from "../../data";

import "./projects.css";

const Projects = () => {
  if (!projects.length) return null;
  const { github } = about.social;

  return (
    <section id="projects" className="projects">
      <div className="projects__head">
        <h2 className="section-title" data-rv="title">
          <span data-rv-inner>Projects</span>
        </h2>
        {github && (
          <a href={github} className="lnk projects__more projects__more--top" data-rv="up">
            More on GitHub
          </a>
        )}
      </div>

      <div className="projects__list">
        {projects.map((project, i) => (
          <ProjectRow key={project.name} project={project} side={i % 2 ? "right" : "left"} />
        ))}
      </div>

      {github && (
        <a href={github} className="lnk projects__more projects__more--bottom" data-rv="up">
          More on GitHub
        </a>
      )}
    </section>
  );
};

export default Projects;
