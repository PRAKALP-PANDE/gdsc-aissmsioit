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

import CloseButton from "../../images/event/close.png";

const Home = () => {
  const useForm = (initialValues) => {
    const [values, setValues] = useState(initialValues);

    return [
      values,
      (e) => {
        setValues({
          ...values,
          [e.target.name]: e.target.value,
        });
      },
    ];
  };
  const [values, handleChange] = useForm({ email: "", title: "" });

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
  useEffect(() => {
    const popUp = document.getElementsByClassName("pop-up")[0];
    const submitblogbtn = document.getElementsByClassName("submitblog-btn")[0];
    const close = document.getElementsByClassName("close")[0];
    submitblogbtn.addEventListener("click", () => {
      popUp.classList.add("open");
    });

    close.addEventListener("click", () => {
      popUp.classList.remove("open");
    });
  });
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

  const submitBlogIdea = (id) => {
    document.getElementById(id).scrollIntoView({
      behavior: "smooth",
    });
  };

  const [blogIdea, setBlogIdea] = useState("");

  const InputBlog = (event) => {
    setBlogIdea(event.target.value);
  };

  const submitBlogIdeaForm = async (event) => {
    event.preventDefault();
    const submitBlogIdeaError = document.getElementById("submitBlogIdeaError");
    if (blogIdea.length === 0) {
      submitBlogIdeaError.classList.remove("d-none");
    } else {
      submitBlogIdeaError.classList.add("d-none");
    }
  };

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
            <div className="heading-text mt-5">
              <div className="text-center">
                <h2 className="animate-character">
                  Google Developer Student Clubs
                </h2>
              </div>
            </div>

            <p className="member-description">
              Developer Student Clubs is a Google Developers program for
              students to learn something new, engage themselves in hackathons,
              events, workshops and Study Jams to grow as a #coder
            </p>
            <ul>
              <li className="content-item">
                <button className="other-btns">
                  <a
                    rel="noreferrer"
                    target="_blank"
                    className="other-btns-link"
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
              <h1 className="text-center home-headings mt-5">
                Upcoming Events
                <span role="img" aria-label="">
                  ⌛
                </span>
              </h1>
            </div>
          </div>
        </Fade>

        <Fade up>
          <div className="container events mt-2 mt-lg-5 mb-5">
            {eventSlider}
          </div>
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
          <section id="counts" className="counts mb-5">
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

        <div className="container gdsc-revolve">
          <Fade up>
            <h1 className="text-center about-home-headings home-headings mt-lg-0 mt-5">
              GDSC Revolves Around
              <span role="img" aria-label="">
                🔁
              </span>
            </h1>
          </Fade>

          <div className="row stacks pl-lg-5 pr-lg-5 ml-lg-5 mr-lg-5">
            <Fade up>
              <div className="col-lg-4 col-sm-12 stack-name">
                <span className="-button ml-domain">Machine Learning</span>
              </div>
            </Fade>
            <Fade up>
              <div className="col-lg-4 col-sm-12 stack-name">
                <span className="-button web-domain">Web Development</span>
              </div>
            </Fade>
            <Fade up>
              <div className="col-lg-4 col-sm-12 stack-name">
                <span className="-button android-domain">
                  Android Development
                </span>
              </div>
            </Fade>
          </div>

          <div className="row stacks pl-lg-5 pr-lg-5 ml-lg-5 mr-lg-5">
            <Fade up>
              <div className="col-lg-4 col-sm-12 stack-name">
                <span className="-button ai-domain">
                  Artificial Intelligence
                </span>
              </div>
            </Fade>
            <Fade up>
              <div className="col-lg-4 col-sm-12 stack-name">
                <span className="-button cloud-domain">Cloud Computing</span>
              </div>
            </Fade>
            <Fade up>
              <div className="col-lg-4 col-sm-12 stack-name">
                <span className="-button dsacp-domain">DSA / CP</span>
              </div>
            </Fade>
          </div>
        </div>

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

                <button className="other-btns">
                  <div className="container text-center">
                    <span
                      onClick={() => submitBlogIdea("pop-up")}
                      className="submitblog-btn other-btns-links"
                    >
                      <span>Submit Your Blog</span>
                    </span>
                  </div>
                </button>

                <div id="pop-up" className="pop-up popup">
                  <div className="content -content">
                    <div className="container">
                      <div className="dots dots-div">
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                      </div>

                      <span className="close">
                        <img
                          src={CloseButton}
                          width="20"
                          height="20"
                          alt="Close"
                        />
                      </span>

                      <div className="title">
                        <h1>Submit Your Blog</h1>
                      </div>

                      <div className="subscribe">
                        <h5
                          id="submitBlogIdeaError"
                          className="text-danger d-none"
                        >
                          Please Enter Valid Data!
                        </h5>
                        <form
                          className="form mt-lg-5 home_form"
                          onSubmit={submitBlogIdeaForm}
                        >
                          <input
                            type="text"
                            className="form__field form__fields"
                            placeholder="Name"
                            value={blogIdea}
                            onChange={InputBlog}
                          />
                          <input
                            type="email"
                            name="email"
                            className="form__field form__fields"
                            placeholder="Email"
                            value={values.email}
                            onChange={handleChange}
                          />
                          <input
                            type="text"
                            name="title"
                            className="form__field form__fields"
                            placeholder="Title"
                            value={values.title}
                            onChange={handleChange}
                          />

                          <textarea
                            className="form__field form__fields"
                            placeholder="Description"
                            rows="5"
                            cols="10"
                          ></textarea>

                          <button type="submit" className="btn- btn--primary">
                            Submit
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
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
