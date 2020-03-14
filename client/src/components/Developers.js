import React, { Component } from "react";
import { trend } from "../helpers/gitAPI";

export default class Developers extends Component {
  state = {
    developers: []
  };
  async componentDidMount() {
    let dataObjects = await trend.get("developers");
    let data = dataObjects.data;
    this.setState({
      developers: data.slice(0, 5)
    });
  }
  htmlConstructor = arr => {
    let html = arr.map(dev => (
      <li className="list-group-item media dev-card" key={dev.username}>
        <div className="dev-avatar">
          <img
            className="rounded-circle img-fluid"
            src={dev.avatar}
            alt="User Avatar"
          />
          <p className="dev-name">{dev.username}</p>
        </div>
        <div className="dev-details">
          <a href={dev.url} className="h6 text-muted">
            {dev.name}
          </a>
          <a className="h8" href={dev.repo.url}>
            {dev.repo.name}
          </a>
        </div>
      </li>
    ));
    return html;
  };
  render() {
    return (
      <>
        <div className="col-md-3 float-right" id="developers">
          <div className="card">
            <div className="card-body">
              <div className="h5">Trending developers</div>
            </div>
            <ul className="list-group list-group-flush">
              {this.htmlConstructor(this.state.developers)}
            </ul>
          </div>
        </div>
      </>
    );
  }
}
