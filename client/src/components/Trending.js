import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faComment,
  faStar,
  faCodeBranch
} from "@fortawesome/free-solid-svg-icons";

export default function Main({ data }) {
  let contributors = arr => {
    let ele = arr.map(contributor => (
      <li key={contributor.username}>
        <a href={contributor.href}>
          <img
            src={contributor.avatar}
            className="img-fluid rounded-circle"
            alt="User"
          />
        </a>
      </li>
    ));
    return ele;
  };
  let contents = data.map((content, index) => (
    <section className="hero" key={index}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-3">
            <div className="cardbox shadow-lg bg-white">
              <div className="cardbox-heading">
                <div className="media">
                  <div className="d-flex mr-3">
                    <img
                      className=" rounded-circle avatar"
                      src={content.avatar}
                      alt="User"
                    />
                  </div>
                  <div className="media-body">
                    <p className="m-0">{content.author}</p>
                    <small>
                      <span>
                        <FontAwesomeIcon icon={faStar} className="popular" />
                        {content.stars.toLocaleString()}
                      </span>
                    </small>
                    <small>
                      <span>
                        <FontAwesomeIcon
                          icon={faCodeBranch}
                          className="popular"
                        />
                        {content.forks.toLocaleString()}
                      </span>
                    </small>
                    <span className="badge badge-warning float-right">
                      {content.language ? content.language : "None"}
                    </span>
                  </div>
                </div>
              </div>

              <div className="cardbox-item">
                <div className="">
                  <div className="card-body">
                    <a href={content.url}>
                      <h5 className="card-title">{content.name}</h5>
                    </a>
                    <p className="card-text">{content.description}</p>
                  </div>
                </div>
              </div>
              <div className="cardbox-base">
                <ul className="float-left">
                  <li>
                    <span>
                      <FontAwesomeIcon icon={faComment} className="icon" />
                    </span>
                  </li>
                  <li>
                    <span>
                      <em className="mr-5">12</em>
                    </span>
                  </li>
                  <li>
                    <span>
                      <FontAwesomeIcon icon={faThumbsUp} className="icon" />
                    </span>
                  </li>
                  <li>
                    <span>
                      <span>242 Likes</span>
                    </span>
                  </li>
                </ul>
                <ul id="contributors" className="float-right">
                  <li id="sum-contributors">
                    <p className="mr-5">
                      {content.builtBy.length} contributors
                    </p>
                  </li>
                  <div>{contributors(content.builtBy)}</div>
                </ul>
              </div>
              <div className="cardbox-comments">
                <span className="comment-avatar float-left">
                  <img
                    className="rounded-circle avatar"
                    src="http://www.themashabrand.com/templates/bootsnipp/post/assets/img/users/6.jpg"
                    alt="..."
                  />
                </span>
                <div className="search">
                  <input placeholder="Write a comment" type="text" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  ));
  return <>{contents}</>;
}
