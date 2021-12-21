import React from "react";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Card = (props) => {
  const { id } = useParams();

  return (
    <div className="card">
      <div className="card-content">
        <NavLink to={`/events/${id}/`}>
          <img
            src="./images/home/card.jpg"
            className="img-fluid event-img"
            alt="Card"
          ></img>
        </NavLink>
      </div>
    </div>
  );
};

export default Card;
