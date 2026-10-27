import { ExternalIcon, GitHubIcon } from "../Icons/Icons.jsx";
import "./projectRow.css";

// The screenshot sits inset in a tinted frame and runs past its bottom edge.
const ProjectRow = ({ project, featured }) => {
  const { name, pitch, stack, sourceCode, livePreview, image, frame } = project;
  const tint = frame && { "--f1": frame[0], "--f2": frame[1] };

  return (
    <article className={`project${featured ? " project--featured" : ""}`} data-row>
      <div className="project__mask" data-mask>
        <div className="project__frame" data-frame style={tint}>
          <div className="project__inner" data-inner>
            {image && (
              <img
                className="project__shot"
                src={image.src}
                srcSet={image.srcSet}
                sizes={featured ? "(min-width: 1024px) 680px, 86vw" : "(min-width: 761px) 560px, 86vw"}
                alt={image.alt}
                width={image.width}
                height={image.height}
                loading="lazy"
                decoding="async"
                style={{ objectPosition: image.position || "top center" }}
              />
            )}
          </div>
        </div>
      </div>

      <div className="project__text" data-row-text>
        <h3 className="project__name">{name}</h3>
        <p className="project__pitch">{pitch}</p>
        {stack && (
          <ul className="project__tags">
            {stack.map((tag) => (
              <li key={tag} className="project__tag">
                {tag}
              </li>
            ))}
          </ul>
        )}

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
