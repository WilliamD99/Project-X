import React from "react";
import { Icon } from "rsuite";
import dateFormat from "../helpers/dateFormat";
export default function Top({ data }) {
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
                      src={content.owner.avatar_url}
                      alt="User"
                    />
                  </div>
                  <div className="media-body">
                    <p className="m-0">{content.owner.login}</p>
                    <small>
                      <span>
                        <Icon icon="code-fork" className="forks" />
                        {content.forks.toLocaleString()}
                      </span>
                    </small>
                    <small>
                      <span>
                        <Icon icon="people-group" className="watchers" />
                        {content.watchers.toLocaleString()}
                      </span>
                    </small>
                    <span className="badge badge-warning float-right">
                      {content.language ? content.language : "None"}
                    </span>
                  </div>
                </div>
              </div>

              <div className="cardbox-item">
                <div className="card-body">
                  <a href={content.html_url}>
                    <h5 className="card-title">{content.name}</h5>
                  </a>
                  <p className="card-text">{content.description}</p>
                  <div className="related-date">
                    <small>
                      <span className="m=0 float-right">
                        <Icon icon="cloud-upload" className="upload" />
                        {dateFormat(content.created_at)}
                      </span>
                    </small>
                    <small>
                      <span className="m=0 float-right">
                        <Icon icon="edit2" className="edit" />
                        {dateFormat(content.updated_at)}
                      </span>
                    </small>
                  </div>
                </div>
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
