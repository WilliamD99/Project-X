//Components
import React from "react";
import Bone from "./Base/Bone";

export default function Top({ data, length, pageControl, ava, id, reloadSave }) {
  return <Bone data={data} length={length} controller={pageControl} ava={ava} id={id} reloadSave={reloadSave} />;
}
