import React from "react";

const Card = (props) => {
  return (
    <div className={"card rank-" + props.ranks + " " + props.suit}>
      <span className="rank">{props.ranks2}</span>
      <span className="suit">{props.suit2}</span>
    </div>
  );
}

export default Card;
