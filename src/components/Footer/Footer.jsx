import { ArrowUpIcon } from "../Icons/Icons.jsx";
import "./footer.css";

const Footer = () => (
  <footer className="footer">
    <div className="footer__bar" data-rv="up">
      <a href="https://github.com/kerBiy/web-portfolio" className="footer__link">
        © {new Date().getFullYear()} Alexandru Balta
      </a>
      <a href="#top" className="ico" aria-label="Back to top">
        <ArrowUpIcon />
      </a>
    </div>
  </footer>
);

export default Footer;
