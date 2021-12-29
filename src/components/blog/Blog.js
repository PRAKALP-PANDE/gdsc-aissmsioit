import React from "react";
import "./Blog.css";

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
        className="row mt-4"
      >
        <div id="Events">
          <span>Blogs</span>
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
          <button className="technical_btn red_btn">Technical</button>
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
          <button className="technical_btn green_btn">Non Technical</button>
        </div>
      </div>

      <div></div>

      <div className="blog-container">
        <div
          className="blog-card"
          data-aos="fade-left"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1000"
          data-aos-delay="100"
          data-aos-anchor=".example-selector"
          data-aos-anchor-placement="top-center"
        >
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
                perferendis molestiae non nemo doloribus. Doloremque, nihil! At
                ea atque quidem! Lorem ipsum dolor sit amet consectetur,
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
        <div
          className="blog-card"
          data-aos="fade-right"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1000"
          data-aos-delay="100"
          data-aos-anchor=".example-selector"
          data-aos-anchor-placement="top-center"
        >
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
              <span className="tag tag-red">Hands-On</span>
              <h4>Heroku Hands-On Workshop</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                perferendis molestiae non nemo doloribus. Doloremque, nihil! At
                ea atque quidem!
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
        <div
          className="blog-card"
          data-aos="fade-left"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1000"
          data-aos-delay="100"
          data-aos-anchor=".example-selector"
          data-aos-anchor-placement="top-center"
        >
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
              <span className="tag tag-brown">Hands-On</span>
              <h4>Git and Github Workshop</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                perferendis molestiae non nemo doloribus. Doloremque, nihil! At
                ea atque quidem!
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
      </div>
    </>
  );
};

export default Blog;
