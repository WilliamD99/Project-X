import React, { Component } from "react";
import { Sidenav, Icon, Nav } from "rsuite";
import { Link } from "react-router-dom";

export default class MenuLeft extends Component {
  state = {
    option: "trending"
  };
  onSelect = event => {
    let target = event.target;
    this.setState({
      option: target.name
    });
    let option = target.name;
    this.props.option(option);
  };
  render() {
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
                  onClick={this.onSelect}
                  componentClass="div"
                >
                  Top Projects
                </Nav.Item>
              </Link>
              <Link to="/users">
                <Nav.Item
                  eventKey="4"
                  icon={<Icon icon="avatar" />}
                  name="users"
                  onClick={this.onSelect}
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
                  onClick={this.onSelect}
                  componentClass="div"
                >
                  Weird Projects
                </Nav.Item>
              </Link>
            </Nav>
          </Sidenav.Body>
        </Sidenav>
      </div>
    );
  }
}
