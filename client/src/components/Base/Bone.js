//React Components
import React, { Component } from "react";
import { Icon } from "rsuite";
import CommentBox from "./CommentBox";
import LikeButton from "../LikeButton"
//Helper function
import dateFormat from "../../helpers/dateFormat";
//Helper
import local from "../../helpers/local"

export default class Bone extends Component {
    //Init page buttons
    pageNum = num => {
        let numberOfPage = [];
        for (let i = 1; i <= num; i++) {
            let page = (
                <button
                    className="page-link pagination"
                    id="pagination"
                    onClick={this.handlePage}
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
    handlePage = event => {
        const target = event.target;
        if (target.classList.value.indexOf("pagination") === -1) {
            target.classList.add("pagination");
        } else {
            target.classList.remove("pagination");
        }
        this.props.controller(target.name);
    };
    pagination = length => {
        if (length > 1) {
            return <nav>
                <ul className="pagination justify-content-center">
                    {this.pageNum(this.props.length)}
                </ul>
            </nav>
        }
    }
    //Save like post
    onSubmit = (event) => {
        event.preventDefault();
        this.props.reloadSave();
        let data = local.post(`save/${this.props.id}`, {
            id: event.target[0].name,
            avatar_url: event.target[1].name,
            login: event.target[2].name,
            forks: event.target[3].name,
            watchers: event.target[4].name,
            language: event.target[5].name,
            name: event.target[6].name,
            description: event.target[7].name,
            created_at: event.target[8].name,
            updated_at: event.target[9].name
        })
    }
    render() {
        // let arr = [{ id: "123", name: "Nam" }, { id: 28457823, name: "test" }]
        let userAva;
        if (this.props.ava !== undefined) {
            userAva = this.props.ava[0].value
        }
        let data = this.props.data;
        let contents = data.map((content, index) => (
            <section className="hero" key={content.id}>
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
                                        <div className="related-date mt-3">
                                            <small>
                                                <span className="float-left">
                                                    <form onSubmit={this.onSubmit}>
                                                        <input type="hidden" name={content.id} />
                                                        <input type="hidden" name={content.owner.avatar_url} />
                                                        <input type="hidden" name={content.owner.login} />
                                                        <input type="hidden" name={content.forks} />
                                                        <input type="hidden" name={content.watchers} />
                                                        <input type="hidden" name={content.language} />
                                                        <input type="hidden" name={content.name} />
                                                        <input type="hidden" name={content.description} />
                                                        <input type="hidden" name={content.created_at} />
                                                        <input type="hidden" name={content.updated_at} />
                                                        <button className="like-button"><LikeButton id={this.props.id} /></button>
                                                    </form>
                                                </span>
                                            </small>
                                            <div>
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
                                </div>
                                {/* Use code below to work with comments */}
                                {/* {arr.filter(comment => {
                                    return comment.id === content.id
                                }).map(comment => {
                                    return <h2>{comment.name}</h2>
                                })} */}
                                <CommentBox ava={userAva} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        ));
        return <>
            {contents}
            {this.pagination(this.props.length)}
        </>;
    }
}