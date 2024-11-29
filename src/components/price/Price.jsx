import React from "react";
import { data } from "../../products";
import "./style.css";
function Price() {
  return (
    <div>
      <button>Buy Now {data.price} $</button>
    </div>
  );
}

export default Price;
