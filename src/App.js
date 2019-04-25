import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import TitleJumbotron from "./components/TitleJumbotron";
import friends from "./friends.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends
  };

  removeFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const friends = this.state.friends.filter(friend => {
      //for each friend, check IF the friend.id is equal to the id being passed in from our click
      if (friend.id !== id){
        return true;
      } else {
        return false;
      }
    })
    // Set this.state.friends equal to the new friends array
    this.setState({ friends });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div className="container">
      <NavBar />
      <TitleJumbotron>Clicky Game</TitleJumbotron>
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

