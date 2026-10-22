import { about, contact } from "../../data";
import { DownloadIcon, GitHubIcon, LinkedInIcon } from "../Icons/Icons.jsx";
import "./contact.css";

const Contact = () => {
  if (!contact.email) return null;
  const { social, resume } = about;

  return (
    <section id="contact" className="contact">
      <h2 className="section-title" data-rv="title">
        <span data-rv-inner>Contact</span>
      </h2>

      <a href={`mailto:${contact.email}`} className="lnk contact__email" data-rv="up">
        {contact.email}
      </a>

      <div className="contact__row grid" data-rv="up">
        <div className="contact__text">
          {contact.availability && <p className="contact__availability">{contact.availability}</p>}
          {contact.location && <p className="contact__location">{contact.location}</p>}
        </div>

        <div className="contact__actions">
          {social.linkedin && (
            <a href={social.linkedin} className="btn btn--secondary">
              <LinkedInIcon />
              LinkedIn
            </a>
          )}
          {social.github && (
            <a href={social.github} className="btn btn--secondary">
              <GitHubIcon />
              GitHub
            </a>
          )}
          {resume && (
            <a href={resume} download className="btn btn--primary contact__cv">
              <DownloadIcon />
              Download CV
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
