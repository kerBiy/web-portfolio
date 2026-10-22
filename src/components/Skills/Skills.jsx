import { skills } from "../../data";
import "./skills.css";

const Skills = () => {
  if (!skills.length) return null;

  return (
    <section id="skills" className="split grid">
      <h2 className="section-title split__title" data-rv="title">
        <span data-rv-inner>Skills</span>
      </h2>
      <dl className="split__body skills">
        {skills.map(({ category, items }) => (
          <div key={category} className="skills__group" data-rv="up">
            <dt className="skills__category">{category}</dt>
            <dd>
              <ul className="skills__list">
                {items.map((skill) => (
                  <li key={skill} className="skills__tag">
                    {skill}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
};

export default Skills;
