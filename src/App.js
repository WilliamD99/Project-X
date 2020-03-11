import React from "react";
import Particles from "react-particles-js";
import config from "./helpers/config";
import "./styles/main.css";
import Nav from "./components/Nav";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
function App() {
  return (
    <>
      <Nav />
      <Login />
      <SignUp />
      <Particles className="background" params={config} />
    </>
  );
}

export default App;
