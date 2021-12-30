import React from "react";

import Fade from "react-reveal/Fade";

const TeamCard = (props) => {
  return (
    <Fade up>
      <div className={`col-lg-${props.member.col} col-12 teams`}>
        <img
          src={props.member.image}
          className="img-fluid team-img m-auto"
          alt={props.member.alt}
        />
        <h5>{props.member.name}</h5>
        <h5>{props.member.position}</h5>
        <span></span>
        <div className="social-ico-team col-lg-12">
          <a href={props.member.linkedin}>
            <i className="fa fa-linkedin ico-link"></i>
          </a>
          <a href={props.member.instagram}>
            <i className="fa fa-instagram ico-insta"></i>
          </a>
          <a href={props.member.github}>
            <i className="fa fa-github ico-github"></i>
          </a>
        </div>
      </div>
    </Fade>
  );
};

export default TeamCard;
