import Navbar from "../Navbar/Navbar.jsx";
import { header } from "../../data";
import "./header.css";

const Header = () => {
  const { homepage, title } = header;

  return (
    <header className="header center">
      <a href={homepage || "#top"} className="link logo heading-text" aria-label="Alexandru Balta, home">
        {title}
      </a>
      <Navbar />
    </header>
  );
};

export default Header;
