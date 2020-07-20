import React, { Component } from "react";
import CardDeck from "./CardDeck";

class PokerHand extends Component {

  hand = {
    outcome: new CardDeck().state.card
  }

  getOutcome () {
    let arr = this.hand.outcome;

    for (let i = 0; i < arr.length; i++) {
      console.log(arr[i]);
    }
  }


  render() {
    return (
      <div>
        <button
          onClick={() => {
            console.log(this.getOutcome());
          }}
        >
          My hand
        </button>
      </div>
    );
  }
}

export default PokerHand;