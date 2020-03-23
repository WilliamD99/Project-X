//React Component
import React, { Component } from "react";
import { Navbar, Nav, Modal, Icon } from "rsuite";
import { Link } from "react-router-dom";
import Login from "./Login"
import Identity from "./Identity";
//Will's headshot
import shot from "../../assets/About/Nam_Doan_WD.jpg";

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
  open = () => {
    this.setState({ showLog: true });
  };
  openAbout = () => {
    this.setState({ showAbout: true });
  };
  closeAbout = () => {
    this.setState({ showAbout: false });
  };
  login = () => {
    // Change location to /login server route while sending a redirect url 
    // If user is coming from a page different than /, get the page they
    // are coming from, otherwise redirect to / after login
    // const { from } = this.props.location.state || { from: { pathname: '/' } };
    // const url = `${window.location.protocol}//${window.location.host}${from.pathname}`
    window.location = `http://localhost:5000/login/`;
  }
  render() {
    let content;
    if (this.props.user === "") {
      content = <Login />
    } else {
      content = <Identity user={this.props.user} />
    }
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
                      <p className="text-left mt-1">
                        <strong>Bio: </strong>
                        <br />
                        Just a typical Asian guy, who love playing basketball and traveling the world, and turning coffee into code. Trying hard to be a full stack developer!!
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
            {content}
          </Nav>
        </Navbar.Body>
      </Navbar>
    );
  }
}
