import React from "react";
import { data } from "../../products";
import "./style.css";
function Desc() {
  return (
    <div>
      <p>{data.desc}</p>
    </div>
  );
}

export default Desc;
