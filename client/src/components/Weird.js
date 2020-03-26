//Components
import React from 'react'
import Bone from "./Base/Bone";

export default function Weird({ data, length, ava, id, reloadSave }) {
    return (
        <Bone data={data} length={length} ava={ava} id={id} reloadSave={reloadSave} />
    )
}
