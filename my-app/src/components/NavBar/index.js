//set imports
import React from "react"

function NavBar(props){
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary" onClick={() => props.startGame(props.id)}>
       <ul>
        <li className="nav-item">Clicky Game</li>
        <li className="nav-item"></li>
        <li className="nav-item">Score: {props.score}</li>
      </ul>
    </nav>
  );
}


export default NavBar

