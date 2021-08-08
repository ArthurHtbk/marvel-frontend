import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./containers/Home";
import Comics from "./containers/Comics";
import Characters from "./containers/Characters";
import CharacterId from "./containers/CharacterId";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
library.add(faSearch);

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/comics/:characterId">
          <CharacterId />
        </Route>
        <Route path="/comics">
          <Comics />
        </Route>
        <Route path="/characters">
          <Characters />
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
