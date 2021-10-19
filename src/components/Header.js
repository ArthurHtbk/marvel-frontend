import { Link } from "react-router-dom";
import marvelLogo from "../images/logo-marvel.png";

const Header = ({ userToken, setUser }) => {
  return (
    <header>
      <div className="header-top">
        <Link className="logo" to="/">
          <img src={marvelLogo} alt="Marvel logo" />
        </Link>
        <div className="user-area">
          {userToken ? (
            <div>
              <button className="fav-button" type="button">
                <Link to="/favorites">FAVORITES</Link>
              </button>
              <button
                type="button"
                onClick={() => {
                  setUser(null);
                }}
              >
                LOG OUT
              </button>
            </div>
          ) : (
            <div>
              <Link className="header-link connect" to="/signup">
                Sign up
              </Link>
              <Link className="header-link connect" to="/login">
                Log in
              </Link>
            </div>
          )}
        </div>
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
