import React from "react";
import "bootstrap";
import About from "./About";

export default function Nav() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <a className="navbar-brand text-light title" href="#">
          Git Projects
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link text-light" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-light"
                href="#"
                data-toggle="modal"
                data-target="#About"
              >
                About
              </a>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className="nav-link text-light login "
                data-toggle="modal"
                data-target="#Login"
                href="#"
              >
                Login
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-light signup"
                href="#"
                data-toggle="modal"
                data-target="#SignUp"
              >
                Sign Up
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <About />
    </>
  );
}
