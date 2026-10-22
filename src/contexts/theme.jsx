import { createContext, useEffect, useState } from "react";

const ThemeContext = createContext();

const STORAGE_KEY = "theme";
const THEME_COLOR = { light: "#eceef0", dark: "#16181b" };

const systemTheme = () =>
  window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

const storedTheme = () => {
  try {
    const value = localStorage.getItem(STORAGE_KEY);
    return value === "dark" || value === "light" ? value : null;
  } catch {
    return null;
  }
};

const ThemeProvider = ({ children }) => {
  // null = follow the system; CSS handles that case without data-theme.
  const [override, setOverride] = useState(storedTheme);
  const [system, setSystem] = useState(systemTheme);
  const themeName = override || system;

  useEffect(() => {
    const query = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = (e) => setSystem(e.matches ? "dark" : "light");
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (override) root.dataset.theme = override;
    else delete root.dataset.theme;

    document
      .querySelectorAll('meta[name="theme-color"]')
      .forEach((meta) => meta.setAttribute("content", THEME_COLOR[themeName]));
  }, [override, themeName]);

  const toggleTheme = () => {
    const next = themeName === "dark" ? "light" : "dark";
    setOverride(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Storage blocked: the choice lasts for this visit only.
    }
  };

  return (
    <ThemeContext.Provider value={[{ themeName, toggleTheme }]}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };
