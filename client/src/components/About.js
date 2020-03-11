import React from "react";
import shot from "../assets/About/Nam_Doan_WD.jpg";
export default function About() {
  return (
    <div
      className="modal fade"
      id="About"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="About"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-hidden="true"
            ></button>
            <h4 className="modal-title" id="myModalLabel">
              More About William
            </h4>
          </div>
          <div className="modal-body">
            <center>
              <img
                src={shot}
                name="aboutme"
                width="140"
                height="140"
                border="0"
                className="img-circle"
              />
              <h3 className="media-heading">
                Will Doan <small>Canada</small>
              </h3>
              <span>
                <strong>Skills: </strong>
              </span>
              <span className="badge badge-warning">HTML5/CSS</span>
              <span className="badge badge-info">Javascript/React</span>
              <span className="badge badge-primary">SAP/Syspro</span>
              <span className="badge badge-warning">HTML5/CSS</span>
              <span className="badge badge-success">ASP.Net Core</span>
              <span className="badge badge-info">Microsoft Office</span>
            </center>
            <hr />
            <center>
              <p className="text-left">
                <strong>Bio: </strong>
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sem
                dui, tempor sit amet commodo a, vulputate vel tellus.
              </p>
              <br />
            </center>
          </div>
          <div className="modal-footer">
            <center>
              <button
                type="button"
                className="btn btn-default"
                data-dismiss="modal"
              >
                I've heard enough about Will!
              </button>
            </center>
          </div>
        </div>
      </div>
    </div>
  );
}
