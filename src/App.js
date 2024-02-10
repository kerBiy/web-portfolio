import Header from "./components/Header/Header.jsx";
import About from "./components/About/About.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Skills from "./components/Skills/Skills.jsx";
import "./App.css";

const App = () => {
  return (
    <>
      <div id="top" className="app">
        <Header />

        <About />
        <Projects />
        <Skills />
      </div>
    </>
  );
};

export default App;
