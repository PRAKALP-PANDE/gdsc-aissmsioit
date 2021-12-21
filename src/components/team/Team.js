import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Team.css";

const Team = () => {
  return (
    <>
      <div className="container-fluid team-heading">
        <div className="row">
          <div className="col-lg 6 col-sm-12 team-body">
            <h1>Meet Our Team</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam. Duis aute irure dolor in reprehenderit in
              voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>
          <div className="col-lg-6 col-sm-12 vector-img">
            <img className="img-fluid" src="/images/team/team2.jpg" alt="Team_Image" />
          </div>
        </div>
      </div>
      <div className="container-fluid team-members">
        <div className="row">
          <div className="col-lg-12 col-sm-12 member-body">
            <h3>Meet Our DSC Lead</h3>
            <img src="/images/team/lead.png" className="img-fluid lead-img" alt="Lead_Image" />
            <h5>Prarthana Chandak</h5>
            <span></span>
            <div className="social-ico">
              <a href="#0">
                <i className="fa fa-linkedin ico-link"></i>
              </a>
              <a href="#0">
                <i className="fa fa-instagram ico-insta"></i>
              </a>
              <a href="#0">
                <i className="fa fa-facebook ico-face"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          <h3>Web Team</h3>
          <div className="col-lg-6 col-sm-12 web-team-body-left">
            <img src="/images/team/lead.png" className="img-fluid team-img-left" alt="Lead_Image" />
            <h5>Ashish Patil</h5>
            <h5>Web Development Lead</h5>
            <span></span>
            <div className="social-ico-web col-lg-6 float-right">
              <a href="#0">
                <i className="fa fa-linkedin ico-link"></i>
              </a>
              <a href="#0">
                <i className="fa fa-instagram ico-insta"></i>
              </a>
              <a href="#0">
                <i className="fa fa-facebook ico-face"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-6 col-sm-12 web-team-body-right">
            <img src="/images/team/lead.png" className="img-fluid team-img-right" alt="Lead_Image" />
            <h5>Ganesh</h5>
            <h5>Web Development Co-Lead</h5>
            <span></span>
            <div className="social-ico-web col-lg-6 float-left">
              <a href="#0">
                <i className="fa fa-linkedin ico-link"></i>
              </a>
              <a href="#0">
                <i className="fa fa-instagram ico-insta"></i>
              </a>
              <a href="#0">
                <i className="fa fa-facebook ico-face"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
