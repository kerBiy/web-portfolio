import { useContext, useEffect, useRef, useState } from "react";

import { ThemeContext } from "../../contexts/theme";
import { about, experience, projects, skills, contact } from "../../data";
import { CloseIcon, DownloadIcon, MenuIcon, MoonIcon, SunIcon } from "../Icons/Icons.jsx";
import "./header.css";

const links = [
  experience.length && { href: "#experience", label: "Experience" },
  projects.length && { href: "#projects", label: "Projects" },
  skills.length && { href: "#skills", label: "Skills" },
  contact.email && { href: "#contact", label: "Contact" },
].filter(Boolean);

const ThemeButton = () => {
  const [{ themeName, toggleTheme }] = useContext(ThemeContext);
  const dark = themeName === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="ico"
      aria-label={`Switch to ${dark ? "light" : "dark"} theme`}
    >
      {dark ? <SunIcon /> : <MoonIcon />}
    </button>
  );
};

const Header = () => {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef(null);
  const sheetRef = useRef(null);

  useEffect(() => {
    if (!open) return undefined;

    const root = document.documentElement;
    root.style.overflow = "hidden";
    sheetRef.current?.querySelector("button")?.focus();

    // Keep Tab inside the menu and let Esc close it.
    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
        return;
      }
      if (e.key !== "Tab") return;
      const items = sheetRef.current.querySelectorAll("a[href], button");
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    // The menu only exists on small screens; close it if the viewport grows.
    const wide = window.matchMedia("(min-width: 761px)");
    const onWide = (e) => e.matches && setOpen(false);

    document.addEventListener("keydown", onKeyDown);
    wide.addEventListener("change", onWide);
    return () => {
      root.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
      wide.removeEventListener("change", onWide);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className="header">
      <a href="#top" className="header__logo" aria-label="Alexandru Balta, home">
        AB
      </a>

      <nav className="header__nav" aria-label="Main">
        {links.map(({ href, label }) => (
          <a key={href} href={href} className="header__link">
            {label}
          </a>
        ))}
      </nav>

      <div className="header__actions">
        <ThemeButton />
        <button
          ref={triggerRef}
          type="button"
          className="ico ico--solid header__menu-btn"
          aria-label="Open menu"
          aria-expanded={open}
          aria-controls="menu"
          onClick={() => setOpen(true)}
        >
          <MenuIcon />
        </button>
      </div>

      {open && (
        <div
          id="menu"
          ref={sheetRef}
          className="menu"
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
        >
          <div className="menu__bar">
            <span className="header__logo" aria-hidden="true">
              AB
            </span>
            <div className="header__actions">
              <ThemeButton />
              <button
                type="button"
                className="ico ico--solid"
                aria-label="Close menu"
                onClick={() => {
                  close();
                  triggerRef.current?.focus();
                }}
              >
                <CloseIcon />
              </button>
            </div>
          </div>

          <nav className="menu__nav" aria-label="Main">
            {links.map(({ href, label }) => (
              <a key={href} href={href} className="menu__link" onClick={close}>
                {label}
              </a>
            ))}
          </nav>

          <div className="menu__footer">
            {about.resume && (
              <a href={about.resume} download className="btn btn--primary">
                <DownloadIcon />
                Download CV
              </a>
            )}
            <div className="menu__social">
              {about.social.linkedin && (
                <a href={about.social.linkedin} className="lnk">
                  LinkedIn
                </a>
              )}
              {about.social.github && (
                <a href={about.social.github} className="lnk">
                  GitHub
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
