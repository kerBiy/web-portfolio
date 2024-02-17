import { useContext } from "react";
import { ThemeContext } from "./themes";

import Header from "./components/Header/Header.jsx";
import About from "./components/About/About.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Skills from "./components/Skills/Skills.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Footer from "./components/Footer/Footer.jsx";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop.jsx";

import "./App.css";

const App = () => {
  const [{ themeName }] = useContext(ThemeContext);

  // Nigga i don't really know what the fuck am I doing here
  document.getElementsByTagName("body")[0].style.backgroundColor =
    themeName === "dark" ? "#2a2f4c" : "#dee4e7";

  return (
    <div id="top" className={`${themeName} app`}>
      <Header />

      <About />
      <Projects />
      <Skills />
      <Contact />

      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default App;
