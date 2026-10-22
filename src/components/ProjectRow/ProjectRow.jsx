import { ExternalIcon, GitHubIcon } from "../Icons/Icons.jsx";
import "./projectRow.css";

// Rows alternate sides; the frame wipes open from the edge that faces the text.
const ProjectRow = ({ project, side }) => {
  const { name, pitch, stack, sourceCode, livePreview, image } = project;

  return (
    <article className={`project project--${side}`} data-row data-side={side}>
      <div className="project__frame" data-frame>
        <div className="project__inner" data-inner>
          {image && (
            <img
              className="project__shot"
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              loading="lazy"
              style={{ objectPosition: image.position || "center" }}
            />
          )}
        </div>
      </div>

      <div className="project__text" data-text>
        <h3 className="project__name">{name}</h3>
        <p className="project__pitch">{pitch}</p>
        {stack && <p className="project__stack">{stack.join(", ")}</p>}

        <div className="project__links">
          {sourceCode && (
            <a href={sourceCode} className="btn btn--secondary btn--sm">
              <GitHubIcon />
              GitHub
              <span className="visually-hidden">: {name}</span>
            </a>
          )}
          {livePreview && (
            <a href={livePreview} className="btn btn--primary btn--sm project__live">
              Live site
              <span className="visually-hidden">: {name}</span>
              <ExternalIcon />
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectRow;
