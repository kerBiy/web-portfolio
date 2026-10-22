import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";

import "./projectContainer.css";

const ProjectContainer = ({ project }) => {
  const { name, pitch, highlights, stack, sourceCode, livePreview, image, featured } = project;

  return (
    <li className={`card project${featured ? " project--featured" : ""}`}>
      {image && (
        <img
          className="project__image"
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          loading="lazy"
        />
      )}

      <div className="project__body">
        {featured && <p className="project__badge">Featured project</p>}
        <h3 className="heading-text">{name}</h3>
        <p className="project__pitch">{pitch}</p>

        {highlights?.length > 0 && (
          <ul className="bullets">
            {highlights.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        )}

        {stack && (
          <ul className="project__stack" aria-label="Tech stack">
            {stack.map((item) => (
              <li key={item} className="project__stack-item">
                {item}
              </li>
            ))}
          </ul>
        )}

        <div className="project__links">
          {sourceCode && (
            <a href={sourceCode} className="link link--icon project__link">
              <GitHubIcon fontSize="small" aria-hidden="true" /> Code
            </a>
          )}
          {livePreview && (
            <a href={livePreview} className="link link--icon project__link">
              <LaunchIcon fontSize="small" aria-hidden="true" /> Live demo
            </a>
          )}
        </div>
      </div>
    </li>
  );
};

export default ProjectContainer;
