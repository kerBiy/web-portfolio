import { projects } from "../../data/index.js";
import ProjectContainer from "../ProjectContainer/ProjectContainer.jsx";
import "./projects.css";

const Projects = () => {
  if (!projects.length) return null;

  return (
    <section id="projects" className="section projects">
      <h2 className="section__title">Projects</h2>

      <div className="projects__grid">
        {projects.map((project) => (
          <ProjectContainer project={project} className="projects__grid-item" />
        ))}
      </div>
    </section>
  );
};

export default Projects;
