//Import libraries
import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

//Import Components
import Trending from "./Trending";
import MenuLeft from "./MenuLeft";
import Top from "./Top";
import Developers from "./Developers";
import Weird from "./Weird";
import Topic from "./Topic";
import Save from "./Save";

//Axios Call
import local from "../helpers/local";
import { trend, git } from "../helpers/gitAPI";

//Import helper function
import chunk from "../helpers/sliceData";

export default class Content extends Component {
  state = {
    option: "trend",
    frequent: "daily", //Default for Trending
    language: "", //Default for Trending
    page: 0,
    page_max: 0,
    dynamicSave: true
  };
  //Use this to allow ComponentDidUpdate
  reloadSave = () => {
    if (this.state.dynamicSave) {
      this.setState({
        dynamicSave: false
      })
    } else {
      this.setState({
        dynamicSave: true
      })
    }
  }
  processData = obj => {
    let data = obj.data;
    let dataSliced = chunk(data, 10);
    this.setState({
      trend: dataSliced
    });
  };
  processTop = obj => {
    let data = obj.data.items;
    let dataSliced = chunk(data, 10);
    this.setState({
      top: dataSliced
    });
  };
  //Setting for trending page
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
  //Pagination
  pagination = val => {
    this.setState({
      page: val
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
      let dataSliced = chunk(data, 10);
      this.setState({
        weird: dataSliced
      });
    });
    if (this.props.data !== undefined) {
      let dataObject = local.get(`/save/${this.props.id}`)
      dataObject.then(res => {
        let data = res.data[0].items;
        this.setState({
          save: data
        })
      })
    }
  }
  async componentDidUpdate(prevProps, prevState) {
    if (
      this.state.language !== prevState.language ||
      this.state.frequent !== prevState.frequent ||
      this.state.search !== prevState.search ||
      this.props.data !== prevProps.data ||
      this.state.dynamicSave !== prevState.dynamicSave
    ) {
      let trendingObject = await trend.get(
        `repositories?language=${this.state.language}&since=${this.state.frequent}`
      );
      this.processData(trendingObject);
      let dataObject = await local.get(`/save/${this.props.id}`)
      let data = dataObject.data[0].items;
      this.setState({
        save: data
      })
    }
  }
  render() {
    if (this.state.trend === undefined || this.state.top === undefined) {
      return <h1>Loading</h1>;
    } else {
      return (
        <>
          <MenuLeft page={this.state.option} freq={this.trendingFreq} lang={this.trendingLang} id={this.props.id} />
          <Developers />
          <Switch>
            <Redirect from="/trend" to="/" />
            <Route
              exact
              path="/"
              render={() => (
                <Trending
                  data={this.state.trend[this.state.page]}
                  length={this.state.trend.length}
                  pageControl={this.pagination}
                  ava={this.props.data}
                />
              )}
            ></Route>
            <Route
              path="/top"
              render={() => (
                <Top
                  data={this.state.top[this.state.page]}
                  length={this.state.top.length}
                  pageControl={this.pagination}
                  ava={this.props.data}
                  id={this.props.id}
                  reloadSave={this.reloadSave}
                />
              )}
            />
            <Route path="/topics" render={() => (
              <Topic
                pageControl={this.pagination}
                ava={this.props.data}
                page={this.state.page}
                id={this.props.id}
                reloadSave={this.reloadSave}
              />
            )} />
            <Route
              path="/weird"
              render={() => (
                <Weird
                  data={this.state.weird[this.state.page]}
                  length={this.state.weird.length}
                  ava={this.props.data}
                  id={this.props.id}
                  reloadSave={this.reloadSave}
                />
              )}
            />
            <Route
              path="/save"
              render={() => (
                <Save
                  data={this.state.save}
                  length={this.state.weird.length}
                  ava={this.props.data}
                />
              )}
            />
          </Switch>
        </>
      );
    }
  }
}
