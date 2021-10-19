import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";
import Cookies from "js-cookie";
import Home from "./containers/Home";
import Comics from "./containers/Comics";
import Characters from "./containers/Characters";
import CharacterId from "./containers/CharacterId";
import SignUp from "./containers/SignUp";
import LogIn from "./containers/LogIn";
import Favorites from "./containers/Favorites";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch, faHeart } from "@fortawesome/free-solid-svg-icons";
library.add(faSearch, faHeart);

function App() {
  const [userToken, setUserToken] = useState(Cookies.get("userToken") || null);

  const setUser = (token) => {
    if (token) {
      Cookies.set("userToken", token, {
        expires: 30,
        sameSite: "none",
        secure: true,
      });
      setUserToken(token);
    } else {
      Cookies.remove("userToken");
      setUserToken(null);
    }
  };

  return (
    <Router>
      <Header userToken={userToken} setUser={setUser} />
      <Switch>
        <Route path="/signup">
          <SignUp setUser={setUser} />
        </Route>
        <Route path="/login">
          <LogIn setUser={setUser} />
        </Route>
        <Route path="/comics/:characterId">
          <CharacterId userToken={userToken} />
        </Route>
        <Route path="/comics">
          <Comics userToken={userToken} />
        </Route>
        <Route path="/characters">
          <Characters userToken={userToken} />
        </Route>
        <Route path="/favorites">
          <Favorites userToken={userToken} />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
