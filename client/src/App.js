import React from "react";
import Particles from "react-particles-js";
import config from "./helpers/config";
import "./styles/main.css";
import Nav from "./components/Nav";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
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
      <Login />
      <SignUp />
      <Particles className="background" params={config} />
      <Switch>
        <Redirect from="home" to="/" />
        <Route path="/" component={Content} />
      </Switch>
    </Router>
  );
}

export default App;
