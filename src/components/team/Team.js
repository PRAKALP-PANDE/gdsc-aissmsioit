import React, { useEffect } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Team.css";

import Team_Img from "../../images/team/team2.jpg";
import Lead from "../../images/team/lead.png";

import Fade from "react-reveal/Fade";

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
            <img className="img-fluid" src={Team_Img} alt="Team_Image" />
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
      <div className="container team-members">
        <Fade up>
          <div className="row">
            <div className="col-lg-12 col-sm-12 member-body">
              <Fade up>
                <h3>GDSC Lead</h3>
              </Fade>
              <img src={Lead} className="img-fluid lead-img" alt="Lead_Image" />
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
        </Fade>

        <div className="row">
          <Fade up>
            <h3>Web Team</h3>
          </Fade>
          <Fade up>
            <div className="col-lg-3 col-sm-12 web-team">
              <img
                src={Lead}
                className="img-fluid team-img"
                alt="Lead_Image"
              />
              <h5>Ashish Patil</h5>
              <h5>Web Development Lead</h5>
              <span></span>
              <div className="social-ico-web col-lg-12">
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
          </Fade>

          <Fade up>
            <div className="col-lg-3 col-sm-12 web-team">
              <img
                src={Lead}
                className="img-fluid team-img"
                alt="Lead_Image"
              />
              <h5>Ganesh Birajdar</h5>
              <h5>Web Development Co-Lead</h5>
              <span></span>
              <div className="social-ico-web col-lg-12">
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
          </Fade>
          <Fade up>
            <div className="col-lg-3 col-sm-12 web-team">
              <img
                src={Lead}
                className="img-fluid team-img"
                alt="Lead_Image"
              />
              <h5>Sarang Kulkarni</h5>
              <h5>Web Development Member</h5>
              <span></span>
              <div className="social-ico-web col-lg-12">
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
          </Fade>
          <Fade up>
            <div className="col-lg-3 col-sm-12 web-team">
              <img
                src={Lead}
                className="img-fluid team-img"
                alt="Lead_Image"
              />
              <h5>Prakalp Pande</h5>
              <h5>Web Development Member</h5>
              <span></span>
              <div className="social-ico-web col-lg-12">
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
          </Fade>
        </div>
        <div className="row">
          <Fade up>
            <h3>Cloud Team</h3>
          </Fade>
          <Fade up>
            <div className="col-lg-6 col-sm-12 cloud-team">
              <img
                src={Lead}
                className="img-fluid team-img"
                alt="Lead_Image"
              />
              <h5>Shrinivas Khond</h5>
              <h5>Cloud Lead</h5>
              <span></span>
              <div className="social-ico-web col-lg-12">
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
          </Fade>
          <Fade up>
            <div className="col-lg-6 col-sm-12 cloud-team">
              <img
                src={Lead}
                className="img-fluid team-img"
                alt="Lead_Image"
              />
              <h5>Isha Nadkar</h5>
              <h5>Cloud Co-Lead</h5>
              <span></span>
              <div className="social-ico-web col-lg-12">
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
          </Fade>
        </div>
        <div className="row">
          <h3>DSA/CP Team</h3>
          <Fade up>
            <div className="col-lg-12 col-sm-12 DSA-team">
              <img
                src={Lead}
                className="img-fluid team-img"
                alt="Lead_Image"
              />
              <h5>Harshal Raundal</h5>
              <h5>DSA Lead</h5>
              <span></span>
              <div className="social-ico-web col-lg-12">
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
          </Fade>
        </div>
        <div className="row">
          <h3>Machine Learning Team</h3>
          <Fade up>
            <div className="col-lg-6 col-sm-12 ML-team">
              <img
                src={Lead}
                className="img-fluid team-img"
                alt="Lead_Image"
              />
              <h5>Akshada Bhandari</h5>
              <h5>ML Lead</h5>
              <span></span>
              <div className="social-ico-web col-lg-12">
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
          </Fade>
          <Fade up>
            <div className="col-lg-6 col-sm-12 ML-team">
              <img
                src={Lead}
                className="img-fluid team-img"
                alt="Lead_Image"
              />
              <h5>Aditya Gandhamal</h5>
              <h5>ML Co-Lead</h5>
              <span></span>
              <div className="social-ico-web col-lg-12">
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
          </Fade>
        </div>
        <div className="row">
          <h3>Android Team</h3>
          <Fade up>
            <div className="col-lg-3 col-sm-12 android-team">
              <img
                src={Lead}
                className="img-fluid team-img"
                alt="Lead_Image"
              />
              <h5>Parth Desai</h5>
              <h5>Android Lead</h5>
              <span></span>
              <div className="social-ico-web col-lg-12">
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
          </Fade>
          <Fade up>
            <div className="col-lg-3 col-sm-12 android-team">
              <img
                src={Lead}
                className="img-fluid team-img"
                alt="Lead_Image"
              />
              <h5>Prathamesh Chaudhari</h5>
              <h5>Android Co-Lead</h5>
              <span></span>
              <div className="social-ico-web col-lg-12">
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
          </Fade>
          <Fade up>
            <div className="col-lg-3 col-sm-12 android-team">
              <img
                src={Lead}
                className="img-fluid team-img"
                alt="Lead_Image"
              />
              <h5>Aniruddh Karekar</h5>
              <h5>Android Member</h5>
              <span></span>
              <div className="social-ico-web col-lg-12">
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
          </Fade>
          <Fade up>
            <div className="col-lg-3 col-sm-12 android-team">
              <img
                src={Lead}
                className="img-fluid team-img"
                alt="Lead_Image"
              />
              <h5>Het Bhalala</h5>
              <h5>Android Member</h5>
              <span></span>
              <div className="social-ico-web col-lg-12">
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
          </Fade>
        </div>
        <div className="row">
          <h3>Management Team</h3>
          <Fade up>
            <div className="col-lg-4 col-sm-12 management-team">
              <img
                src={Lead}
                className="img-fluid team-img"
                alt="Lead_Image"
              />
              <h5>Omkar Danave</h5>
              <h5>Management Lead</h5>
              <span></span>
              <div className="social-ico-web col-lg-12">
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
          </Fade>
          <Fade up>
            <div className="col-lg-4 col-sm-12 management-team">
              <img
                src={Lead}
                className="img-fluid team-img"
                alt="Lead_Image"
              />
              <h5>Krishna Waske</h5>
              <h5>Management Member</h5>
              <span></span>
              <div className="social-ico-web col-lg-12">
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
          </Fade>
          <Fade up>
            <div className="col-lg-4 col-sm-12 management-team">
              <img
                src={Lead}
                className="img-fluid team-img"
                alt="Lead_Image"
              />
              <h5>Shrusti Kharche</h5>
              <h5>Management Member</h5>
              <span></span>
              <div className="social-ico-web col-lg-12">
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
          </Fade>
        </div>
        <div className="row">
          <h3>Design & Social Media Team</h3>
          <Fade up>
            <div className="col-lg-6 col-sm-12 design-team">
              <img
                src={Lead}
                className="img-fluid team-img"
                alt="Lead_Image"
              />
              <h5>Sanyukta Kamble</h5>
              <h5>Social Media Lead</h5>
              <span></span>
              <div className="social-ico-web col-lg-12">
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
          </Fade>
          <Fade up>
            <div className="col-lg-6 col-sm-12 design-team">
              <img
                src={Lead}
                className="img-fluid team-img"
                alt="Lead_Image"
              />
              <h5>Pornima Lokhande</h5>
              <h5>Design Lead</h5>
              <span></span>
              <div className="social-ico-web col-lg-12">
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
          </Fade>
        </div>
      </div>
    </>
  );
};

export default Team;
