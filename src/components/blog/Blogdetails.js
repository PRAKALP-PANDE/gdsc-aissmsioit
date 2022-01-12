import React from "react";
import { useParams } from "react-router-dom";

import blogs from "./blogs";

import "./Blogdetails.css";

const Blogdetails = () => {
  const { id } = useParams();
  const blog = blogs[id - 1];
  const points = blog.about.split(". ");

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
        <div id="Events" className="span_headings">
          <span>Blog Details</span>
          <span role="img" aria-label="">
            ✒️
          </span>
        </div>
      </div>
      <div className="events-container">
        <div className="blogs-card ">
          <div
            className="events-header "
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
              href={blog.BlogLink}
            >
              <img
                src={blog.imageSrc}
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
                <b> {blog.name}</b>
              </span>
              <span>
                <b>Date :</b> {blog.date}
              </span>
              <span>
                <b>Day :</b> {blog.day}
              </span>
              <span>
                <b>Author :</b> {blog.author}
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

export default Blogdetails;
