//Components
import React from 'react'
import { Icon } from "rsuite"
//Helper
import like from "../helpers/like"

export default function LikeButton({ id }) {
    if (id !== undefined) {
        return (
            <Icon icon="heart-o" className="like-icon" onClick={like} />
        )
    } else {
        return null
    }
}
