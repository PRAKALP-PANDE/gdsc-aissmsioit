import React from "react";

const Card = (props) => {
  return (
    <div className="card">
      <div className="card-content">
        <a href="#">
          <img
            src="./images/home/card.jpg"
            className="img-fluid event-img"
          ></img>
        </a>
      </div>
    </div>
  );
};

export default Card;
