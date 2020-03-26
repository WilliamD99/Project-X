//Components
import React from 'react'
import Bone from "./Base/Bone";

export default function Save({ data, ava, length }) {
    if (data !== undefined) {
        return (
            <Bone data={data} ava={ava} length={length} />
        )
    } else {
        return <></>
    }
}
