import { Link } from "react-router-dom";
import marvelLogo from "../images/logo-marvel.png";

const Header = () => {
  return (
    <header>
      <div className="header-top">
        <Link className="logo" to="/">
          <img src={marvelLogo} alt="Marvel logo" />
        </Link>
      </div>
      <div className="header-bottom">
        <div className="split">
          <Link className="header-link" to="/comics">
            COMICS
          </Link>
        </div>
        <div className="split">
          <Link className="header-link" to="/characters">
            CHARACTERS
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
