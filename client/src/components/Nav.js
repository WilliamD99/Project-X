import React from "react";
import About from "./About";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBook,
  faSignInAlt,
  faUserPlus
} from "@fortawesome/free-solid-svg-icons";

export default function Nav() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <a className="navbar-brand text-light title">Git Projects</a>
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
              <a className="nav-link text-light">
                Home <span className="sr-only">(current)</span>
                <FontAwesomeIcon icon={faHome} />
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-light"
                data-toggle="modal"
                data-target="#About"
              >
                About
                <FontAwesomeIcon icon={faBook} />
              </a>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <div
                className="nav-link text-light login "
                data-toggle="modal"
                data-target="#Login"
              >
                Login
                <FontAwesomeIcon icon={faSignInAlt} />
              </div>
            </li>
            <li className="nav-item">
              <div
                className="nav-link text-light signup"
                data-toggle="modal"
                data-target="#SignUp"
              >
                Sign Up
                <FontAwesomeIcon icon={faUserPlus} />
              </div>
            </li>
          </ul>
        </div>
      </nav>
      <About />
    </>
  );
}
