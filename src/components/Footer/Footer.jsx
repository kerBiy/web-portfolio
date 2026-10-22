import "./footer.css";

const Footer = () => (
  <footer className="footer">
    <a href="https://github.com/kerBiy/web-portfolio" className="link footer__link">
      © {new Date().getFullYear()} Alexandru Balta
    </a>
  </footer>
);

export default Footer;
