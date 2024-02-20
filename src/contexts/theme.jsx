import { createContext, useEffect, useState } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [themeName, setThemeName] = useState("light");

  const changeTheme = (e) => {
    setThemeName(e.matches ? "dark" : "light");
  };

  const toggleTheme = () => {
    setThemeName(themeName === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    const darkMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    setThemeName(darkMediaQuery.matches ? "dark" : "light");

    darkMediaQuery.addEventListener("change", changeTheme);

    return () => darkMediaQuery.removeEventListener("change", changeTheme);
  }, []);

  // Set the body color
  useEffect(() => {
    const color = themeName === "dark" ? "var(--clr-dark)" : "var(--clr-light)";
    document.body.style.backgroundColor = color;

    return () => {
      document.body.style.backgroundColor = "";
    };
  }, [themeName]);

  return (
    <ThemeContext.Provider value={[{ themeName, toggleTheme }]}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };
