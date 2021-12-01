import React from "react";
import { NavLink, Link } from "react-router-dom";
// import Bubbles from "../bubbles/Bubbles";

import "./Footer.css";

const Footer = () => {
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };
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
                  <h4 className="heading-1">GDSC IOIT</h4>
                  <ul className="list-unstyled">
                    <img width="100%" height="100%" className="GDSC-LOGO" src="./images/gdsc-all.png" alt="" />
                  </ul>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="footer-pad">
                  <h4 className="heading-2">Team</h4>
                  <ul className="list-unstyled">
                    <li className="gored">
                      <a href="#">GDSC Lead</a>
                    </li>
                    <li className="gored">
                      <a href="#">Andriod Development</a>
                    </li>
                    <li className="goorange">
                      <a href="#">Web Development</a>
                    </li>
                    <li className="gogreen">
                      <a href="#">Machine Learning</a>
                    </li>
                    <li className="goblue">
                      <a href="#">Management</a>
                    </li>
                    <li className="gowhite">
                      <a href="#">DS & Algo</a>
                    </li>
                    <li>
                      <a href="#"></a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="footer-pad">
                  <h4 className="heading-3">Quick Links</h4>
                  <ul className="list-unstyled">
                    <li className="gored">
                      <a href="#">Home</a>
                    </li>
                    <li className="goorange">
                      <a href="#">Workshops</a>
                    </li>
                    <li className="gogreen">
                      <a href="#">Community</a>
                    </li>
                    <li className="goblue">
                      <a href="#">Team</a>
                    </li>

                    <li className="gowhite">
                      <a href="#">Be a Member</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3">
                <h4 className="heading-4">Follow Us</h4>

                <ul className="social-network social-circle">
                  <li>
                    <a href="#" className="icoInstagram" title="Instagram">
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="icoYoutube" title="Youtube">
                      <i className="fa fa-youtube-play"></i>
                    </a>
                  </li>
                </ul>
                <ul className="social-network social-circle">
                  <li>
                    <a href="#" className="icoLinkedin" title="Linkedin">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="icoEnvelope" title="Envelope">
                      <i className="fa fa-envelope"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row">
              <h4 class="divider donotcross">
                GDSC IOIT
              </h4>

              <div className="col-md-12 copy">
                <p className="text-center">
                  Copyright &copy; 2021 All Rights Reserved by
                  <Link href="#"> GDSC IOIT</Link>.
                </p>
              </div>
            </div>
          </div>
        </div>
        <button className="gotopbtn" onClick={scroll}>
          <i className="fa fa-arrow-up"></i>
        </button>
        {/* <Bubbles /> */}
      </footer>
    </>
  );
};

export default Footer;
