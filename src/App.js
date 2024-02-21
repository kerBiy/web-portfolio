import { useContext } from "react";
import { ThemeContext } from "./contexts/theme.jsx";

import {
  Header,
  About,
  Projects,
  Skills,
  Contact,
  ScrollToTop,
  Footer,
} from "./components";

import "./App.css";

const App = () => {
  const [{ themeName }] = useContext(ThemeContext);

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
