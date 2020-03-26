//Component
import React from 'react'

export default function CommentBox({ ava }) {
    let content;
    if (ava !== undefined) {
        content = <div className="cardbox-comments">
            <span className="comment-avatar float-left">
                <img
                    className="rounded-circle avatar"
                    src={ava}
                    alt="Avatar"
                />
            </span>
            <div className="search">
                <input placeholder="Write a comment" type="text" />
            </div>
        </div>
    } else {
        content = null
    }
    return (
        <>{content}</>
    )
}
