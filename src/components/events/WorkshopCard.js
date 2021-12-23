import React from "react";
import { NavLink } from "react-router-dom";

const WorkshopCard = (props) => {
  return (
    <div
      data-aos={props.workshop.dataAos}
      data-aos-easing="ease-in-sine"
      data-aos-duration="1000"
      data-aos-delay="100"
      data-aos-anchor=".example-selector"
      data-aos-anchor-placement="top-center"
      className="col-lg-4 Group_55 mb-5"
    >
      <svg className="Path_39_ba" viewBox="0 0 471 619.705">
        <path
          className="Path_39"
          d="M 13.23033809661865 0 L 457.7696533203125 0 C 465.0766296386719 0 471 6.211597442626953 471 13.87399101257324 L 471 605.8309326171875 C 471 613.4933471679688 465.0766296386719 619.7048950195312 457.7696533203125 619.7048950195312 L 13.23033809661865 619.7048950195312 C 5.923424243927002 619.7048950195312 0 613.4933471679688 0 605.8309326171875 L 0 13.87399101257324 C 0 6.211597442626953 5.923424243927002 0 13.23033809661865 0 Z"
        ></path>
      </svg>
      <NavLink to={`/workshops/${props.workshop.id}/`}>
        <img
          className="n_0_days_of_Google_Cloud_Progr"
          src="./images/event/GDSC__1_cb.png"
          srcSet="./images/event/GDSC__1_cb.png 1x, ./images/event/GDSC__1_cb@2x.png 2x"
          alt="Workshop_Image"
        />
      </NavLink>
      <div className="n_0_Days_Of_Google__Cloud_Prog_bb">
        <span>{props.workshop.name}</span>
      </div>
      <div className="OPEN_bc">
        <NavLink to={`/workshops/${props.workshop.id}/`}>
          <span>OPEN</span>
        </NavLink>
      </div>
      <svg className="Line_2_bd" viewBox="0 0 111.917 18.782">
        <path
          className="Line_2"
          d="M 0 0.7822184562683105 L 111.9168548583984 0"
        ></path>
      </svg>
    </div>
  );
};

export default WorkshopCard;
