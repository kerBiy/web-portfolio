import { useState } from "react";
import {
  siApachekafka,
  siCplusplus,
  siCss,
  siDocker,
  siFastapi,
  siGit,
  siGithubactions,
  siGnubash,
  siGradle,
  siHibernate,
  siHtml5,
  siJavascript,
  siJest,
  siJsonwebtokens,
  siJunit5,
  siLiquibase,
  siMongodb,
  siNodedotjs,
  siPostgresql,
  siPython,
  siReact,
  siRedux,
  siSpringboot,
  siTailwindcss,
  siTypescript,
} from "simple-icons";
import { ReactComponent as JavaIcon } from "devicon/icons/java/java-plain.svg";
import { skills } from "../../data";
import { PauseIcon, PlayIcon } from "../Icons/Icons.jsx";
import "./skills.css";

const si = (icon) => (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d={icon.path} />
  </svg>
);

// Official logos: Simple Icons, plus Devicon for Java. Skills missing here show the name only.
const ICONS = {
  Java: [JavaIcon],
  TypeScript: [si(siTypescript)],
  JavaScript: [si(siJavascript)],
  Python: [si(siPython)],
  "C++": [si(siCplusplus)],
  Bash: [si(siGnubash)],
  "HTML/CSS": [si(siHtml5), si(siCss)],
  "Spring Boot": [si(siSpringboot)],
  "Hibernate/JPA": [si(siHibernate)],
  React: [si(siReact)],
  "Redux Toolkit": [si(siRedux)],
  "Node.js": [si(siNodedotjs)],
  FastAPI: [si(siFastapi)],
  Tailwind: [si(siTailwindcss)],
  PostgreSQL: [si(siPostgresql)],
  Kafka: [si(siApachekafka)],
  MongoDB: [si(siMongodb)],
  Liquibase: [si(siLiquibase)],
  JWT: [si(siJsonwebtokens)],
  JUnit: [si(siJunit5)],
  Jest: [si(siJest)],
  Docker: [si(siDocker)],
  "GitHub Actions": [si(siGithubactions)],
  Gradle: [si(siGradle)],
  Git: [si(siGit)],
};

// The CV groups, redistributed so each row is wider than the screen: a pill never meets
// its own looped copy. Every skill sits in exactly one row.
const [languages, frameworks, data, testing] = skills.map((g) => g.items);
const pick = (...names) => names.filter((s) => testing.includes(s));
const ROWS = [
  { items: [...languages, ...pick("GitHub Actions", "Git")], dur: "34s" },
  { items: [...frameworks, ...pick("Docker", "Gradle", "Jest")], dur: "40s", rev: true },
  { items: [...data, ...pick("JUnit", "Mockito", "Testcontainers", "WireMock")], dur: "37s" },
];

const Pills = ({ items, ...props }) => (
  <ul className="marquee__half" {...props}>
    {items.map((name) => (
      <li key={name} className="pill">
        {(ICONS[name] || []).map((Icon, i) => (
          <Icon key={i} className="pill__icon" aria-hidden="true" focusable="false" />
        ))}
        {name}
      </li>
    ))}
  </ul>
);

const Skills = () => {
  const [paused, setPaused] = useState(false);

  return (
    <section id="skills" className={`split skills${paused ? " is-paused" : ""}`}>
      <div className="skills__top">
        <h2 className="section-title" data-rv="title">
          <span data-rv-inner>Skills</span>
        </h2>
        <button
          type="button"
          className="btn btn--secondary btn--sm skills__pause"
          aria-pressed={paused}
          onClick={() => setPaused(!paused)}
        >
          {paused ? <PlayIcon /> : <PauseIcon />}
          Pause motion
        </button>
      </div>
      <div className="skills__rows" data-rv="up">
        {ROWS.map(({ items, dur, rev }, i) => (
          <div key={i} className="marquee">
            <div
              className={`marquee__track${rev ? " marquee__track--rev" : ""}`}
              style={{ "--dur": dur }}
            >
              <Pills items={items} aria-label={`Skills, row ${i + 1}`} />
              <Pills items={items} className="marquee__half marquee__dup" aria-hidden="true" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
