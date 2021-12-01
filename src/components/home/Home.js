import React from "react";
// import Bubbles from "../bubbles/Bubbles";
import "./Home.css";

const Home = () => {
  return (
    <div className="container home">
      <div className="contents">
        <div className="row">
          <div className="column ">
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
                <button className="beamember-btn ">Be a Member</button>
              </li>
            </ul>
          </div>
          <div className="column home-svg">
            <img src="./images/home/home_svg.png" alt="" />
          </div>
        </div>

        <div className="container d-flex align-items-center justify-content-center mt-5">
          <div className="all-divs">
            <h1 className="text-center">Events & Workshop</h1>
          </div>
        </div>
        <div class="container events">
          <div class="card">
            <div class="card-content">
              <a href="#">
                <img src="./images/home/card.jpg" class="img-fluid event-img"></img>
              </a>
            </div>
          </div>
          <div class="card">
            <div class="card-content">
              <a href="#">
                <img src="./images/home/card.jpg" class="img-fluid event-img"></img>
              </a>
            </div>
          </div>
          <div class="card">
            <div class="card-content">
              <a href="#">
                <img src="./images/home/card.jpg" class="img-fluid event-img"></img>
              </a>
            </div>
          </div>
        </div>
        <div className="container d-flex align-items-center justify-content-center">
          <div className="all-divs">
            <h1 className="text-center">About Community</h1>

            <p className="text-center">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus
              soluta, in explicabo aliquid totam et. Ipsam temporibus modi,
              beatae aliquam iusto minus iure, nemo, laboriosam sit vero et id
              maxime. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Exercitationem officiis, fugiat quisquam consequuntur ex
              voluptatem dolorem mollitia blanditiis culpa eum.
            </p>
            <div className="btn-section">
              <button className="other-btns">Check Out</button>
            </div>
          </div>
        </div>

        <div className="container d-flex align-items-center justify-content-center">
          <div className="all-divs">
            <h1 className="text-center">Our Blog</h1>
            <p className="text-center">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus
              soluta, in explicabo aliquid totam et. Ipsam temporibus modi,
              beatae aliquam iusto minus iure, nemo, laboriosam sit vero et id
              maxime. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Exercitationem officiis, fugiat quisquam consequuntur ex
              voluptatem dolorem mollitia blanditiis culpa eum.
            </p>
            <div className="btn-section">
              <button className="other-btns mb-3">Check Out</button>
              <button className="other-btns">Submit Your Blog</button>
            </div>
          </div>
        </div>

        <div className="container d-flex align-items-center justify-content-center">
          <div className="all-divs">
            <h1 className="text-center">Stay Updated</h1>
            <p className="text-center">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus
              soluta, in explicabo aliquid totam et. Ipsam temporibus modi,
              beatae aliquam iusto minus iure, nemo, laboriosam sit vero et id
              maxime.
            </p>
            <div className="btn-section mb-0">
              <button className="other-btns">Join With Us</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
