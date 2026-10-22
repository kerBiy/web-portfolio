import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import { about, contact } from "../../data";
import "./contact.css";

const Contact = () => {
  if (!contact.email) return null;
  const { social } = about;

  return (
    <section className="section contact center fade-in" id="contact">
      <h2 className="section__title">Contact</h2>
      {contact.availability && <p className="contact__text">{contact.availability}</p>}

      <a href={`mailto:${contact.email}`} className="btn btn--outline">
        {contact.email}
      </a>

      <div className="contact__social center">
        {social.linkedin && (
          <a href={social.linkedin} className="link link--icon contact__link">
            <LinkedInIcon aria-hidden="true" /> LinkedIn
          </a>
        )}
        {social.github && (
          <a href={social.github} className="link link--icon contact__link">
            <GitHubIcon aria-hidden="true" /> GitHub
          </a>
        )}
      </div>

      {contact.location && <p className="contact__location">{contact.location}</p>}
    </section>
  );
};

export default Contact;
