import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import TitleJumbotron from "./components/TitleJumbotron";
import friends from "./friends.json";

class App extends Component {
  // Setting this.state.friends to the friends json array, set initial score to 0 as base
  state = {
    friends,
    score: 0
  };

  userLoses(){
    console.log("YOU LOSE");
    this.setState({
      score: 0, 
      friends
    })
  }

  handleScore(){
    console.log("FIRING");
    this.setState(state => {
      return {
        //grabbing old state, getting the old score (from the state), resetting score IN the state object 
        //setState will only change the piece that we tell it to, returning new object so NOT mutating the state
        score: state.score + 1
      }
    })
  }

  shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}


  removeFriend = id => {
    let didLose;
    // const clone = [...this.state.friends];
    const cloned = JSON.parse(JSON.stringify(this.state.friends));
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const friends = cloned.map(friend => {
      //friend is our object
      //for each friend, check IF the friend.id is equal to the id being passed in from our click
      if (friend.id == id){
        //NEW IF
        if (friend.alreadyClicked){
          didLose = true;
          this.userLoses()
        }
          else {
            //set friend to already clicked to keep track 
            friend.alreadyClicked = true;
            this.handleScore(); 
          }
      }
      //returning friend object the same as before or altered due to .map method
      return friend;
    })
    // Set this.state.friends equal to the new friends array
    if (!didLose) this.setState({ friends: this.shuffle(friends) });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div className="container">
      {/* insert start game function  */}
      <NavBar score={this.state.score}/>
      <TitleJumbotron>Spongebob Memory Game</TitleJumbotron>
      <Wrapper>
            {this.state.friends.map(friend => (
            //key is used as a unique id so that React can keep track of what has already rendered vs not
          <FriendCard
          //removeFriend is the name of the PROP 
          //in the component/file FriendCard, going to refer to THIS PROP as prop.removeFriend
          //to left of the = is the NAME of the prop, to the right of the = is the VALUE of the prop
            removeFriend={this.removeFriend}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
          />
        ))}
      </Wrapper>
      <Footer />
      </div>
    );
  }
}

export default App;

