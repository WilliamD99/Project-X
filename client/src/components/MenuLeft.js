import React, { Component } from "react";
import { Sidenav, Icon, Nav, Dropdown } from "rsuite";
import { Link } from "react-router-dom";

export default class MenuLeft extends Component {
  state = {
    option: null
  };
  onSelect = event => {
    let target = event.target;
    let value = Object.values(target);
    let option = value[1].name
    this.setState({
      option: option
    });
  };
  //Setting options for Trending Component
  trendingFreq = event => {
    let target = event.target;
    this.props.freq(target.name)
  }
  trendingLang = event => {
    let target = event.target;
    this.props.lang(target.name)
  }
  render() {
    let setting;
    if (this.state.option === "trend") {
      setting = (
        <Dropdown
          eventKey="6"
          title="Settings"
          icon={<Icon icon="gear-circle" />}
        >
          <Dropdown.Menu eventKey="6-5" title="Frequent">
            <Dropdown.Item eventKey="6-5-1" name="daily" onClick={this.trendingFreq}>Daily</Dropdown.Item>
            <Dropdown.Item eventKey="6-5-2" name="weekly" onClick={this.trendingFreq}>Weekly</Dropdown.Item>
            <Dropdown.Item eventKey="6-5-2" name="monthly" onClick={this.trendingFreq}>Monthly</Dropdown.Item>
          </Dropdown.Menu>
          <Dropdown.Menu eventKey="6-6" title="Languages">
            <Dropdown.Item eventKey="6-6-1" name="" onClick={this.trendingLang}>All</Dropdown.Item>
            <Dropdown.Item eventKey="6-6-2" name="javascript" onClick={this.trendingLang}>Javascript</Dropdown.Item>
            <Dropdown.Item eventKey="6-6-3" name="c" onClick={this.trendingLang}>C</Dropdown.Item>
            <Dropdown.Item eventKey="6-6-4" name="c#" onClick={this.trendingLang}>C#</Dropdown.Item>
            <Dropdown.Item eventKey="6-6-5" name="c++" onClick={this.trendingLang}>C++</Dropdown.Item>
            <Dropdown.Item eventKey="6-6-6" name="python" onClick={this.trendingLang}>Python</Dropdown.Item>
            <Dropdown.Item eventKey="6-6-7" name="swift" onClick={this.trendingLang}>Swift</Dropdown.Item>
            <Dropdown.Item eventKey="6-6-8" name="rust" onClick={this.trendingLang}>Rust</Dropdown.Item>
            <Dropdown.Item eventKey="6-6-9" name="go" onClick={this.trendingLang}>Go</Dropdown.Item>
            <Dropdown.Item eventKey="6-6-10" name="react" onClick={this.trendingLang}>React</Dropdown.Item>
            <Dropdown.Item eventKey="6-6-11" name="vue" onClick={this.trendingLang}>Vue</Dropdown.Item>
            <Dropdown.Item eventKey="6-6-12" name="java" onClick={this.trendingLang}>Java</Dropdown.Item>
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
              <Link to="/topics">
                <Nav.Item
                  eventKey="4"
                  icon={<Icon icon="book2" />}
                  name="users"
                  componentClass="div"
                >
                  Topics
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
