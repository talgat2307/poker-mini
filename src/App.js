import React from "react";
import "./App.css";
import "./assets/cards.css";
import CardDeck from "./components/CardDeck";
// import PokerHand from './components/PokerHand';

const App = () => {
  return (
    <div className="App">
      <div className="playingCards faceImages ">
        <CardDeck />
        {/*<PokerHand />*/}
      </div>
    </div>
  );
}

export default App;
