import React from "react";
import { useParams } from "react-router-dom";

import events from "./events";

import "./Eventdetails.css";

const Eventdetails = () => {
  const { id } = useParams();
  const event = events[id - 1];
  const points = event.about.split(". ");

  return (
    <>
      <div
        data-aos="fade-up"
        data-aos-easing="ease-in-sine"
        data-aos-duration="1000"
        data-aos-delay="100"
        data-aos-anchor=".example-selector"
        data-aos-anchor-placement="top-center"
        className="row"
      >
        <div id="Events">
          <span>Event Details</span>
          <span role="img" aria-label="">
            ✒️
          </span>
        </div>
      </div>
      <div className="events-container">
        <div className="events-card">
          <div
            className="events-header"
            data-aos="fade-right"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1000"
            data-aos-delay="100"
            data-aos-anchor=".example-selector"
            data-aos-anchor-placement="top-center"
          >
            <a
              title="Community Page Event Link"
              target="_blank"
              rel="noreferrer"
              href={event.eventLink}
            >
              <img
                src={event.imageSrc}
                alt="Events_Image"
                className="events-image"
              />
            </a>
          </div>
          <div
            className="events-main"
            data-aos="fade-left"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1000"
            data-aos-delay="100"
            data-aos-anchor=".example-selector"
            data-aos-anchor-placement="top-center"
          >
            <div className="events-body">
              <span>
                <b> {event.name}</b>
              </span>
              <span>
                <b>Date :</b> {event.date}
              </span>
              <span>
                <b>Day :</b> {event.day}
              </span>
              <span>
                <b>Speaker :</b> {event.speaker}
              </span>
              <div>
                <b>Description :</b>{" "}
                {points.map((point) => (
                  <li>{point}</li>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Eventdetails;
