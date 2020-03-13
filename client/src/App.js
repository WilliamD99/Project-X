import React from "react";
import Particles from "react-particles-js";
import config from "./helpers/config";
import "./styles/main.css";
import Nav from "./components/NavTop";
import Content from "./components/Content";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Nav />
      <Particles className="background" params={config} />
      <Switch>
        <Redirect from="home" to="/" />
        <Route path="/" component={Content} />
      </Switch>
    </Router>
  );
}

export default App;
