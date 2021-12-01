import React from "react";
import { NavLink } from "react-router-dom";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="mainfooter" role="contentinfo">
      <div className="footer-middle">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <div className="footer-pad">
                <h4 className="heading-1">GDSC IOIT</h4>
                <p>gdsc logo</p>
                <ul className="list-unstyled">
                  <img className="gdsc-logo" src="" alt="" />
                </ul>
              </div>
            </div>

            <div className="col-md-3 col-sm-6">
              <div className="footer-pad">
                <h4 className="heading-2">Team</h4>
                <ul className="list-unstyled">
                  <li className="gored">
                    <a>Andriod Development</a>
                  </li>
                  <li className="goorange">
                    <a>Web Development</a>
                  </li>
                  <li className="gogreen">
                    <a>Machine Learning</a>
                  </li>
                  <li className="goblue">
                    <a>Management</a>
                  </li>
                  <li className="gowhite">
                    <a>DS & Algo</a>
                  </li>
                  <li>
                    <a></a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="footer-pad">
                <h4 className="heading-3">Quick Links</h4>
                <ul className="list-unstyled">
                  <li className="gored">
                    <a>Home</a>
                  </li>
                  <li className="goorange">
                    <a>Workshops</a>
                  </li>
                  <li className="gogreen">
                    <a>Community</a>
                  </li>
                  <li className="goblue">
                    <a>Team</a>
                  </li>

                  <li className="gowhite">
                    <a>Be a Member</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <h4 className="heading-4">Follow Us</h4>

              <ul className="social-network social-circle">
                <li>
                  <a className="icoInstagram" title="Instagram">
                    <i className="fa fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a className="icoYoutube" title="Youtube">
                    <i className="fa fa-youtube-play"></i>
                  </a>
                </li>
              </ul>
              <ul className="social-network social-circle">
                <li>
                  <a className="icoLinkedin" title="Linkedin">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a className="icoEnvelope" title="Envelope">
                    <i className="fa fa-envelope"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <h4 className="divider donotcross">
              GDSC IOIT
            </h4>
            <div className="col-md-12 copy">
              <p className="text-center">
                Copyright &copy; 2021 All Rights Reserved by
                <NavLink to="/"> GDSC IOIT</NavLink>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
