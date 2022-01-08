import React from "react";
import "./Blog.css";

import Fade from "react-reveal/Fade";

const Blog = () => {
  return (
    <>
      <div
        data-aos="fade-down"
        data-aos-easing="ease-in-sine"
        data-aos-duration="1000"
        data-aos-delay="100"
        data-aos-anchor=".example-selector"
        data-aos-anchor-placement="top-center"
        className="row mt-1 pl-lg-5 ml-lg-2"
      >
        <div id="Events">
          <span>Blogs</span>
          <span role="img" aria-label="">
            
          </span>
        </div>
      </div>
      <div className="row">
        <div
          className="col-6 Upcoming"
          data-aos="fade-right"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1000"
          data-aos-delay="100"
          data-aos-anchor=".example-selector"
          data-aos-anchor-placement="top-center"
        >
          <button className="technical_btn red_btn">Technical</button>
        </div>
        <div
          className="col-6 Past"
          data-aos="fade-left"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1000"
          data-aos-delay="100"
          data-aos-anchor=".example-selector"
          data-aos-anchor-placement="top-center"
        >
          <button className="technical_btn green_btn">Non Technical</button>
        </div>
      </div>

      <div className="blog-container">
        <Fade right>
          <div className="blog-card">
            <div className="card__header">
              <div className="card-image">
                <img
                  src="https://source.unsplash.com/600x400/?computer"
                  alt="card__image"
                  className="card__image"
                  width="600"
                />
              </div>
            </div>
            <div className="card_main">
              <div className="card__body">
                <span className="tag tag-blue">Cloud</span>
                <h4>30 Days of Google Cloud</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                  perferendis molestiae non nemo doloribus. Doloremque, nihil!
                  At ea atque quidem! Lorem ipsum dolor sit amet consectetur,
                  adipisicing elit.
                </p>
              </div>

              <div className="card__footer">
                <div className="user">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://gdsc.community.dev/u/m8vetm/"
                  >
                    <img
                      src="https://i.pravatar.cc/40?img=68"
                      alt="user__image"
                      className="user__image"
                    />
                  </a>
                  <div className="user__info">
                    <h5>Shriniwas Khond</h5>
                    <small>2h ago</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Fade>
        <Fade left>
          <div className="blog-card">
            <div className="card__header">
              <img
                src="https://source.unsplash.com/600x400/?computer"
                alt="card__image"
                className="card__image"
                width="600"
              />
            </div>
            <div className="card_main">
              <div className="card__body">
                <span className="tag tag-green">Hands-On</span>
                <h4>Heroku Hands-On Workshop</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                  perferendis molestiae non nemo doloribus. Doloremque, nihil!
                  At ea atque quidem!
                </p>
              </div>

              <div className="card__footer">
                <div className="user">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://gdsc.community.dev/u/mw4r7j/"
                  >
                    <img
                      src="https://i.pravatar.cc/40?img=68"
                      alt="user__image"
                      className="user__image"
                    />
                  </a>
                  <div className="user__info">
                    <h5>Ashish Patil</h5>
                    <small>2h ago</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Fade>
        <Fade right>
          <div className="blog-card">
            <div className="card__header">
              <img
                src="https://source.unsplash.com/600x400/?computer"
                alt="card__image"
                className="card__image"
                width="600"
              />
            </div>
            <div className="card_main">
              <div className="card__body">
                <span className="tag tag-green">Hands-On</span>
                <h4>Git and Github Workshop</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                  perferendis molestiae non nemo doloribus. Doloremque, nihil!
                  At ea atque quidem!
                </p>
              </div>

              <div className="card__footer">
                <div className="user">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://i.pravatar.cc/40?img=68"
                  >
                    <img
                      src="https://i.pravatar.cc/40?img=68"
                      alt="user__image"
                      className="user__image"
                    />
                  </a>
                  <div className="user__info">
                    <h5>Aditya Ghandhamal</h5>
                    <small>2h ago</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </>
  );
};

export default Blog;
