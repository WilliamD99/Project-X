import React, { Component } from "react";
import Main from "./Trending";
import trending from "../helpers/trending";
import chunk from "../helpers/sliceData";

export default class Content extends Component {
  state = {
    frequent: "daily",
    page: 0,
  };
  //Init page buttons
  pageNum = num => {
    let numberOfPage = [];
    for (let i = 1; i <= num; i++) {
      let page = <li className="page-item" key={i}>
        <a className="page-link" onClick={this.handlePage}>{i}</a>
      </li>
      numberOfPage.push(page)
    };
    return numberOfPage;
  }
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
      "Go"
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
  handlePage = event => {
    const target = event.target;
    this.setState({
      page: parseInt(target.innerHTML) - 1
    })
  }

  async componentDidMount() {
    let dataObject = await trending.get(`?since=${this.state.since}`);
    let data = dataObject.data;
    console.log(data)
    let dataSliced = data.chunk(10);
    this.setState({
      trending: dataSliced
    });
  }
  async componentDidUpdate(prevProps, prevState) {
    if (
      this.state.frequent !== prevState.frequent ||
      this.state.language !== prevState.langugage || this.state.page !== prevState.page || this.state.page_max !== prevState.page_max) {
      let dataObject = await trending.get(
        `?since=${this.state.frequent}&language=${this.state.language}`
      );
      let data = dataObject.data;
      let dataSliced = data.chunk(10);
      this.setState({
        trending: data,
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
          {/* <Main data={this.state.trending[this.state.page]} /> */}
          <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
              {this.pageNum(this.state.trending)}
            </ul>
          </nav>
        </>
      );
    }
  }
}
