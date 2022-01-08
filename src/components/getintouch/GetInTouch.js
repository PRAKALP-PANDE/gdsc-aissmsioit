import React, { useState } from "react";
import "./getintouch.css";
import { Row, Col } from "react-bootstrap";
import Lottie from "react-lottie";
import animationData from "./social-media-influencer.json";
import Typewriter from "typewriter-effect";

import Animation from "../../images/getintouch/Envelope-bro.svg";
// import Animation from "animation.svg";

import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";

const Contact = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  let [isSubmit, setisSubmit] = useState(false);

  const [data, setData] = useState({
    fullname: "",
    email: "",
    mobile_number: "",
    msg: "",
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const formSubmit = async (event) => {
    event.preventDefault();
    const { fullname, email, mobile_number, msg } = data;
    const contactError = document.getElementById("contact_error");
    if (fullname.length === 0 || email.length === 0 || mobile_number.length ===0 || msg.length === 0) {
      contactError.classList.remove("d-none");
    } else {
      // const response = await fetch(
      //   "https://gdsc-web-default-rtdb.firebaseio.com/contacts.json",
      //   {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify({
      //       name: fullname,
      //       email: email,
      //       mobile_number: mobile_number,
      //       message: msg,
      //     }),
      //   }
      // );

      setisSubmit((isSubmit = true));

      contactError.classList.add("d-none");
    }
  };

  const inputStyle = {
    border: "0px",
    borderBottom: "1px solid blue",
    borderRadius: "0%",
    color: "#00aaff",
    fontSize: "1.8vh",
    fontWeight: "bold",
    boxShadow: "0px 0px",
  };

  const labelStyle = {
    fontWeight: "bold",
    fontSize: "1.8vh",
  };

  return (
    <div className="contact-body">
      <div className="container-fluid contact-divi p-3">
        <Row>
          {isSubmit === false && (
            <div className="contact-tag px-lg-5">
              <Typewriter
                options={{
                  strings: ["Want to ask something?"],
                  autoStart: true,
                  loop: true,
                  pauseFor: 5000,
                }}
              />

              <div className="h5">
                Feel free to ask your doubts or to give us feedback
              </div>
            </div>
          )}
        </Row>

        {isSubmit === false ? (
          <div>
            <Row>
              <Col sm={12} lg={5} md={5} xl={5}>
                <div className="contact-illustration">
                  <Fade left>
                    <img className="img-fluid" src={Animation} alt="Animation_Image" />
                  </Fade>
                </div>
              </Col>

              <Col sm={12} lg={7} md={7} xl={7}>
                <Zoom out>
                  <h3 id="contact_error" className="text-danger d-none">
                    Please Enter Valid Data!
                  </h3>
                  <div className="my-5 ">
                    <h1
                      className="text-center font-weight-bolder"
                      style={{
                        fontFamily: "Google Sans",
                        fontStyle: " normal",
                        fontWeight: "bold",
                        color: "rgba(0,0,0,1)",
                      }}
                    >
                      Get in Touch
                      <span role="img" aria-label="">
                        🔗
                      </span>
                    </h1>
                  </div>
                  <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                      <div className="mb-3">
                        <form onSubmit={formSubmit}>
                          <div className="mb-3">
                            <label
                              style={labelStyle}
                              htmlFor="exampleFormControlInput1"
                              className="form-label"
                            >
                              Name
                            </label>
                            <input
                              style={inputStyle}
                              autoComplete="off"
                              type="text"
                              className="form-control contact-input"
                              id="exampleFormControlInput1"
                              name="fullname"
                              value={data.fullname}
                              onChange={InputEvent}
                            />
                          </div>

                          <div className="mb-3">
                            <label
                              style={labelStyle}
                              htmlFor="exampleFormControlInput1"
                              className="form-label"
                            >
                              Email
                            </label>
                            <input
                              style={inputStyle}
                              autoComplete="off"
                              type="email"
                              className="form-control contact-input"
                              id="exampleFormControlInput1"
                              name="email"
                              value={data.email}
                              onChange={InputEvent}
                            />
                          </div>

                          <div className="mb-3">
                            <label
                              style={labelStyle}
                              htmlFor="exampleFormControlInput1"
                              className="form-label"
                            >
                              Mobile Number
                            </label>
                            <input
                              style={inputStyle}
                              autoComplete="off"
                              type="email"
                              className="form-control contact-input"
                              id="exampleFormControlInput1"
                              name="email"
                              value={data.mobile_number}
                              onChange={InputEvent}
                            />
                          </div>

                          <div className="mb-3">
                            <label
                              style={labelStyle}
                              htmlFor="exampleFormControlTextarea1"
                              className="form-label"
                            >
                              Message
                            </label>
                            <textarea
                              style={inputStyle}
                              autoComplete="off"
                              className="form-control contact-input"
                              id="exampleFormControlTextarea1"
                              rows="3"
                              name="msg"
                              value={data.msg}
                              onChange={InputEvent}
                            ></textarea>
                          </div>
                          <div className="col-12 text-center get-btndiv">
                            <button className="get-btn">
                              <div className="svg-wrapper-1">
                                <div className="svg-wrapper">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="24"
                                    height="24"
                                  >
                                    <path fill="none" d="M0 0h24v24H0z"></path>
                                    <path
                                      fill="currentColor"
                                      d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                                    ></path>
                                  </svg>
                                </div>
                              </div>
                              <span>Send</span>
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </Zoom>
              </Col>
            </Row>
          </div>
        ) : (
          <div className="success-submit">
            <Row className="p-2 m-2">
              <Col sm={12} lg={7} md={7} xl={6.5}>
                <div className="contact-tag p-lg-5 p-0 h1">
                  <Typewriter
                    options={{
                      strings: ["Thank you for your response..."],
                      autoStart: true,
                      loop: true,
                      pauseFor: 5000,
                    }}
                  />

                  <div className="h3"> We will reach out to you soon.</div>
                </div>
              </Col>

              <Col sm={12} lg={5} md={5} xl={5}>
                <div className="lottie-social">
                  <Lottie options={defaultOptions} />
                </div>
              </Col>
            </Row>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
