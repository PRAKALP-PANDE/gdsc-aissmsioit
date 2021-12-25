import React, { useEffect } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Team.css";

import Team_Img from "../../images/team/team2.jpg";
import Lead from "../../images/team/lead.png";

const Team = () => {
  useEffect(() => {
    const imgFluids = document.getElementsByClassName("img-fluid");
    Array.from(imgFluids).forEach((img) => {
      img.addEventListener("mouseover", () => {
        img.classList.remove("out");
        img.classList.add("over");
      });

      img.addEventListener("mouseout", () => {
        img.classList.remove("over");
        img.classList.add("out");
      });
    });
  }, []);

  return (
    <>
      <div className="container-fluid team-heading">
        <div className="row">
          <div
            className="col-lg-6 col-sm-12 vector-img"
            data-aos="fade-right"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1000"
            data-aos-delay="100"
            data-aos-anchor=".example-selector"
            data-aos-anchor-placement="top-center"
          >
            <img
              className="img-fluid"
              src={Team_Img}
              alt="Team_Image"
            />
          </div>
          <div
            className="col-lg 6 col-sm-12 team-body"
            data-aos="fade-left"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1000"
            data-aos-delay="100"
            data-aos-anchor=".example-selector"
            data-aos-anchor-placement="top-center"
          >
            <h1>Meet Our Team</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam. Duis aute irure dolor in reprehenderit in
              voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>
        </div>
      </div>
      <div className="container-fluid team-members">
        <div className="row">
          <div
            className="col-lg-12 col-sm-12 member-body"
            data-aos="fade-up"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1000"
            data-aos-delay="100"
            data-aos-anchor=".example-selector"
            data-aos-anchor-placement="top-center"
          >
            <h3>GDSC Lead</h3>
            <img
              src={Lead}
              className="img-fluid lead-img"
              alt="Lead_Image"
            />
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
        <div
          className="row"
          data-aos="fade-up"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1000"
          data-aos-delay="100"
          data-aos-anchor=".example-selector"
          data-aos-anchor-placement="top-center"
        >
          <h3>Web Team</h3>
          <div
            className="col-lg-6 col-sm-12 web-team-body-left"
            data-aos="fade-right"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1000"
            data-aos-delay="100"
            data-aos-anchor=".example-selector"
            data-aos-anchor-placement="top-center"
          >
            <img
              src={Lead}
              className="img-fluid team-img-left"
              alt="Lead_Image"
            />
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
          <div
            className="col-lg-6 col-sm-12 web-team-body-right"
            data-aos="fade-left"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1000"
            data-aos-delay="100"
            data-aos-anchor=".example-selector"
            data-aos-anchor-placement="top-center"
          >
            <img
              src={Lead}
              className="img-fluid team-img-right"
              alt="Lead_Image"
            />
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
