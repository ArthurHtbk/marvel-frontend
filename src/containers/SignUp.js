import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import axios from "axios";

const SignUp = ({ setUser }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [picture, setPicture] = useState();
  const [errorMessage, setErrorMessage] = useState("");

  const history = useHistory();

  useEffect(() => {
    const handleConfirmPassword = () => {
      if (confirmPassword !== password && confirmPassword) {
        setErrorMessage("Please make sure both passwords are matching");
      } else {
        setErrorMessage("");
      }
    };
    handleConfirmPassword();
  }, [password, confirmPassword, setErrorMessage]);

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const formData = new FormData();

      formData.append("username", username);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("picture", picture);

      const response = await axios.post(
        "https://marvel-backend-arthur.herokuapp.com/user/signup",
        formData
      );

      if (response.data.token) {
        setUser(response.data.token);
        history.push("/");
      }
    } catch (error) {
      if (error.response.status === 409) {
        setErrorMessage(
          "An account has already been created with this email address"
        );
      }
    }
  };

  return (
    <div>
      <form className="user-form" onSubmit={handleSubmit}>
        <h2>Sign up</h2>
        <label className="lbl" htmlFor="username">
          Username:
        </label>
        <br />
        <input
          type="text"
          placeholder="Natacha Romanoff"
          id="username"
          name="username"
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />{" "}
        <br />
        <label className="lbl" htmlFor="su-email">
          Email address:
        </label>
        <br />
        <input
          type="email"
          placeholder="nick.fury@shield.com"
          id="su-email"
          name="su-email"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />{" "}
        <br />
        <label className="lbl" htmlFor="su-password">
          Password:
        </label>
        <br />
        <input
          type="password"
          placeholder="WARMACHINEROX"
          id="su-password"
          name="su-password"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />{" "}
        <br />
        <label className="lbl" htmlFor="confirm-password">
          Confirm password:
        </label>
        <br />
        <input
          type="password"
          placeholder="WARMACHINEROX"
          id="confirm-password"
          name="confirm-password"
          onChange={(event) => {
            setConfirmPassword(event.target.value);
          }}
        />{" "}
        <br />
        <label className="lbl" htmlFor="choose-picture">
          Choose profile picture:
        </label>
        <input
          type="file"
          name="choose-picture"
          id="choose-picture"
          onChange={(event) => {
            setPicture(event.target.files[0]);
          }}
        />
        <div>
          {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        </div>
        <button
          type="submit"
          disabled={errorMessage}
          style={{ cursor: errorMessage ? "not-allowed" : "pointer" }}
        >
          Submit
        </button>
        <Link to="/login">Already have an account? Log in!</Link>
      </form>
    </div>
  );
};

export default SignUp;
