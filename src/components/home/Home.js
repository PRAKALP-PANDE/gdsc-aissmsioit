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

    numCounter("members", 600, 1);
    numCounter("organizers", 20, 100);
    numCounter("workshops", 10, 200);
    numCounter("projects", 2, 1000);
  }, []);

  const numCounter = (tagId, maxCount, speed) => {
    var initialNumber = 0;
    setInterval(() => {
      if (initialNumber < maxCount) {
        initialNumber++;
        const tagid = document.getElementById(tagId);
        if (tagid) tagid.innerText = initialNumber;
      }
    }, speed);
  };

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
      if (event_date.getTime() > curr_date.getTime() + 157237218)
        upcoming_events.push(event);
    }
  });

  const noUpcomingEvents =
    "There are no upcoming events at the moment. Please check again soon.";

  const upcoming_events_map = upcoming_events.map((event) => (
    <Card key={event.id} event={event} />
  ));

  const [eventSlider, setEventSlider] = useState(
    window.screen.width < 800 ? (
      <Slider {...settings}>
        {upcoming_events_map.length === 0 ? (
          <Fade up>
            <h5 className="text-center mb-5">{noUpcomingEvents}</h5>
          </Fade>
        ) : (
          upcoming_events_map
        )}
      </Slider>
    ) : upcoming_events_map.length === 0 ? (
      <Fade up>
        <h5 className="text-center mb-5">{noUpcomingEvents}</h5>
      </Fade>
    ) : (
      upcoming_events_map
    )
  );

  const responsive = (media) => {
    if (media.matches) {
      setEventSlider(
        <Slider {...settings}>
          {upcoming_events_map.length === 0 ? (
            <Fade up>
              <h5 className="text-center mb-5">{noUpcomingEvents}</h5>
            </Fade>
          ) : (
            upcoming_events_map
          )}
        </Slider>
      );
    } else {
      setEventSlider(
        upcoming_events_map.length === 0 ? (
          <Fade up>
            <h5 className="text-center mb-5">{noUpcomingEvents}</h5>
          </Fade>
        ) : (
          upcoming_events_map
        )
      );
    }
  };

  const media = window.matchMedia("(max-width: 800px)");
  media.addEventListener("change", responsive);
  window.onload = () => responsive(media);

  return (
    <div className="container-fluid home">
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
            <img className="cursor-pointer" src={Home_Svg} alt="Home_Svg" />
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
            <div class="container heading-text">
              <div class="row">
                <div class="col-md-12 text-center">
                  <h3 class="animate-charcter">
                    Google Developer Student Clubs
                  </h3>
                </div>
              </div>
            </div>

            <p className="member-description">
              Developer Student Clubs is a Google Developers program for
              students to learn something new, engage themselves in hackathons, events, workshops and Study Jams to grow as a #coder 
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
              <h1 className="text-center home-headings">
                Upcoming Events
                <span role="img" aria-label="">
                  ⌛
                </span>
              </h1>
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
          <div className="dot"></div>
        </div>

        <Fade up>
          <section id="counts" className="counts">
            <div className="container">
              <div className="row counters">
                <div className="col-lg-3 col-6 text-center">
                  <span id="members">0</span>

                  <p>Members</p>
                </div>

                <div className="col-lg-3 col-6 text-center">
                  <span id="organizers">0</span>
                  <p>Organizers</p>
                </div>

                <div className="col-lg-3 col-6 text-center">
                  <span id="workshops">0</span>
                  <p>Workshops</p>
                </div>

                <div className="col-lg-3 col-6 text-center">
                  <span id="projects">0</span>
                  <p>Projects</p>
                </div>
              </div>
            </div>
          </section>
        </Fade>

        <Fade up>
          <div className="container d-flex align-items-center justify-content-center mt-lg-5 mt-sm-4">
            <div className="all-divs text-center mt-lg-5">
              <Fade up>
                <h1 className="text-center team-home-headings home-headings mt-lg-0">
                  Meet Our GDSC Lead
                  <span role="img" aria-label="">
                    🙋🏻‍♀️
                  </span>
                </h1>
              </Fade>

              <Fade up>
                <div id="gdsc_lead" className="row">
                  <div className="col-lg-12 col-sm-12 member-body">
                    <img
                      src="https://i.ibb.co/QbYjh69/Prarthana-Chandak.jpg"
                      className="img-fluid lead-img"
                      alt="Lead_Image"
                    />
                    <h5>Prarthana Chandak</h5>
                    <span></span>
                    <div className="social-ico m-0">
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.linkedin.com/in/prarthana-chandak-2a84b81b7"
                      >
                        <i className="fa fa-linkedin ico-link"></i>
                      </a>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.instagram.com/prarthanachandak"
                      >
                        <i className="fa fa-instagram ico-insta"></i>
                      </a>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://github.com/prarthanachandak"
                      >
                        <i className="fa fa-github ico-github"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </Fade>

              <div className="btn-section">
                <button className="other-btns">
                  <NavLink
                    className="other-btns-link"
                    onClick={scrollToTop}
                    to="/team"
                  >
                    Meet our Team
                  </NavLink>
                </button>
              </div>
            </div>
          </div>
        </Fade>

        <Fade up>
          <div className="container d-flex align-items-center justify-content-center">
            <div className="all-divs">
              <Fade up>
                <h1 className="text-center about-home-headings home-headings mt-lg-0">
                  About Community
                  <span role="img" aria-label="">
                    🤝
                  </span>
                </h1>
              </Fade>

              <p className="text-center">
                GDSC community thrives to spread awareness about technolgies and
                engage students in multiple events so that they grow as a
                developer and meet like minded people.
              </p>
              <div className="btn-section">
                <button className="other-btns">
                  <NavLink
                    className="other-btns-link"
                    onClick={scrollToTop}
                    to="/about"
                  >
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
              <Fade up>
                <h1 className="text-center home-headings">
                  Blogs
                  <span role="img" aria-label="">
                    📚
                  </span>
                </h1>
              </Fade>

              <p className="text-center">
                Learn about the latest technologies and happening in the IT
                industry. Head to the page now to learn something new today.
              </p>
              <div className="btn-section">
                <button className="other-btns mb-3">
                  <NavLink
                    onClick={scrollToTop}
                    to="/blogs"
                    className="other-btns-link"
                  >
                    Check Out
                  </NavLink>
                </button>
                {/* <button className="other-btns">Submit Your Blog</button> */}
              </div>
            </div>
          </div>
        </Fade>

        <Fade up>
          <div className="container d-flex align-items-center justify-content-center">
            <div className="all-divs">
              <h1 className="text-center home-headings">
                Stay Updated
                <span role="img" aria-label="">
                  ⏰
                </span>
              </h1>
              <p className="text-center">
                Don’t miss out on the latest happenings happening in GDSC AISSMS
                IOIT, Pune. RSVP below to get updates about the latest workshops
                and events to be conducted by us.
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
