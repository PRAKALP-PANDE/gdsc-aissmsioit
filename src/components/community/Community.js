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
                <h5 className="card-title text-center font-weight-bolder">
                  About Us
                  <span role="img" aria-label="">
                    🔎
                  </span>
                </h5>
                <p className="card-text about-para font-weight-light">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Accusantium, quibusdam repudiandae, voluptates facere maxime
                  dolore vero, consequuntur asperiores nemo officiis debitis
                  cum? Nam magnam quis vel laborum alias, omnis itaque
                  voluptates facere maxime dolore vero, consequuntur asperiores
                  nemo officiis.
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

                  <h5 className="card-title text-center font-weight-bolder">
                    What we do
                    <span role="img" aria-label="">
                      📊
                    </span>
                  </h5>

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

      {/* <Fade up>
        <Row className="justify-content-center">
          <h5 className="card-title text-center font-weight-bolder what_we_do">
            What we do
            <span role="img" aria-label="">
              📊
            </span>
          </h5>
          <div className="container events m-0">{whatWeDoSlider}</div>
        </Row>
      </Fade> */}

      <Fade up>
        <Row className="row2 justify-content-center our_mission">
          <Col sm={12} lg={9} md={9} xl={8} className="col2">
            <div className="msg-card">
              <div className="msg-wrap mission">
                <div className="msg-block mt-4">
                  <div className="msg-title card-title text-center">
                    Our Mission and Vision
                    <span role="img" aria-label="">
                      🎯
                    </span>
                  </div>
                  <div className="msg-text text-center">
                    Lorem ipsum dolor sit amet, officia excepteur ex fugiat
                    reprehenderit enim labore culpa sint ad nisi Lorem pariatur
                    mollit ex esse exercitation amet. Nisi anim cupidatat
                    excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem
                    est aliquip amet voluptate voluptate dolor minim nulla est
                    proident.
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
