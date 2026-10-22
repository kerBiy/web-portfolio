import { experience, education } from "../../data";
import "./experience.css";

const Experience = () => (
  <section id="experience" className="section experience fade-in">
    <h2 className="section__title">Experience &amp; Education</h2>

    <ul className="experience__list">
      {experience.map((job) => (
        <li key={`${job.company}-${job.role}`} className="card experience__item">
          <div className="experience__head">
            <h3 className="heading-text">
              {job.role} · <span className="experience__org">{job.company}</span>
            </h3>
            <p className="experience__meta">
              {job.period} · {job.location}
            </p>
          </div>
          <ul className="bullets">
            {job.highlights.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </li>
      ))}

      {education.map((edu) => (
        <li key={edu.degree} className="experience__item experience__item--edu">
          <div className="experience__head">
            <h3 className="experience__degree">{edu.degree}</h3>
            <p className="experience__meta">{edu.period}</p>
          </div>
          <p>{edu.school}</p>
        </li>
      ))}
    </ul>
  </section>
);

export default Experience;
