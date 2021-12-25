import React, { useState } from "react";
import "./getintouch.css";
import { Row, Col } from "react-bootstrap";
import Lottie from "react-lottie";
import animationData from "./social-media-influencer.json";
import Typewriter from "typewriter-effect";

import Animation from "../../images/getintouch/animation.svg";

import Zoom from "react-reveal/Zoom";

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
    phone: "",
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
    const { fullname, email, msg } = data;
    if (fullname.length === 0 || email.length === 0 || msg.length === 0) {
      const contactError = document.getElementById("contact_error");
      contactError.innerHTML = "Please Enter Valid Data!";
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
      //       message: msg,
      //     }),
      //   }
      // );

      setisSubmit((isSubmit = true));
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
            <div className="contact-tag  px-5">
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
                  <img src={Animation} alt="Animation Image" />
                </div>
              </Col>

              <Col sm={12} lg={7} md={7} xl={7}>
                <Zoom out>
                  <h3 id="contact_error" className="text-danger"></h3>
                  <div className="my-5 ">
                    <h2
                      className="text-center font-weight-bolder"
                      style={{
                        fontFamily: "Segoe UI",
                        fontStyle: " normal",
                        fontWeight: "bold",
                        fontSize: "30px",
                        color: "rgba(0,0,0,1)",
                      }}
                    >
                      Get in Touch
                    </h2>
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
                              className="form-control"
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
                              className="form-control"
                              id="exampleFormControlInput1"
                              name="email"
                              value={data.email}
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
                              className="form-control"
                              id="exampleFormControlTextarea1"
                              rows="3"
                              name="msg"
                              value={data.msg}
                              onChange={InputEvent}
                            ></textarea>
                          </div>
                          <div className="col-12 text-center">
                            <button
                              className="btn btn-outline-primary font-weight-bold"
                              type="submit"
                            >
                              SEND
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
