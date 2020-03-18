import React, { Component } from "react";
import { Navbar, Nav, Modal, Icon } from "rsuite";
import shot from "../assets/About/Nam_Doan_WD.jpg";
import { Link } from "react-router-dom";

export default class NavTop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showLog: false,
      showAbout: false
    };
  }
  close = () => {
    this.setState({ showLog: false });
  };
  open = size => {
    this.setState({ showLog: true });
  };
  openAbout = size => {
    this.setState({ showAbout: true });
  };
  closeAbout = () => {
    this.setState({ showAbout: false });
  };

  render() {
    return (
      <Navbar id="nav-top">
        <Navbar.Header>
          <p className="navbar-brand logo">
            Project-X
          </p>
        </Navbar.Header>
        <Navbar.Body>
          <Nav>
            <Nav.Item icon={<Icon icon="home" className="home" />} componentClass="div"><Link to="/">Home</Link></Nav.Item>
            <Nav.Item>
              <p onClick={() => this.openAbout("sm")}>About</p>
              <Modal
                size={this.state.size}
                show={this.state.showAbout}
                onHide={this.closeAbout}
                className="container"
                id="About"
              >
                <div className="modal-content">
                  <div className="modal-header">
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-hidden="true"
                    ></button>
                    <a href="https://github.com/WilliamD99" className="social-link"><Icon icon="github" className="social-icon" /></a>
                    <a href="https://www.linkedin.com/in/williamd99/" className="social-link"><Icon icon="linkedin" className="social-icon" /></a>
                  </div>
                  <div className="modal-body">
                    <center>
                      <img
                        src={shot}
                        name="aboutme"
                        width="140"
                        height="140"
                        border="0"
                        className="img-circle"
                        alt="Will's headshot"
                      />
                      <h3 className="media-heading">
                        Will Doan
                      </h3>
                      <h5 className="media-heading text-muted location">
                        Vancouver, Canada
                      </h5>
                      <span>
                        <strong>Skills: </strong>
                      </span>
                      <span className="badge badge-warning">HTML5/CSS</span>
                      <span className="badge badge-info">Javascript/React</span>
                      <span className="badge badge-danger">SAP/Syspro</span>
                      <span className="badge badge-warning">HTML5/CSS</span>
                      <span className="badge badge-success">ASP.Net Core</span>
                      <span className="badge badge-dark">Microsoft Office</span>
                    </center>
                    <center>
                      <p className="text-left">
                        <strong>Bio: </strong>
                        <br />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Ut sem dui, tempor sit amet commodo a, vulputate vel
                        tellus.
                      </p>
                    </center>
                  </div>
                  <div className="modal-footer">
                    <center>
                      <button
                        type="button"
                        className="btn btn-default"
                        data-dismiss="modal"
                        onClick={this.closeAbout}
                      >
                        Close <Icon icon="close-circle" />
                      </button>
                    </center>
                  </div>
                </div>
              </Modal>
            </Nav.Item>
          </Nav>
          <Nav pullRight>
            <Nav.Item>
              <p size="sm" onClick={() => this.open("sm")}>
                Login
              </p>
              <Modal
                size={this.state.size}
                show={this.state.showLog}
                onHide={this.close}
                className="container"
                id="login"
              >
                <div className="d-flex justify-content-center h-100">
                  <div className="card login-card modal-content">
                    <div className="card-header">
                      <h3>Sign in</h3>
                    </div>
                    <div className="card-body">
                      <form>
                        <div className="input-group form-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text">
                              <Icon icon="user" />
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
                              <Icon icon="key"></Icon>
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
                {/* <Button onClick={this.close} appearance="primary">
                  Ok
                </Button>
                <Button onClick={this.close} appearance="subtle">
                  Cancel
                </Button> */}
              </Modal>
            </Nav.Item>
          </Nav>
        </Navbar.Body>
      </Navbar>
    );
  }
}
