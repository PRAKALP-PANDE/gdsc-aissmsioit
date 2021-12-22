import React from "react";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";

import Card_Img from "../../images/home/card.jpg";

const Card = (props) => {
  const { id } = useParams();

  return (
    <div className="card">
      <div className="card-content">
        <NavLink to={`/events/${id}/`}>
          <img
            src={Card_Img}
            className="img-fluid event-img"
            alt="Card"
          ></img>
        </NavLink>
      </div>
    </div>
  );
};

export default Card;
