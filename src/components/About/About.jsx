import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import { about } from "../../data";
import "./about.css";

const About = () => {
  const { name, role, subtitle, description, resume, social } = about;

  return (
    <section className="about center section fade-in" aria-labelledby="about-title">
      <h1 id="about-title">
        Hi, I am <span className="about__name">{name}.</span>
      </h1>

      <h2 className="about__role heading-text">
        {role}
        {subtitle && <span className="about__subtitle">{subtitle}</span>}
      </h2>
      {description && <p className="about__desc">{description}</p>}

      <div className="about__contact center">
        {resume && (
          <a href={resume} download className="btn btn--outline">
            Download CV
          </a>
        )}

        {social?.github && (
          <a href={social.github} aria-label="GitHub" className="link link--icon">
            <GitHubIcon />
          </a>
        )}

        {social?.linkedin && (
          <a href={social.linkedin} aria-label="LinkedIn" className="link link--icon">
            <LinkedInIcon />
          </a>
        )}
      </div>
    </section>
  );
};

export default About;
