import React from "react";
import { NavLink } from "react-router-dom";
import Bubbles from "../bubbles/Bubbles";

import "./Footer.css";

const Footer = () => {
  // const scrollToBottom = () => {
  //   window.scrollTo({
  //     top: document.documentElement.scrollHeight,
  //     behavior: "smooth",
  //   });
  // };
  const scroll = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <footer className="mainfooter" role="contentinfo">
        <div className="footer-middle">
          <div className="container">
            <div className="row">
              <div className="col-md-3 col-sm-6">
                <div className="footer-pad">
                  <h4 className="heading-1">GDSC AISSMS IOIT</h4>
                  <ul className="list-unstyled">
                    <img
                      width="100%"
                      height="100%"
                      className="GDSC-LOGO"
                      src="./images/gdsc-all.png"
                      alt="GDSC-LOGO"
                    />
                  </ul>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 team">
                <div className="footer-pad">
                  <h4 className="heading-2">Team</h4>
                  <ul className="list-unstyled">
                    <li className="gored">
                      <NavLink to="#">GDSC Lead</NavLink>
                    </li>
                    <li className="gogreen">
                      <NavLink to="#">Andriod Development</NavLink>
                    </li>
                    <li className="goorange">
                      <NavLink to="#">Web Development</NavLink>
                    </li>
                    <li className="gogreen">
                      <NavLink to="#">Machine Learning</NavLink>
                    </li>
                    <li className="goblue">
                      <NavLink to="#">Management</NavLink>
                    </li>
                    <li className="goorange">
                      <NavLink to="#">DS & Algo</NavLink>
                    </li>
                    <li>
                      <NavLink to="#"></NavLink>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 quick-links">
                <div className="footer-pad">
                  <h4 className="heading-3">Quick Links</h4>
                  <ul className="list-unstyled">
                    <li className="gored">
                      <NavLink to="/">Home</NavLink>
                    </li>
                    <li className="goorange">
                      <NavLink to="/events">Events</NavLink>
                    </li>
                    <li className="gogreen">
                      <NavLink to="/community">Community</NavLink>
                    </li>
                    <li className="gored">
                      <NavLink to="/team">Team</NavLink>
                    </li>
                    <li className="goblue">
                      <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://gdsc.community.dev/aissms-institute-of-information-technology-pune/"
                      >
                        <span>Be a Member</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3 follow-us">
                <h4 className="heading-4">Follow Us</h4>

                <ul className="social-network social-circle">
                  <li>
                    <NavLink to="#" className="icoInstagram" title="Instagram">
                      <i className="fa fa-instagram"></i>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="#" className="icoYoutube" title="Youtube">
                      <i className="fa fa-youtube-play"></i>
                    </NavLink>
                  </li>
                </ul>
                <ul className="social-network social-circle">
                  <li>
                    <NavLink to="#" className="icoLinkedin" title="Linkedin">
                      <i className="fa fa-linkedin"></i>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="#" className="icoEnvelope" title="Envelope">
                      <i className="fa fa-envelope"></i>
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row">
              <h4 className="divider donotcross">GDSC AISSMS IOIT</h4>
              <div className="col-md-12 copy">
                <p className="text-center">
                  Copyright &copy; 2021 All Rights Reserved by
                  <NavLink to="/"> GDSC IOIT</NavLink>.
                </p>
              </div>
            </div>
          </div>
        </div>
        <button className="gotopbtn" onClick={scroll}>
          <i className="fa fa-arrow-up"></i>
        </button>
        <Bubbles />
      </footer>
    </>
  );
};

export default Footer;
