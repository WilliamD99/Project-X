import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faKey, faCheck } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function SignUp() {
  return (
    <div
      className="modal fade"
      id="SignUp"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="SignUp"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="container">
          <div className="d-flex justify-content-center h-100">
            <div className="card signup-card modal-content">
              <div className="card-header">
                <h3>Sign Up</h3>
                <div className="d-flex justify-content-end social_icon">
                  <span>
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
                    />
                  </div>
                  <div className="input-group form-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <FontAwesomeIcon icon={faCheck} />
                      </span>
                    </div>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Confirm password"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="submit"
                      value="Sign Up"
                      className="float-right submit_btn"
                    />
                  </div>
                  <div className="form-group">
                    <button className="float-right submit_btn">Cancel</button>
                  </div>
                </form>
              </div>
              <div className="card-footer">
                <div className="d-flex justify-content-center links">
                  Already have an account?<a href="#">Sign in</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
