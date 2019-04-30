//set imports
import React from "react"

function NavBar(props){
  return (
    <div>
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand col-3 text-center">Memory Game</a>
      <a className="navbar-brand col-3 text-center">Score: {props.score}</a>
      <a className="navbar-brand col-3 text-center">Score: {props.count}</a>
    </nav>
    </div>
  );
}
 

export default NavBar

