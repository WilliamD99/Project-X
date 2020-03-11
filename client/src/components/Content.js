import React, { Component } from "react";
import Main from "./Main";
import trending from "../helpers/trending";

export default class Content extends Component {
  state = {
    since: "daily",
    data: null
  };
  handleChange = event => {
    event.preventDefault();
    const target = event.target;
    this.setState({
      since: target.value
    });
  };
  async componentDidMount() {
    let dataObject = await trending.get("/", {
      since: this.state.since
    });
    let data = dataObject.data;
    this.setState({
      data: data
    });
  }

  render() {
    if (this.state.data === null) {
      return <h1>Loading</h1>;
    } else {
      return (
        <>
          <ul className="nav justify-content-center" id="menu">
            <li className="nav-item">
              <div className="form-group">
                <select className="form-control" onChange={this.handleChange}>
                  <option>Trending</option>
                  <option>Daily</option>
                  <option>Weekly</option>
                  <option>Monthly</option>
                </select>
              </div>
            </li>
            <li className="nav-item">
              <p className="nav-link">Link</p>
            </li>
            <li className="nav-item">
              <p className="nav-link">Link</p>
            </li>
          </ul>
          <Main data={this.state.data} />
        </>
      );
    }
  }
}
