import React, { Component } from 'react'
import { Nav, Icon } from "rsuite"

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
            <Nav.Item className="logged">
                <p className="git" onClick={this.login}><Icon icon="github" className="git-login mr-2" />Login</p>
            </Nav.Item>
        )
    }
}
