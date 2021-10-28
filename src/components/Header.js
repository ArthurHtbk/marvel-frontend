import { Link, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import marvelLogo from "../images/logo-marvel.png";

const Header = ({ userToken, setUser }) => {
  const [showLinks, setShowLinks] = useState(false);

  const history = useHistory();

  useEffect(() => {
    const handleLinks = () => {
      console.log(showLinks);
    };
    handleLinks();
  }, [showLinks]);

  return (
    <header>
      <nav className="navbar">
        <Link className="logo" to="/">
          <img src={marvelLogo} alt="Marvel logo" />
        </Link>
        <div className="links-area">
          {userToken ? (
            <div>
              <div
                className="hamburger"
                onClick={() => {
                  setShowLinks(!showLinks);
                }}
              >
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
              </div>
              <ul className="navbar-links" id={showLinks ? "displayed" : ""}>
                <li>
                  <Link to="/comics" className="link-item">
                    Comics
                  </Link>
                </li>
                <li>
                  <Link to="/characters" className="link-item">
                    Characters
                  </Link>
                </li>
                <li>
                  <Link to="/favorites" className="link-item">
                    Favorites
                  </Link>
                </li>
                <li>
                  <span
                    onClick={() => {
                      setUser(null);
                      history.push("/");
                    }}
                    className="link-item"
                  >
                    Log Out
                  </span>
                </li>
              </ul>
            </div>
          ) : (
            <div>
              <div
                className="hamburger"
                onClick={() => {
                  setShowLinks(!showLinks);
                }}
              >
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
              </div>
              <ul className="navbar-links" id={showLinks ? "displayed" : ""}>
                <li>
                  <Link to="/comics" className="link-item">
                    Comics
                  </Link>
                </li>
                <li>
                  <Link to="/characters" className="link-item">
                    Characters
                  </Link>
                </li>
                <li>
                  <Link to="/signup" className="link-item">
                    Sign Up
                  </Link>
                </li>
                <li>
                  <Link to="/login" className="link-item">
                    Log In
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
