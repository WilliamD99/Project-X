import React from 'react'
import { Navbar, Dropdown } from "rsuite"

export default function Identity({ user }) {
    let signOut = () => {
        // Change location to /logout server route while passing it
        // the URL for redirecting back to a client
        const url = `${window.location.protocol}//${window.location.host}`;
        window.location = `http://localhost:5000/logout?from=${url}`;
    }
    return (
        <>
            <Navbar.Header className="media mr-5">
                <Dropdown>
                    <Dropdown.Item panel className="account">
                        <p>Signed in as</p>
                        <strong>{user.username}</strong>
                    </Dropdown.Item>
                    <Dropdown.Item divider />
                    <Dropdown.Item panel className="account">
                        <a id="profile" href={user.profileUrl}>Your profile</a>
                    </Dropdown.Item>
                    <Dropdown.Item panel className="account" ><p id="signout" onClick={signOut}>Sign out</p></Dropdown.Item>
                </Dropdown>
                <a href={user.profileUrl}><img className="rounded-circle avatar" src={user.photos[0].value} alt="user avatar" /></a>
            </Navbar.Header>

        </>
    )
}
