import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faKey } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import local from "../helpers/local";

export default function Login() {
  let gitLogin = () => {
    let data = local.get("/login");
  };
  return (
    <div
      className="modal fade"
      id="Login"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="Login"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="container">
          <div className="d-flex justify-content-center h-100">
            <div className="card login-card modal-content">
              <div className="card-header">
                <h3>Sign in</h3>
                <div className="d-flex justify-content-end social_icon">
                  <span onClick={gitLogin}>
                    <FontAwesomeIcon icon={faGithub} />
                  </span>
                </div>
              </div>
              <div className="card-body">
                <form>
                  <div className="input-group form-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <FontAwesomeIcon icon={faUser} />
                      </span>
                    </div>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                    />
                  </div>
                  <div className="input-group form-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <FontAwesomeIcon icon={faKey} />
                      </span>
                    </div>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password"
                      autoComplete="true"
                    />
                  </div>
                  <div className="row align-items-center remember">
                    <input type="checkbox" />
                    Remember Me
                  </div>
                  <div className="form-group">
                    <input
                      type="submit"
                      value="Login"
                      className="float-right submit_btn"
                    />
                  </div>
                </form>
              </div>
              <div className="card-footer">
                <div className="d-flex justify-content-center links">
                  Don't have an account?<a href="#">Sign up!</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
