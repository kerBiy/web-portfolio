import Navbar from "../Navbar/Navbar.jsx";
import { header } from "../../data";
import "./header.css";

const Header = () => {
  const { homepage, title } = header;

  return (
    <header className="header center">
      <h3 className="logo heading-text">
        {homepage ? (
          <a href={homepage} className="link">
            {title}
          </a>
        ) : (
          title
        )}
      </h3>
      <Navbar />
    </header>
  );
};

export default Header;
