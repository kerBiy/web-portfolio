import { createContext, useEffect, useState } from "react";

const ThemeContext = createContext();

const STORAGE_KEY = "theme";
const THEME_COLOR = { light: "#eceef0", dark: "#16181b" };
const query = () => window.matchMedia("(prefers-color-scheme: dark)");
const systemTheme = () => (query().matches ? "dark" : "light");

// A manual choice is kept only while the device stays on the theme it was made against;
// once the device theme changes, the device wins again.
const readOverride = () => {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (saved && saved.system === systemTheme()) return saved.theme;
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    // Missing, malformed or blocked storage: follow the device.
  }
  return null;
};

const writeOverride = (value) => {
  try {
    if (value) localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
    else localStorage.removeItem(STORAGE_KEY);
  } catch {
    // Storage blocked: the choice lasts for this visit only.
  }
};

const ThemeProvider = ({ children }) => {
  // null = follow the device; CSS handles that case without data-theme.
  const [override, setOverride] = useState(readOverride);
  const [system, setSystem] = useState(systemTheme);
  const themeName = override || system;

  useEffect(() => {
    const media = query();
    const onChange = (e) => {
      setSystem(e.matches ? "dark" : "light");
      setOverride(null);
      writeOverride(null);
    };
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
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
    // Toggling back to the device theme means "follow the device" again.
    const value = next === system ? null : next;
    setOverride(value);
    writeOverride(value && { theme: value, system });
  };

  return (
    <ThemeContext.Provider value={[{ themeName, toggleTheme }]}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };
