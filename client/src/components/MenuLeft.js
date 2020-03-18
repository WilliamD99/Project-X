import React, { Component } from "react";
import { Sidenav, Icon, Nav, Dropdown } from "rsuite";
import { Link } from "react-router-dom";

export default class MenuLeft extends Component {
  state = {
    option: "trend"
  };
  onSelect = event => {
    let target = event.target;
    let option = target.name;
    console.log(target);
    this.setState({
      option: option
    });
    this.props.option(option);
  };
  render() {
    let setting;
    if (this.state.option === "trend") {
      setting = (
        <Dropdown
          eventKey="6"
          title="Settings"
          icon={<Icon icon="gear-circle" />}
        >
          <Dropdown.Item eventKey="6-1">Applications</Dropdown.Item>
          <Dropdown.Item eventKey="6-2">Channels</Dropdown.Item>
          <Dropdown.Item eventKey="6-3">Versions</Dropdown.Item>
          <Dropdown.Menu eventKey="6-5" title="Custom Action">
            <Dropdown.Item eventKey="6-5-1">Action Name</Dropdown.Item>
            <Dropdown.Item eventKey="6-5-2">Action Params</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      );
    }
    return (
      <div style={{ width: 250 }} id="menu-left">
        <Sidenav defaultOpenKeys={["3", "4"]} activeKey="1">
          <Sidenav.Body>
            <Nav>
              <Nav.Item eventKey="1" icon={<Icon icon="list" />}>
                Menu
              </Nav.Item>
              <Link to="/trend">
                <Nav.Item
                  eventKey="2"
                  icon={<Icon icon="trend" />}
                  onClick={this.onSelect}
                  name="trend"
                  href="/trend"
                  componentClass="div"
                >
                  Trending
                </Nav.Item>
              </Link>
              <Link to="/top">
                <Nav.Item
                  eventKey="3"
                  icon={<Icon icon="star" />}
                  name="top"
                  componentClass="div"
                  onClick={this.onSelect}
                >
                  Top Projects
                </Nav.Item>
              </Link>
              <Link to="/users">
                <Nav.Item
                  eventKey="4"
                  icon={<Icon icon="avatar" />}
                  name="users"
                  componentClass="div"
                >
                  Users
                </Nav.Item>
              </Link>
              <Link to="/weird">
                <Nav.Item
                  eventKey="5"
                  icon={<Icon icon="question2" />}
                  name="weird"
                  componentClass="div"
                >
                  Weird Projects
                </Nav.Item>
              </Link>
              {setting}
            </Nav>
          </Sidenav.Body>
        </Sidenav>
      </div>
    );
  }
}
