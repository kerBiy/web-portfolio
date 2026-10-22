import { Header, Hero, Experience, Projects, Skills, Contact, Footer } from "./components";
import useScrollReveal from "./hooks/useScrollReveal";

const App = () => {
  useScrollReveal();

  return (
    <div id="top" className="container">
      <Header />

      <main>
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default App;
