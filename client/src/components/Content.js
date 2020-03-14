import React, { Component } from "react";
import Trending from "./Trending";
import MenuLeft from "./MenuLeft";
import Top from "./Top";
import { trend, top } from "../helpers/gitAPI";
import chunk from "../helpers/sliceData";
import { Link } from "react-router-dom";
import Developers from "./Developers";
import { Switch, Route, Redirect } from "react-router-dom";

export default class Content extends Component {
  state = {
    option: "trend",
    frequent: "daily",
    language: "",
    page: 0,
    page_max: 0
  };
  //Init page buttons
  pageNum = num => {
    let numberOfPage = [];
    for (let i = 1; i <= num; i++) {
      let page = (
        <Link
          to={`/page-${i}`}
          className="page-link pagination"
          id="pagination"
          onClick={this.handlePage}
          key={i}
        >
          {i}
        </Link>
      );
      numberOfPage.push(page);
    }
    return numberOfPage;
  };
  //Init language selections
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
      "Go",
      "React",
      "Vue"
    ];
    let options = arr.map((lang, index) => <option key={index}>{lang}</option>);
    return options;
  };
  //Handle change event function
  handleChange = event => {
    event.preventDefault();
    const target = event.target;
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
  //Handle page
  handlePage = event => {
    const target = event.target;
    if (target.classList.value.indexOf("pagination") === -1) {
      target.classList.add("pagination");
    } else {
      target.classList.remove("pagination");
    }
    this.setState({
      page: parseInt(target.innerHTML) - 1
    });
  };
  processData = obj => {
    let data = obj.data;
    let dataSliced = chunk(data, 10);
    this.setState({
      trend: dataSliced,
      page_max: dataSliced.length
    });
  };
  processTop = obj => {
    let data = obj.data.items;
    let dataSliced = chunk(data, 10);
    this.setState({
      top: dataSliced
    });
  };
  componentDidMount() {
    let topObject = top.get("repositories?q=stars:>1");
    topObject.then(res => {
      this.processTop(res);
    });
    let trendingObject = trend.get(`repositories?since=${this.state.frequent}`);
    trendingObject.then(res => {
      this.processData(res);
    });
  }
  async componentDidUpdate(prevProps, prevState) {
    if (
      this.state.language !== prevState.language ||
      this.state.frequent !== prevState.frequent
    ) {
      let trendingObject = await trend.get(
        `repositories?language=${this.state.language}&since=${this.state.frequent}`
      );
      this.processData(trendingObject);
    }
  }
  pass = val => {
    this.setState({
      option: val
    });
  };
  pagination = val => {
    this.setState({
      page_max: val
    });
  };
  render() {
    if (this.state.trend === undefined || this.state.top === undefined) {
      return <h1>Loading</h1>;
    } else {
      return (
        <>
          <MenuLeft option={this.pass} />
          <Developers />
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
          <Switch>
            <Redirect from="/trend" to="/" />
            <Route
              exact
              path="/"
              render={() => (
                <Trending data={this.state.trend[this.state.page]} />
              )}
            ></Route>
            <Route
              path="/top"
              render={() => <Top data={this.state.top[this.state.page]} />}
            />
          </Switch>
          <nav>
            <ul className="pagination justify-content-center">
              <li className="page-item">
                <a
                  className="page-link"
                  aria-label="Previous"
                  href="https://www.google.com"
                >
                  <span aria-hidden="true">«</span>
                  <span className="sr-only">Previous</span>
                </a>
              </li>
              {this.pageNum(this.state.page_max)}
              <li className="page-item">
                <a
                  className="page-link"
                  aria-label="Next"
                  href="https://www.google.com"
                >
                  <span aria-hidden="true">»</span>
                  <span className="sr-only">Next</span>
                </a>
              </li>
            </ul>
          </nav>
        </>
      );
    }
  }
}
