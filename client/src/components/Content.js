import React, { Component } from "react";
import Main from "./Trending";
import trending from "../helpers/trending";
import chunk from "../helpers/sliceData";

export default class Content extends Component {
  state = {
    trending: null,
    frequent: "daily",
    page: 0,
    page_max: 0
  };
  langArr = () => {
    let arr = [
      "Javascript",
      "Java",
      "C",
      "C#",
      "C++",
      "Python",
      "Swift",
      "Rust",
      "Go"
    ];
    let options = arr.map((lang, index) => <option key={index}>{lang}</option>);
    return options;
  };
  handleChange = event => {
    event.preventDefault();
    const target = event.target;
    console.log(target.value);
    if (target.value === "None") {
      this.setState({
        [target.name]: ""
      });
    } else {
      this.setState({
        [target.name]: target.value.toLowerCase()
      });
    }
  };
  async componentDidMount() {
    let dataObject = await trending.get(`?since=${this.state.since}`);
    let data = dataObject.data;
    let dataSliced = chunk(data, 10);
    this.setState({
      trending: dataSliced[0],
      page_max: dataSliced.length
    });
  }
  async componentDidUpdate(prevProps, prevState) {
    if (
      this.state.frequent !== prevState.frequent ||
      this.state.language !== prevState.langugage
    ) {
      let dataObject = await trending.get(
        `?since=${this.state.frequent}&language=${this.state.language}`
      );
      let data = dataObject.data;
      let dataSliced = chunk(data, 10);
      this.setState({
        trending: dataSliced[0],
        dataSliced: dataSliced.length
      });
    }
  }
  render() {
    if (this.state.trending === null) {
      return <h1>Loading</h1>;
    } else {
      return (
        <>
          <ul className="nav justify-content-center" id="menu">
            <li className="nav-item">
              <div className="form-group">
                <select
                  className="form-control"
                  name="frequent"
                  onChange={this.handleChange}
                >
                  <option>Frequent</option>
                  <option>Daily</option>
                  <option>Weekly</option>
                  <option>Monthly</option>
                </select>
              </div>
            </li>
            <li className="nav-item">
              <div className="form-group">
                <select
                  className="form-control"
                  name="language"
                  onChange={this.handleChange}
                >
                  <option>None</option>
                  {this.langArr()}
                </select>
              </div>
            </li>
            <li className="nav-item">
              <p className="nav-link">Link</p>
            </li>
          </ul>
          <Main data={this.state.trending} />
        </>
      );
    }
  }
}
