import React from "react";
import "./style.css";

function TitleJumbotron(props) {
  return <div className="jumbotron">
    <div className="container-fluid" >
      <h1 className="title">{props.children}</h1>;
      <p className="text-center">Click an image to earn points, just don't click the same image twice!</p>
    </div>
  </div>
}

export default TitleJumbotron;
