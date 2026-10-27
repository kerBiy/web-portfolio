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
- Project showcase cards: each screenshot sits in a grain-textured gradient frame tinted for the project and peeks out of its bottom edge. Crate is featured, the rest sit in a two-column grid.
- Scroll reveals: section titles rise out of a mask and project frames open from their bottom edge once they scroll into view. Only transform and opacity animate, so the reveals stay smooth and always finish.
- Accessible by default: WCAG AA contrast, visible focus states, keyboard-friendly menu, and no motion when `prefers-reduced-motion` is set.

## Project Structure

- `src/data/index.js`: all content (about, experience, education, projects, skills, contact). Edit this file to update the site.
- `src/index.css`: design tokens (colors for light and dark, type scale, spacing, radii, motion) and shared styles.
- `src/components/`: one folder per section (Header, Hero, Experience, Projects, ProjectRow, Skills, Contact, Footer).
- `src/hooks/useScrollReveal.js`: marks elements as they scroll into view; the reveal transitions live in `src/index.css`.
- `src/contexts/theme.jsx`: theme handling.
- `public/`: the CV (`Alexandru_Balta_Resume.pdf`) and project screenshots in `public/img/projects/` (WebP, two sizes each, cropped to 4:3).

To show a "Live site" button for a project, set its `livePreview` URL in `src/data/index.js`. A project's `frame` sets its two gradient colours.

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
