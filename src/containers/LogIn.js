import { useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import axios from "axios";

const LogIn = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const history = useHistory();

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const response = await axios.post(
        "https://marvel-backend-arthur.herokuapp.com/user/login",
        { email: email, password: password }
      );
      if (response.data.token) {
        setUser(response.data.token);
        history.push("/");
      }
    } catch (error) {
      if (error.response.status === 401) {
        setErrorMessage("Incorrect email address and / or password");
      }
    }
  };

  return (
    <div>
      <form className="user-form" onSubmit={handleSubmit}>
        <h2>Log in</h2>
        <label className="lbl" htmlFor="li-email">
          Email address:
        </label>{" "}
        <br />
        <input
          type="email"
          name="li-email"
          id="li-email"
          placeholder="nick.fury@shield.com"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />{" "}
        <br />
        <label className="lbl" htmlFor="li-password">
          Password:
        </label>{" "}
        <br />
        <input
          type="password"
          name="li-password"
          id="li-password"
          placeholder="WARMACHINEROX"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />{" "}
        <br />
        <div>
          {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        </div>
        <button type="submit">Submit</button>
        <Link to="/signup">Don't have an account yet? Sign up!</Link>
      </form>
    </div>
  );
};

export default LogIn;
