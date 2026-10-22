# Web Portfolio

Personal site of Alexandru Balta, Software Engineer (Full-Stack · Java & React). It covers my experience at 8x8, my education, my projects (Crate, SNN Brain Explorer and more) and my skills, and has a link to download my CV.

Built with React (Create React App) and vanilla CSS, and deployed to GitHub Pages with `npm run deploy`.

## Live Website

Here is the website: [Live Demo](https://kerBiy.github.io/web-portfolio)

## Screenshots

### Dark Mode

![App Screenshot in Dark Mode](public/img/readme-dark.jpg?raw=true)

### Light Mode

![App Screenshot in Light Mode](public/img/readme-white.jpg?raw=true)

## Features

- Editorial layout with Inter Tight for headings and Inter for text, responsive from phones to wide screens.
- Light and dark themes that follow the device setting, with a toggle to override it for the current device theme.
- Sticky header that turns translucent as content scrolls under it, and a full-screen menu on small screens.
- Scroll-driven reveals: section titles rise out of a mask and project screenshots wipe open as you scroll, reversing on the way back.
- Accessible by default: WCAG AA contrast, visible focus states, keyboard-friendly menu, and no motion when `prefers-reduced-motion` is set.

## Project Structure

- `src/data/index.js`: all content (about, experience, education, projects, skills, contact). Edit this file to update the site.
- `src/index.css`: design tokens (colors for light and dark, type scale, spacing, radii, motion) and shared styles.
- `src/components/`: one folder per section (Header, Hero, Experience, Projects, ProjectRow, Skills, Contact, Footer).
- `src/hooks/useScrollReveal.js`: the scroll-driven reveal animations.
- `src/contexts/theme.jsx`: theme handling.
- `public/`: the CV (`Alexandru_Balta_Resume.pdf`) and project screenshots in `public/img/projects/`.

To show a "Live site" button for a project, set its `livePreview` URL in `src/data/index.js`.

## Run Locally

Clone the project

```bash
  git clone https://github.com/kerBiy/web-portfolio.git
```

Go to the project directory

```bash
  cd web-portfolio
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```

Deploy to GitHub Pages

```bash
  npm run deploy
```
