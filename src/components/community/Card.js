import React from "react";

const Card = (props) => {
  return (
    <div className="card mt-lg-5">
      <div className="card-content">
        <img
          src={props.element.imageSrc}
          className="img-fluid event-img"
          alt="Event_Image"
        />
        <h2>{props.element.title}</h2>
      </div>
    </div>
  );
};

export default Card;
