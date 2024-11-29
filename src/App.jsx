import React from "react";
import Name from "./components/name/Name";
import Image from "./components/image/Image";
import Desc from "./components/desc/Desc";
import Price from "./components/price/Price";
import "./App.css";

function App() {
  let firstName = "Amine Jaouadi";
  return (
    <div id="container">
      <Image />
      <Name />
      <Desc />
      <Price />
      <br />
      Hello {firstName ? firstName : "there"}
      {firstName && "🤩"}
    </div>
  );
}

export default App;
