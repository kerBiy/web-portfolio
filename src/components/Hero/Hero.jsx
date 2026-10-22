import { about, contact } from "../../data";
import { DownloadIcon } from "../Icons/Icons.jsx";
import "./hero.css";

const Hero = () => {
  const { name, role, subtitle, description, resume } = about;
  const [first, ...rest] = name.split(" ");

  return (
    <section className="hero" aria-labelledby="hero-title">
      <h1 id="hero-title" className="hero__name">
        <span className="hero__line">
          <span className="hero__word hero__word--1">{first}</span>
        </span>
        <span className="hero__line hero__line--end">
          <span className="hero__word hero__word--2">{rest.join(" ")}</span>
        </span>
      </h1>

      <div className="hero__rule" aria-hidden="true" />

      <div className="hero__info grid">
        <p className="hero__role">
          <span className="hero__role-title">{role}</span>
          {subtitle && <span>{subtitle}</span>}
          <span className="hero__location">{contact.location}</span>
        </p>

        {description && <p className="hero__bio">{description}</p>}

        <div className="hero__cta">
          {resume && (
            <a href={resume} download className="btn btn--primary">
              <DownloadIcon />
              Download CV
            </a>
          )}
          <a href="#projects" className="lnk hero__more">
            See projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
