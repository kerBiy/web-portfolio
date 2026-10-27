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

// [icon, light, dark]: the brand colour, nudged darker (light theme) or lighter (dark theme)
// only where it falls under 3:1 on the pill. Black brands use the text colour in dark.
const logo = (icon, light = `#${icon.hex}`, dark = light) => [si(icon), light, dark];
const INK = "var(--ink)";

// Official logos: Simple Icons, plus Devicon for Java. Skills missing here show the name only.
const ICONS = {
  Java: [[JavaIcon, "#EA2D2E", "#EA2D2E"]],
  TypeScript: [logo(siTypescript)],
  JavaScript: [logo(siJavascript, "#A39314", "#F7DF1E")],
  Python: [logo(siPython)],
  "C++": [logo(siCplusplus, "#00599C", "#2974AC")],
  Bash: [logo(siGnubash, "#4CA724", "#4EAA25")],
  HTML: [logo(siHtml5)],
  CSS: [logo(siCss, "#663399", "#855CAD")],
  "Spring Boot": [logo(siSpringboot, "#63A339", "#6DB33F")],
  "Hibernate/JPA": [logo(siHibernate, "#59666C", "#657176")],
  React: [logo(siReact, "#469DB5", "#61DAFB")],
  "Redux Toolkit": [logo(siRedux, "#764ABC", "#825AC2")],
  "Node.js": [logo(siNodedotjs)],
  FastAPI: [logo(siFastapi)],
  Tailwind: [logo(siTailwindcss, "#05A0BB", "#06B6D4")],
  PostgreSQL: [logo(siPostgresql)],
  Kafka: [logo(siApachekafka, "#231F20", INK)],
  MongoDB: [logo(siMongodb)],
  Liquibase: [logo(siLiquibase)],
  JWT: [logo(siJsonwebtokens, "#000000", INK)],
  JUnit: [logo(siJunit5)],
  Jest: [logo(siJest, "#C21325", "#CB3444")],
  Docker: [logo(siDocker)],
  "GitHub Actions": [logo(siGithubactions)],
  Gradle: [logo(siGradle, "#02303A", INK)],
  Git: [logo(siGit)],
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
        {(ICONS[name] || []).map(([Icon, light, dark], i) => (
          <Icon
            key={i}
            className="pill__icon"
            style={{ "--logo-light": light, "--logo-dark": dark }}
            aria-hidden="true"
            focusable="false"
          />
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
