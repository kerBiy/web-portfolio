import Header from "./components/Header/Header.jsx";
import About from "./components/About/About.jsx";
import "./App.css";

const App = () => {
  return (
    <>
      <div id="top" className="app">
        <Header />

        <main>
          <About />
        </main>
      </div>
    </>
  );
};

export default App;
