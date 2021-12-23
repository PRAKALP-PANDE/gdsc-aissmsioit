import React from "react";
import { useParams } from "react-router-dom";

import workshops from "./workshops";

import "./Eventdetails.css";

const Workshopdetails = () => {
  const { id } = useParams();
  const workshop = workshops[id - 1];

  return (
    <>
      <div
        data-aos="fade-up"
        data-aos-easing="ease-in-sine"
        data-aos-duration="1000"
        data-aos-delay="100"
        data-aos-anchor=".example-selector"
        data-aos-anchor-placement="top-center"
        className="row workshops"
      >
        <div id="Worshops" className="m-4">
          <span>Workshop Details</span>
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
            <img
              src="https://source.unsplash.com/600x400/?computer"
              alt="Workshops_Image"
              className="events-image"
            />
          </div>
          <div className="events-main">
            <div
              className="events-body"
              data-aos="fade-left"
              data-aos-easing="ease-in-sine"
              data-aos-duration="1000"
              data-aos-delay="100"
              data-aos-anchor=".example-selector"
              data-aos-anchor-placement="top-center"
            >
              <span>
                <b> {workshop.name}</b>
              </span>
              <span>
                <b>Date :</b> {workshop.date}
              </span>
              <span>
                <b>Day :</b> {workshop.day}
              </span>
              <span>
                <b>Speaker :</b> {workshop.speaker}
              </span>
              <div>
                <b>Description :</b> {workshop.about}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Workshopdetails;
