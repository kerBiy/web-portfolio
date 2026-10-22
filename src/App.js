import { useEffect } from "react";

import {
  Header,
  Hero,
  Experience,
  Projects,
  Skills,
  Contact,
  ScrollToTop,
  Footer,
} from "./components";

const App = () => {
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
    <div id="top" className="app">
      <Header />

      <main>
        <Hero />
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
