//set imports
import React from "react"

function NavBar(props){
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary" onClick={() => props.startGame(props.id)}>
       <ul>
        <li className="nav-item col-3 text-center">Clicky Game</li>
        <li className="nav-item col-3 text-center"></li>
        <li className="nav-item col-3 text-center">Score: {props.score}</li>
      </ul>
    </nav>
  );
}


export default NavBar

