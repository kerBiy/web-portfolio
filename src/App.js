import { useEffect, useContext } from "react";
import { ThemeContext } from "./contexts/theme.jsx";

import {
  Header,
  About,
  Experience,
  Projects,
  Skills,
  Contact,
  ScrollToTop,
  Footer,
} from "./components";

import "./App.css";

const App = () => {
  const [{ themeName }] = useContext(ThemeContext);

  useEffect(() => {
    const fadeInElements = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    fadeInElements.forEach((el) => observer.observe(el));

    return () => {
      fadeInElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div id="top" className={`${themeName} app`}>
      <Header />

      <main>
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default App;
