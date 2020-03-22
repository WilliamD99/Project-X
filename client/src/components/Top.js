import React from "react";
import Bone from "./Bone";

export default function Top({ data, length, pageControl, ava }) {
  return <><Bone data={data} length={length} controller={pageControl} ava={ava} /></>;
}
