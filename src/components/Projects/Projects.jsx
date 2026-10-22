import ProjectContainer from "../ProjectContainer/ProjectContainer.jsx";
import { projects } from "../../data";

import "./projects.css";

const Projects = () => {
  if (!projects.length) return null;

  const main = projects.filter((p) => !p.earlier);
  const earlier = projects.filter((p) => p.earlier);

  return (
    <section id="projects" className="section projects fade-in">
      <h2 className="section__title">Projects</h2>

      <ul className="projects__grid projects__grid--main">
        {main.map((project) => (
          <ProjectContainer key={project.name} project={project} />
        ))}
      </ul>

      {earlier.length > 0 && (
        <>
          <h3 className="projects__subtitle">Earlier projects</h3>
          <ul className="projects__grid projects__grid--compact">
            {earlier.map((project) => (
              <ProjectContainer key={project.name} project={project} />
            ))}
          </ul>
        </>
      )}
    </section>
  );
};

export default Projects;
