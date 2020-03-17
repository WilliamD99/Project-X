import React from "react";
import Bone from "./Bone";

export default function Top({ data, length, pageControl }) {
  return <><Bone data={data} length={length} controller={pageControl} /></>;
}
