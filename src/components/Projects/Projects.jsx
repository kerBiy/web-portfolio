import uniqid from "uniqid";

import { projects } from "../../data/index.js";
import ProjectContainer from "../ProjectContainer/ProjectContainer.jsx";
import "./projects.css";

const Projects = () => {
  if (!projects.length) return null;

  return (
    <section id="projects" className="section projects">
      <h2 className="section__title">Projects</h2>

      <ul className="projects__grid">
        {projects.map((project) => (
          <ProjectContainer key={uniqid()} project={project} />
        ))}
      </ul>
    </section>
  );
};

export default Projects;
