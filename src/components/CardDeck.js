import React, { Component } from "react";
import Card from "./Card.js";

class CardDeck extends Component {
  mass = {
    cards: [
      { icon: "♥", suit: "hearts", ranks: "2" },
      { icon: "♥", suit: "hearts", ranks: "3" },
      { icon: "♥", suit: "hearts", ranks: "4" },
      { icon: "♥", suit: "hearts", ranks: "5" },
      { icon: "♥", suit: "hearts", ranks: "6" },
      { icon: "♥", suit: "hearts", ranks: "7" },
      { icon: "♥", suit: "hearts", ranks: "8" },
      { icon: "♥", suit: "hearts", ranks: "9" },
      { icon: "♥", suit: "hearts", ranks: "10" },
      { icon: "♥", suit: "hearts", ranks: "J" },
      { icon: "♥", suit: "hearts", ranks: "Q" },
      { icon: "♥", suit: "hearts", ranks: "K" },
      { icon: "♥", suit: "hearts", ranks: "A" },

      { icon: "♦", suit: "diams", ranks: "2" },
      { icon: "♦", suit: "diams", ranks: "3" },
      { icon: "♦", suit: "diams", ranks: "4" },
      { icon: "♦", suit: "diams", ranks: "5" },
      { icon: "♦", suit: "diams", ranks: "6" },
      { icon: "♦", suit: "diams", ranks: "7" },
      { icon: "♦", suit: "diams", ranks: "8" },
      { icon: "♦", suit: "diams", ranks: "9" },
      { icon: "♦", suit: "diams", ranks: "10"},
      { icon: "♦", suit: "diams", ranks: "J" },
      { icon: "♦", suit: "diams", ranks: "Q" },
      { icon: "♦", suit: "diams", ranks: "K" },
      { icon: "♦", suit: "diams", ranks: "A" },

      { icon: "♣", suit: "clubs", ranks: "2" },
      { icon: "♣", suit: "clubs", ranks: "3" },
      { icon: "♣", suit: "clubs", ranks: "4" },
      { icon: "♣", suit: "clubs", ranks: "5" },
      { icon: "♣", suit: "clubs", ranks: "6" },
      { icon: "♣", suit: "clubs", ranks: "7" },
      { icon: "♣", suit: "clubs", ranks: "8" },
      { icon: "♣", suit: "clubs", ranks: "9" },
      { icon: "♣", suit: "clubs", ranks: "10"},
      { icon: "♣", suit: "clubs", ranks: "J" },
      { icon: "♣", suit: "clubs", ranks: "Q" },
      { icon: "♣", suit: "clubs", ranks: "K" },
      { icon: "♣", suit: "clubs", ranks: "A" },

      { icon: "♠", suit: "spades", ranks: "2" },
      { icon: "♠", suit: "spades", ranks: "3" },
      { icon: "♠", suit: "spades", ranks: "4" },
      { icon: "♠", suit: "spades", ranks: "5" },
      { icon: "♠", suit: "spades", ranks: "6" },
      { icon: "♠", suit: "spades", ranks: "7" },
      { icon: "♠", suit: "spades", ranks: "8" },
      { icon: "♠", suit: "spades", ranks: "9" },
      { icon: "♠", suit: "spades", ranks: "10"},
      { icon: "♠", suit: "spades", ranks: "J" },
      { icon: "♠", suit: "spades", ranks: "Q" },
      { icon: "♠", suit: "spades", ranks: "K" },
      { icon: "♠", suit: "spades", ranks: "A" },
    ],
  };

  state = {
    card: [
      { icon: "", suit: "", ranks: "" },
      { icon: "", suit: "", ranks: "" },
      { icon: "", suit: "", ranks: "" },
      { icon: "", suit: "", ranks: "" },
      { icon: "", suit: "", ranks: "" },
    ],
  };

  getCard() {
    let arr = [];
    while (arr.length < 5) {
      let random = Math.floor(Math.random() * 51);
      if (arr.indexOf(random) === -1) {
        arr.push(random);
      }
    }
    return arr;
  }

  getCards(howMany) {
    let arr2 = [];
    for (let i = 0; i < howMany; i++) {
      arr2.push(this.mass.cards[this.getCard()[i]]);
    }
    this.setState({ card: arr2 });
  }



  render() {
    return (
      <div>
        {this.state.card.map(card => {
          return <Card suit={card.suit} ranks={card.ranks.toLowerCase()} suit2={card.icon} ranks2={card.ranks} />
        })}
        <div>
          <button className='btn' onClick={() => (this.getCards(5))}>
            Deal
          </button>
        </div>
      </div>
    );
  }
}

export default CardDeck;
