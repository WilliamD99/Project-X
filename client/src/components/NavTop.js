import React, { Component } from "react";
import { Navbar, Nav, Modal, Icon } from "rsuite";
import shot from "../assets/About/Nam_Doan_WD.jpg";
import { Link } from "react-router-dom";
import Login from "./Login"
import Identity from "./Identity";

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
  identity = () => {
    if (this.props.user === "") {
      return <Login />
    }
  }
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
            {() => {
              console.log(this.props.user)
              if (this.props.user === "") {
                console.log(this.props.user)
                return <Login />
              }
            }}
          </Nav>
        </Navbar.Body>
      </Navbar>
    );
  }
}
