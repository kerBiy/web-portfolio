import { skills } from "../../data";
import "./skills.css";

const Skills = () => {
  if (!skills.length) return null;

  return (
    <section className="section skills fade-in" id="skills">
      <h2 className="section__title">Skills</h2>
      <dl className="skills__groups">
        {skills.map(({ category, items }) => (
          <div key={category} className="skills__group">
            <dt className="skills__category">{category}</dt>
            <dd>
              <ul className="skills__list">
                {items.map((skill) => (
                  <li key={skill} className="skills__list-item btn btn--plain">
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
