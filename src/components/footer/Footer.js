import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";

import Gdsc_All from "../../images/gdsc-all.png";

import ScrollToTop, { scrollToTop } from "./ScrollToTop";

const Footer = () => {
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
      <footer className="mainfooter" role="contentinfo">
        <div className="footer-middle">
          <div className="container">
            <div className="row">
              <div className="col-md-3 col-sm-6">
                <div className="footer-pad">
                  <h4 className="heading-1">GDSC AISSMS IOIT</h4>
                  <ul className="list-unstyled gdsc-logo-list">
                    <NavLink onClick={scrollToTop} to="/">
                      <img
                        width="100%"
                        height="100%"
                        className="Gdsc-Logo img-fluid"
                        src={Gdsc_All}
                        alt="GDSC-LOGO"
                      />
                    </NavLink>
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
                      <NavLink onClick={scrollToTop} to="/">
                        Home
                      </NavLink>
                    </li>
                    <li className="goorange">
                      <NavLink onClick={scrollToTop} to="/events">
                        Events
                      </NavLink>
                    </li>
                    <li className="gogreen">
                      <NavLink onClick={scrollToTop} to="/about">
                        About
                      </NavLink>
                    </li>
                    <li className="gored">
                      <NavLink onClick={scrollToTop} to="/team">
                        Team
                      </NavLink>
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
                <h4 className="heading-4">Connect</h4>

                <ul className="social-network social-circle">
                  <li>
                    <a
                      href="https://www.instagram.com/gdsc_aissmsioit/"
                      target="_blank"
                      rel="noreferrer"
                      className="icoInstagram"
                      title="Instagram"
                    >
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/channel/UCLcnxEONkPkUnlUDBHe9Omg"
                      target="_blank"
                      rel="noreferrer"
                      className="icoYoutube"
                      title="Youtube"
                    >
                      <i className="fa fa-youtube-play"></i>
                    </a>
                  </li>
                </ul>
                <ul className="social-network social-circle">
                  <li>
                    <a
                      href="https://www.linkedin.com/in/gdsc-aissms-ioit-595b9321b/"
                      target="_blank"
                      rel="noreferrer"
                      className="icoLinkedin"
                      title="Linkedin"
                    >
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:gdsc.aissmsioit@gmail.com"
                      target="_blank"
                      rel="noreferrer"
                      className="icoEnvelope"
                      title="Envelope"
                    >
                      <i className="fa fa-envelope"></i>
                    </a>
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

        <ScrollToTop />
      </footer>
    </>
  );
};

export default Footer;
