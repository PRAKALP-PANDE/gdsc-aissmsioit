import React, { useEffect } from "react";

import "./Community.css";

import { Row, Col } from "react-bootstrap";

import Logo from "../../images/community/logo.jpg";
import about_img from "../../images/community/about.png";

import Fade from "react-reveal/Fade";

const Community = () => {
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
      <Row className="justify-content-center">
        <Col className="align-items-center" sm={12} lg={6}>
          <img
            src={about_img}
            alt="About_Image"
            className="cursor-pointer about_image"
            data-aos="fade-right"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1000"
            data-aos-delay="100"
            data-aos-anchor=".example-selector"
            data-aos-anchor-placement="top-center"
          />
        </Col>
        <Col className="about-txt align-items-center" sm={12} lg={6}>
          <div
            className="container about-body"
            data-aos="fade-left"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1000"
            data-aos-delay="100"
            data-aos-anchor=".example-selector"
            data-aos-anchor-placement="top-center"
          >
            <div className="card p-lg-5 p-0">
              <div className="card-body">
                <h1 className="card-title text-center font-weight-bolder mt-2 mb-0">
                  About Us
                  <span role="img" aria-label="">
                    🔎
                  </span>
                </h1>
                <p className="card-text about-para font-weight-light">
                  Google Developer Student Clubs (GDSC) are community groups for
                  college and university students interested in Google developer
                  technologies. Students from all undergraduate or graduate
                  programs with an interest in growing as a developer are
                  welcome. By joining a GDSC, students grow their knowledge in a
                  peer-to-peer learning environment and build solutions for
                  local businesses and their community.
                </p>
              </div>
            </div>
          </div>
        </Col>
      </Row>

      <Fade up>
        <Row className="who_block">
          <Col sm={12} lg={6} md={6} xl={6}>
            <div className="container ">
              <div className="card who">
                <div className="card-body">
                  <img
                    src={Logo}
                    className="img-fluid who-design-left"
                    alt="Logo"
                  />

                  <h2 className="card-title text-center font-weight-bolder">
                    What we do
                    <span role="img" aria-label="">
                      📊
                    </span>
                  </h2>

                  <img
                    src={Logo}
                    className="img-fluid who-design-right"
                    alt="Logo"
                  />
                  <p className="card-text pt-2 text-center">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Accusantium, quibusdam repudiandae, voluptates facere maxime
                    dolore vero, consequuntur asperiores nemo officiis debitis
                    cum? commodo ex non excepteur duis sunt velit enim.
                    Voluptate laboris sint cupidatat ullamco ut ea consectetur
                    et est culpa et culpa duis.
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Fade>

      <Fade up>
        <Row className="row2 justify-content-center our_mission">
          <Col sm={12} lg={9} md={9} xl={8} className="col2">
            <div className="msg-card">
              <div className="msg-wrap mission">
                <div className="msg-block mt-4">
                  <h2 className="msg-title card-title text-center">
                    Our Mission and Vision
                    <span role="img" aria-label="">
                      🎯
                    </span>
                  </h2>
                  <div className="msg-text text-center">
                    Our MISSION and VISION is to build an environment for
                    students where they can grow as coders and developers and
                    contribute to the community. We strive to learn and grow
                    together as one.
                  </div>
                </div>
                <div className="msg-img cursor-pointer"></div>
              </div>
            </div>
          </Col>
        </Row>
      </Fade>
    </>
  );
};

export default Community;
