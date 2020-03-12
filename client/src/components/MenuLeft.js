import React from "react";
import "../helpers/menu-left";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFireAlt,
  faStar,
  faUser,
  faBookOpen,
  faQuestion
} from "@fortawesome/free-solid-svg-icons";
import onSelect from "../helpers/menu-left";

export default function MenuLeft() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-4 col-md-2 sidebar" id="side">
          <div className="mini-submenu">
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </div>
          <div className="list-group">
            <span className="list-group-item active" id="sub-menu">
              Search by
              <span className="pull-right" id="slide-submenu">
                <i className="fa fa-times"></i>
              </span>
            </span>
            <a
              className="list-group-item option options-active"
              onClick={onSelect}
            >
              <FontAwesomeIcon icon={faFireAlt} className="options-left" />
              Trending
            </a>
            <a className="list-group-item option" onClick={onSelect}>
              <FontAwesomeIcon icon={faStar} className="options-left" />
              Top Projects
            </a>
            <a className="list-group-item option" onClick={onSelect}>
              <FontAwesomeIcon icon={faUser} className="options-left" />
              Users
            </a>
            <a className="list-group-item option" onClick={onSelect}>
              <FontAwesomeIcon className="options-left" icon={faBookOpen} />
              Topic
            </a>
            <a className="list-group-item option" onClick={onSelect}>
              <FontAwesomeIcon className="options-left" icon={faQuestion} />
              Weird Projects
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
