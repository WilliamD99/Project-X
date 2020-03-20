import React, { Component } from 'react'
import { Nav, Modal, Icon } from "rsuite"

export default class Login extends Component {
    state = {
        size: "md"
    }
    close = () => {
        this.setState({ showLog: false });
    };
    open = () => {
        this.setState({ showLog: true });
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
        return (
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
                                    Don't have an account?<p className="git" onClick={this.login}>Sign up!</p>
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
        )
    }
}
