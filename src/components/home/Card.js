import React from "react";
import { NavLink } from "react-router-dom";

const Card = (props) => {
  return (
    <div className="card">
      <div className="card-content">
        <NavLink to={`/events/${props.event.id}/`}>
          <img
            src={props.event.imageSrc}
            className="img-fluid event-img"
            alt="Card"
          ></img>
        </NavLink>
      </div>
    </div>
  );
};

export default Card;
