import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import "./Home.css";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Card from "./Card";

import Home_Svg from "../../images/home/home_svg.png";

import Bubbles from "../bubbles/Bubbles";

import Fade from "react-reveal/Fade";

import events from "../events/events";

import { scrollToTop } from "../footer/ScrollToTop";

const Home = () => {
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

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    // autoplay: true,
    // autoplaySpeed: 4000,
  };

  let upcoming_events = [];

  // const eventSession = JSON.parse(sessionStorage.getItem("events"));

  // let events = [];
  // if (eventSession === null) {
  //   fetch("https://gdsc-web-default-rtdb.firebaseio.com/Events.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       events = data;
  //       sessionStorage.setItem("events", JSON.stringify(events));
  //     });
  // } else events = eventSession;

  const curr_date = new Date();

  events.forEach((event) => {
    if (event.id < 4) {
      const event_date = new Date(event.date);
      if (event_date.getTime() - 157237218 < curr_date.getTime())
        upcoming_events.push(event);
    }
  });

  const upcoming_events_map = upcoming_events.map((event) => (
    <Card key={event.id} event={event} />
  ));

  const [eventSlider, setEventSlider] = useState(
    window.screen.width < 800 ? (
      <Slider {...settings}>{upcoming_events_map}</Slider>
    ) : (
      upcoming_events_map
    )
  );

  const responsive = (media) => {
    if (media.matches) {
      setEventSlider(<Slider {...settings}>{upcoming_events_map}</Slider>);
    } else {
      setEventSlider(upcoming_events_map);
    }
  };

  const media = window.matchMedia("(max-width: 800px)");
  media.addEventListener("change", responsive);
  window.onload = () => responsive(media);

  return (
    <div className="container home">
      <div className="contents">
        <div className="row">
          <div
            className="column home-svg"
            data-aos="fade-right"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1000"
            data-aos-delay="100"
            data-aos-anchor=".example-selector"
            data-aos-anchor-placement="top-center"
          >
            <img className="img-fluid" src={Home_Svg} alt="Home_Svg" />
          </div>
          <div
            className="column"
            data-aos="fade-left"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1000"
            data-aos-delay="100"
            data-aos-anchor=".example-selector"
            data-aos-anchor-placement="top-center"
          >
            <p className="member-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              fugiat soluta, eius quo ad eveniet laborum! Quo reiciendis illo
              qui quidem. Quam iste similique provident? Laboriosam quibusdam
              tempora tempore. voluptate dolorem, enim ipsum vel debitis eos
              quisquam minima quaerat quae soluta. Lorem ipsum dolor sit amet
              consectetur
            </p>
            <ul className="content">
              <li className="content-item">
                <button className="beamember-btn">
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://gdsc.community.dev/aissms-institute-of-information-technology-pune/"
                  >
                    Be a Member
                  </a>
                </button>
              </li>
            </ul>
          </div>
        </div>

        <Fade up>
          <div className="container d-flex align-items-center justify-content-center mt-5">
            <div className="all-divs mt-lg-5">
              <h1 className="text-center home-headings">Upcoming Events</h1>
            </div>
          </div>
        </Fade>

        <Fade up>
          <div className="container events mt-2 mt-lg-5">{eventSlider}</div>
        </Fade>
        <div className="dots">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
        <Fade up>
          <div className="container d-flex align-items-center justify-content-center mt-5">
            <div className="all-divs mt-lg-5">
              <h1 className="text-center home-headings mt-5 mt-lg-0">
                About Community
              </h1>

              <p className="text-center">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Possimus soluta, in explicabo aliquid totam et. Ipsam temporibus
                modi, beatae aliquam iusto minus iure, nemo, laboriosam sit vero
                et id maxime. Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Exercitationem officiis, fugiat quisquam
                consequuntur ex voluptatem dolorem mollitia blanditiis culpa
                eum.
              </p>
              <div className="btn-section">
                <button className="other-btns">
                  <NavLink onClick={scrollToTop} to="/about">
                    Check Out
                  </NavLink>
                </button>
              </div>
            </div>
          </div>
        </Fade>

        <Fade up>
          <div className="container d-flex align-items-center justify-content-center">
            <div className="all-divs">
              <h1 className="text-center home-headings">Our Blog</h1>
              <p className="text-center">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Possimus soluta, in explicabo aliquid totam et. Ipsam temporibus
                modi, beatae aliquam iusto minus iure, nemo, laboriosam sit vero
                et id maxime. Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Exercitationem officiis, fugiat quisquam
                consequuntur ex voluptatem dolorem mollitia blanditiis culpa
                eum.
              </p>
              <div className="btn-section">
                <button className="other-btns mb-3">
                  <NavLink onClick={scrollToTop} to="/blogs">
                    Check Out
                  </NavLink>
                </button>
                <button className="other-btns">Submit Your Blog</button>
              </div>
            </div>
          </div>
        </Fade>

        <Fade up>
          <div className="container d-flex align-items-center justify-content-center">
            <div className="all-divs">
              <h1 className="text-center home-headings">Stay Updated</h1>
              <p className="text-center">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Possimus soluta, in explicabo aliquid totam et. Ipsam temporibus
                modi, beatae aliquam iusto minus iure, nemo, laboriosam sit vero
                et id maxime.
              </p>
              <div className="btn-section mb-0">
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://gdsc.community.dev/aissms-institute-of-information-technology-pune/"
                >
                  <button className="other-btns">Join With Us</button>
                </a>
              </div>
            </div>
          </div>
        </Fade>
      </div>

      <Bubbles />
    </div>
  );
};

export default Home;
