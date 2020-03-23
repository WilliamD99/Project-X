//Import React Component
import React, { Component } from "react";
import Nav from "./components/NavTop/NavTop";
import Content from "./components/Content";
import AuthButton from "./components/Login/AuthButton";
import PrivateRoute from "./components/Login/PrivateRoute"
import ProtectedPage from "./components/Login/ProtectedPage"
import Particles from "react-particles-js";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

//Config for background
import config from "./helpers/config";

//Style
import "./styles/main.css";

class App extends Component {
  state = {
    user: ""
  }
  getUser = data => {
    this.setState({
      user: data
    })
  }
  render() {
    return (
      <Router>
        <AuthButton getUser={this.getUser} />
        <Nav user={this.state.user} />
        <Particles className="background" params={config} />
        <Switch>
          <Redirect from="home" to="/" />
          <Route path="/" render={() => (
            <Content
              data={this.state.user.photos}
            />)} />
          <PrivateRoute path="/protected" component={ProtectedPage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
