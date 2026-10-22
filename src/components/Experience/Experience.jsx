import { experience, education } from "../../data";
import "./experience.css";

const Experience = () => (
  <section id="experience" className="experience split grid">
    <h2 className="section-title split__title" data-rv="title">
      <span data-rv-inner>Experience &amp; Education</span>
    </h2>

    <div className="split__body">
      <h3 className="experience__label" data-rv="up">
        Experience
      </h3>
      {experience.map((job) => (
        <article key={`${job.company}-${job.role}`} className="experience__job" data-rv="up">
          <div className="experience__head">
            <h4 className="experience__title">
              {job.role}, {job.company}
            </h4>
            <p className="experience__meta">{job.location}</p>
          </div>
          <p className="experience__period">{job.period}</p>
          <ul className="experience__bullets">
            {job.highlights.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </article>
      ))}

      <h3 className="experience__label experience__label--edu" data-rv="up">
        Education
      </h3>
      {education.map((edu) => (
        <article key={edu.degree} className="experience__edu" data-rv="up">
          <div className="experience__head">
            <h4 className="experience__degree">{edu.degree}</h4>
            <p className="experience__meta">{edu.school}</p>
          </div>
          <p className="experience__period">{edu.period}</p>
        </article>
      ))}
    </div>
  </section>
);

export default Experience;
