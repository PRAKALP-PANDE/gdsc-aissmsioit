import React, { useEffect, useState } from "react";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./Event.css";

import EventCard from "./EventCard";
import WorkshopCard from "./WorkshopCard";

import events from "./events";
import workshops from "./workshops";

import CloseButton from "../../images/event/close.png";
import Gdsc_Logo from "../../images/google_gdsc_logo.png";

import Fade from "react-reveal/Fade";

const Event = () => {
  useEffect(() => {
    const upcomingEvents = document.getElementById("Upcoming_Events_Span");
    const pastEvents = document.getElementById("Past_Events_Span");
    const upcomingWorkshops = document.getElementById(
      "Upcoming_Workshops_Span"
    );
    const pastWorkshops = document.getElementById("Past_Workshops_Span");

    upcomingEvents.addEventListener("click", () => {
      upcomingEvents.classList.remove("btn-14");
      upcomingEvents.classList.add("btn-13");
      pastEvents.classList.remove("btn-13");
      pastEvents.classList.add("btn-14");
    });

    pastEvents.addEventListener("click", () => {
      pastEvents.classList.remove("btn-14");
      pastEvents.classList.add("btn-13");
      upcomingEvents.classList.add("btn-14");
      upcomingEvents.classList.remove("btn-13");
    });

    upcomingWorkshops.addEventListener("click", () => {
      upcomingWorkshops.classList.remove("btn-14");
      upcomingWorkshops.classList.add("btn-13");
      pastWorkshops.classList.remove("btn-13");
      pastWorkshops.classList.add("btn-14");
    });

    pastWorkshops.addEventListener("click", () => {
      pastWorkshops.classList.remove("btn-14");
      pastWorkshops.classList.add("btn-13");
      upcomingWorkshops.classList.add("btn-14");
      upcomingWorkshops.classList.remove("btn-13");
    });

    const popUp = document.getElementsByClassName("pop-up")[0];
    const button = document.getElementsByClassName("button")[0];
    const close = document.getElementsByClassName("close")[0];

    button.addEventListener("click", () => {
      popUp.classList.add("open");
    });

    close.addEventListener("click", () => {
      popUp.classList.remove("open");
    });
  });

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    // autoplay: true,
    // autoplaySpeed: 4000,
  };

  let upcoming_events = [],
    past_events = [],
    live_events = [],
    upcoming_workshops = [],
    past_workshops = [],
    live_workshops = [];

  // const eventSession = JSON.parse(sessionStorage.getItem("events"));
  // const workshopSession = JSON.parse(sessionStorage.getItem("workshops"));

  // let events = [];
  // if (eventSession === null) {
  //   fetch("https://gdsc-web-default-rtdb.firebaseio.com/Events.json")
  //     .then((res) => res.json())
  //     .then((data) => (events = data));
  //   sessionStorage.setItem("events", JSON.stringify(events));
  // } else events = eventSession;

  // let workshops = [];
  // if (workshopSession === null) {
  //   fetch("https://gdsc-web-default-rtdb.firebaseio.com/Events.json")
  //     .then((res) => res.json())
  //     .then((data) => (workshops = data));
  //   sessionStorage.setItem("workshops", JSON.stringify(workshops));
  // } else workshops = workshopSession;

  const curr_date = new Date();

  events.forEach((event) => {
    if (event) {
      const event_date = new Date(event.date);
      if (event_date.getTime() < curr_date.getTime() - 157237218)
        past_events.push(event);
      else if (event_date.getTime() > curr_date.getTime() + 157237218)
        upcoming_events.push(event);
      else live_events.push(event);
    }
  });

  workshops.forEach((workshop) => {
    if (workshop) {
      const workshop_date = new Date(workshop.date);
      if (workshop_date.getTime() < curr_date.getTime() - 157237218)
        past_workshops.push(workshop);
      else if (workshop_date.getTime() > curr_date.getTime() + 157237218)
        upcoming_workshops.push(workshop);
      else live_workshops.push(workshop);
    }
  });

  const upcoming_events_map = upcoming_events.map((event, index) => (
    <EventCard key={event.id} event={event} />
  ));

  const past_events_map = past_events.map((event, index) => (
    <EventCard key={event.id} event={event} />
  ));

  // const live_events_map = live_events.map((event, index) => (
  //   <EventCard key={event.id} event={event} />
  // ));

  const upcoming_workshops_map = upcoming_workshops.map((workshop, index) => (
    <WorkshopCard key={workshop.id} workshop={workshop} />
  ));

  const past_workshops_map = past_workshops.map((workshop, index) => (
    <WorkshopCard key={workshop.id} workshop={workshop} />
  ));

  // const live_workshops_map = live_workshops.map((workshop, index) => (
  //   <WorkshopCard key={workshop.id} workshop={workshop} />
  // ));

  const noUpcomingEvents =
    "There are no upcoming events at the moment. Please check again soon.";
  const noUpcomingWorkshops =
    "There are no upcoming workshops at the moment. Please check again soon.";

  const [eventSlider, setEventSlider] = useState(
    window.screen.width < 800 ? (
      <Slider {...settings}>
        {upcoming_events_map.length === 0 ? (
          <h5 className="text-center" data-aos="fade-up">
            {noUpcomingEvents}
          </h5>
        ) : (
          upcoming_events_map
        )}
      </Slider>
    ) : upcoming_events_map.length === 0 ? (
      <h5 className="text-center" data-aos="fade-up">
        {noUpcomingEvents}
      </h5>
    ) : (
      upcoming_events_map
    )
  );

  const [workshopSlider, setWorkshopSlider] = useState(
    window.screen.width < 800 ? (
      <Slider {...settings}>
        {upcoming_workshops_map.length === 0 ? (
          <Fade up>
            <h5 className="text-center">{noUpcomingWorkshops}</h5>
          </Fade>
        ) : (
          upcoming_workshops_map
        )}
      </Slider>
    ) : upcoming_workshops_map.length === 0 ? (
      <Fade up>
        <h5 className="text-center">{noUpcomingWorkshops}</h5>
      </Fade>
    ) : (
      upcoming_workshops_map
    )
  );

  const responsive = (media) => {
    if (media.matches) {
      setEventSlider(
        <Slider {...settings}>
          {upcoming_events_map.length === 0 ? (
            <h5 className="text-center" data-aos="fade-up">
              {noUpcomingEvents}
            </h5>
          ) : (
            upcoming_events_map
          )}
        </Slider>
      );
      setWorkshopSlider(
        <Slider {...settings}>
          {upcoming_workshops_map.length === 0 ? (
            <Fade up>
              <h5 className="text-center">{noUpcomingWorkshops}</h5>
            </Fade>
          ) : (
            upcoming_workshops_map
          )}
        </Slider>
      );
    } else {
      setEventSlider(
        upcoming_events_map.length === 0 ? (
          <h5 className="text-center" data-aos="fade-up">
            {noUpcomingEvents}
          </h5>
        ) : (
          upcoming_events_map
        )
      );
      setWorkshopSlider(
        upcoming_workshops_map.length === 0 ? (
          <Fade up>
            <h5 className="text-center">{noUpcomingWorkshops}</h5>
          </Fade>
        ) : (
          upcoming_workshops_map
        )
      );
    }
  };

  const media = window.matchMedia("(max-width: 800px)");
  media.addEventListener("change", responsive);
  window.onload = () => responsive(media);

  const upcomingEventsClick = () => {
    setEventSlider(
      window.screen.width < 800 ? (
        <Slider {...settings}>
          {upcoming_events_map.length === 0 ? (
            <h5 className="text-center" data-aos="fade-up">
              {noUpcomingEvents}
            </h5>
          ) : (
            upcoming_events_map
          )}
        </Slider>
      ) : upcoming_events_map.length === 0 ? (
        <h5 className="text-center" data-aos="fade-up">
          {noUpcomingEvents}
        </h5>
      ) : (
        upcoming_events_map
      )
    );
  };

  const pastEventsClick = () => {
    setEventSlider(
      window.screen.width < 800 ? (
        <Slider {...settings}>{past_events_map}</Slider>
      ) : (
        past_events_map
      )
    );
  };

  const upcomingWorkshopsClick = () => {
    setWorkshopSlider(
      window.screen.width < 800 ? (
        <Slider {...settings}>
          {upcoming_workshops_map.length === 0 ? (
            <Fade up>
              <h5 className="text-center">{noUpcomingWorkshops}</h5>
            </Fade>
          ) : (
            upcoming_workshops_map
          )}
        </Slider>
      ) : upcoming_workshops_map.length === 0 ? (
        <Fade up>
          <h5 className="text-center">{noUpcomingWorkshops}</h5>
        </Fade>
      ) : (
        upcoming_workshops_map
      )
    );
  };

  const pastWorkshopsClick = () => {
    setWorkshopSlider(
      window.screen.width < 800 ? (
        <Slider {...settings}>{past_workshops_map}</Slider>
      ) : (
        past_workshops_map
      )
    );
  };

  return (
    <>
      {/* <a
        className="group"
        id="page-wrap"
        target="_blank"
        rel="external noopener"
      >
        <div id="inner-wrap">
          <svg
            className="waves"
            xmlns="http://www.w3.org/2000/svg"
            width="1660"
            height="321.75"
            viewBox="0 0 960 214.5"
            preserveAspectRatio="xMinYMid meet"
          >
            <defs>
              <linearGradient id="a">
                <stop stopColor="#00A8DE" />
                <stop offset="0.2" stopColor="#333391" />
                <stop offset="0.4" stopColor="#E91388" />
                <stop offset="0.6" stopColor="#EB2D2E" />
              </linearGradient>
            </defs>
            <path
              fill="url(#a)"
              d="M2662.6 1S2532 41.2 2435 40.2c-19.6-.2-37.3-1.3-53.5-2.8 0 0-421.3-59.4-541-28.6-119.8 30.6-206.2 75.7-391 73.3-198.8-2-225.3-15-370.2-50-145-35-218 37-373.3 36-19.6 0-37.5-1-53.7-3 0 0-282.7-36-373.4-38C139 26 75 46-1 46v106c17-1.4 20-2.3 37.6-1.2 130.6 8.4 210 56.3 287 62.4 77 6 262-25 329.3-23.6 67 1.4 107 22.6 193 23.4 155 1.5 249-71 380-62.5 130 8.5 209 56.3 287 62.5 77 6 126-18 188-18 61.4 0 247-38 307.4-46 159.3-20 281.2 29 348.4 30 67 2 132.2 6 217.4 7 39.3 0 87-11 87-11V1z"
            />
            <path
              fill="#F2F5F5"
              d="M2663.6 73.2S2577 92 2529 89c-130.7-8.5-209.5-56.3-286.7-62.4s-125.7 18-188.3 18c-5 0-10-.4-14.5-.7-52-5-149.2-43-220.7-39-31.7 2-64 14-96.4 30-160.4 80-230.2-5.6-340.4-18-110-12-146.6 20-274 36S820.4 0 605.8 0C450.8 0 356 71 225.2 62.2 128 56 60.7 28-.3 11.2V104c22 7.3 46 14.2 70.4 16.7 110 12.3 147-19.3 275-35.5s350 39.8 369 43c27 4.3 59 8 94 10 13 .5 26 1 39 1 156 2 250-70.3 381-62 130.5 8.2 209.5 56.3 286.7 62 77 6.4 125.8-18 188.3-17.5 5 0 10 .2 14.3.6 52 5 145 49.5 220.7 38.2 32-5 64-15 96.6-31 160.5-79.4 230.3 6 340 18.4 110 12 146.3-20 273.7-36l15.5-2V73l1-.5z"
            />
            <g fill="none" stroke="#E2E9E9" strokeWidth="1">
              <path d="M0 51.4c3.4.6 7.7 1.4 11 2.3 133.2 34 224.3 34 308.6 34 110.2 0 116.7 36.6 229.8 26 113-11 128.7-44 222-42.6C865 73 889 38 1002 27c113-10.8 119.6 25.6 229.8 25.6 84.4 0 175.4 0 308.6 34 133 34.2 277-73 379.4-84.3 204-22.5 283.6 128.7 283.6 128.7" />
              <path d="M0 6C115.7-6 198.3 76.6 308 76.6c109.6 0 131.8-20 223-28.3 114.3-10.2 238.2 0 238.2 0s124 10.2 238.3 0c91-8.2 113.2-28 223-28S1425 103 1541 91c115.8-11.8 153.3-69 269.3-84.6 116-15.5 198.4 71 308 71 109.8 0 131.8-20 223-28 114-10.2 237.7 0 237.7 0s37.4 2.4 82.8 3.7" />
            </g>
          </svg>
        </div>
      </a> */}
      <div className="container-fluid main">
        <div
          data-aos="fade-down"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1000"
          data-aos-delay="100"
          data-aos-anchor=".example-selector"
          data-aos-anchor-placement="top-center"
          className="row"
        >
          <div id="Events">
            <span>Events</span>
            <span role="img" aria-label="">
              📆
            </span>
          </div>
          <div className="Rectangle_6_Div">
            <svg className="Rectangle_6">
              <rect
                className="Rectangle_6_Rect"
                rx="2.5557963848114014"
                ry="2.5557963848114014"
                x="100"
                y="0"
                width="102.232"
                height="5.112"
              ></rect>
            </svg>
          </div>
        </div>
        <div className="row">
          <div
            data-aos="fade-right"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1000"
            data-aos-delay="100"
            data-aos-anchor=".example-selector"
            data-aos-anchor-placement="top-center"
            className="col-6 Upcoming"
          >
            <button
              id="Upcoming_Events_Span"
              className="custom-btn btn-13 Upcoming_Span"
              onClick={upcomingEventsClick}
            >
              <span>Upcoming Events</span>
            </button>
          </div>
          <div
            data-aos="fade-left"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1000"
            data-aos-delay="100"
            data-aos-anchor=".example-selector"
            data-aos-anchor-placement="top-center"
            className="col-6 Past"
          >
            <button
              id="Past_Events_Span"
              className="custom-btn btn-14 Past_Span"
              onClick={pastEventsClick}
            >
              <span>Past Events</span>
            </button>
          </div>
        </div>
        <div className="container mt-5">
          <div className="row">{eventSlider}</div>
        </div>

        <Fade up>
          <div className="container text-center submit_event_idea">
            <span className="cta button">
              <span>Submit Event Idea</span>
              <svg width="13px" height="10px" viewBox="0 0 13 10">
                <path d="M1,5 L11,5"></path>
                <polyline points="8 1 12 5 8 9"></polyline>
              </svg>
            </span>
          </div>
        </Fade>

        <div id="pop-up" className="pop-up">
          <div className="content">
            <div className="container">
              <div className="dots">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
              </div>

              <span className="close">
                <img width="20" height="20" src={CloseButton} alt="Close" />
              </span>

              <div className="title">
                <h1>Submit Your Event Idea</h1>
              </div>

              <img src={Gdsc_Logo} alt="GDSC LOGO" />

              <div className="subscribe">
                <h1>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.{" "}
                  <span>Deleniti &amp; quibusdam!</span>.
                </h1>

                <form className="form">
                  <input
                    type="email"
                    className="form__field"
                    placeholder="Your Idea"
                  />
                  <button
                    type="button"
                    className="btn- btn--primary btn--inside"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        <Fade up>
          <div className="row workshops">
            <div id="Worshops">
              <span>Workshops </span>
              <span role="img" aria-label="">
                👨‍💻
              </span>
            </div>
            <div className="Rectangle_6_Div">
              <svg className="Rectangle_6">
                <rect
                  className="Rectangle_6_Rect"
                  rx="2.5557963848114014"
                  ry="2.5557963848114014"
                  x="100"
                  y="0"
                  width="102.232"
                  height="5.112"
                ></rect>
              </svg>
            </div>
          </div>
        </Fade>

        <div className="row">
          <Fade up>
            <div className="col-6 Upcoming">
              <button
                id="Upcoming_Workshops_Span"
                className="custom-btn btn-13 Upcoming_Span Upcoming_Workshops_Span"
                onClick={upcomingWorkshopsClick}
              >
                <span>Upcoming Workshops</span>
              </button>
            </div>
          </Fade>

          <Fade up>
            <div className="col-6 Past">
              <button
                id="Past_Workshops_Span"
                className="custom-btn btn-14 Past_Span Past_Workshops_Span"
                onClick={pastWorkshopsClick}
              >
                <span>Past Workshops</span>
              </button>
            </div>
          </Fade>
        </div>

        <div className="container mt-5">
          <div className="row">{workshopSlider}</div>
        </div>
      </div>
    </>
  );
};

export default Event;
