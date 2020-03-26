import React, { Component } from 'react';
import axios from 'axios';

class AuthButton extends Component {
    state = {
        isAuthenticated: false,
        user: null
    }
    componentDidMount() {
        // Check auth
        axios
            .get(`http://localhost:5000/check-auth`, { withCredentials: true })
            .then(res => {
                this.setState({
                    isAuthenticated: true,
                    user: res.data
                });
                this.props.getUser(this.state.user)
            })
            .catch(() => {
                this.setState({
                    isAuthenticated: false
                });
            });
    }
    signOut = () => {
        // Change location to /logout server route while passing it
        // the URL for redirecting back to a client
        const url = `${window.location.protocol}//${window.location.host}`;
        window.location = `http://localhost:5000/logout?from=${url}`;
    }
    render() {
        // Display user name and sign out button for logged in user
        // or a "not logged in" message
        return (
            null
        )
    }
}
export default AuthButton;