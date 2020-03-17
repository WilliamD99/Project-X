//Import libraries
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Switch, Route, Redirect } from "react-router-dom";

//Import Components
import Trending from "./Trending";
import MenuLeft from "./MenuLeft";
import Top from "./Top";
import Developers from "./Developers";
import Weird from "./Weird";

//Axios Call
import local from "../helpers/local";
import { trend, git } from "../helpers/gitAPI";

//Import helper function
import chunk from "../helpers/sliceData";

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
    let topObject = git.get("repositories?q=stars:>1");
    topObject.then(res => {
      this.processTop(res);
    });
    let trendingObject = trend.get(`repositories?since=${this.state.frequent}`);
    trendingObject.then(res => {
      this.processData(res);
    });
    let weirdObject = local.get("/weird");
    weirdObject.then(res => {
      let data = res.data;
      this.setState({
        weird: data
      })
    })
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
  requestPage = val => {
    this.setState({
      option: val
    });
  };
  trendingFreq = freq => {
    this.setState({
      frequent: freq
    });
  };
  trendingLang = lang => {
    this.setState({
      language: lang
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
          <MenuLeft option={this.requestPage} />
          <Developers />
          <Switch>
            <Redirect from="/trend" to="/" />
            <Route
              exact
              path="/"
              render={() => (
                <Trending
                  data={this.state.trend[this.state.page]}
                  freq={this.trendingFreq}
                  lang={this.trendingLang}
                />
              )}
            ></Route>
            <Route
              path="/top"
              render={() => <Top data={this.state.top[this.state.page]} />}
            />
            <Route path="/weird" render={() => <Weird data={this.state.weird} />} />
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
