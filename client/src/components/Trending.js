import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faCodeBranch
} from "@fortawesome/free-solid-svg-icons";

export default function Main({ data, freq, lang, length, pageControl }) {
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
                <div id="contributors" className="float-left">
                  <ul>
                    {content.builtBy.length} contributors{" "}
                    {contributors(content.builtBy)}
                  </ul>
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
  //Init language selections
  let langArr = () => {
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
  let handleFreq = event => {
    const target = event.target;
    freq(target.value);
  };
  let handleLang = event => {
    const target = event.target;
    lang(target.value);
  };
  let pageNum = num => {
    let numberOfPage = [];
    for (let i = 1; i <= num; i++) {
      let page = (
        <button
          className="page-link pagination"
          id="pagination"
          onClick={handlePage}
          key={i}
          name={i - 1}
        >
          {i}
        </button>
      );
      numberOfPage.push(page);
    }
    return numberOfPage;
  };
  //Handle page
  let handlePage = event => {
    const target = event.target;
    if (target.classList.value.indexOf("pagination") === -1) {
      target.classList.add("pagination");
    } else {
      target.classList.remove("pagination");
    }
    pageControl(target.name);
  };
  return (
    <>
      <ul className="nav justify-content-center" id="menu">
        <li className="nav-item">
          <div className="form-group">
            <select
              className="form-control"
              name="frequent"
              onChange={handleFreq}
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
              onChange={handleLang}
            >
              <option>None</option>
              {langArr()}
            </select>
          </div>
        </li>
        {/* <li className="nav-item">
          <p className="nav-link">Link</p>
        </li> */}
      </ul>
      {contents}
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
          {pageNum(length)}
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
