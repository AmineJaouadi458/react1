import React from "react";
import { data } from "../../products";
import "./style.css";

function Image() {
  return (
    <div id="image-container">
      <img id="img-body" src={data.image} alt="" srcset="" />
    </div>
  );
}

export default Image;
