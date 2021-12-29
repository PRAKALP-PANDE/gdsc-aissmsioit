import React from "react";

const Card = (props) => {
  return (
    <div className="card what_we_do_card">
      <div className="card-content">
        
          <img
            src={props.event.imageSrc}
            className="img-fluid what_we_do_img"
            alt="Card"
          ></img>
          <h1>title</h1>
       
      </div>
    </div>
  );
};

export default Card;
