import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <header class="site-navbar">
        <div class="container">
          <div class="row align-items-center nav-main">
            <div class="col-11 col-xl-2">
              <h1 class="mb-0 site-logo">
                <a href="" class="mb-0 m-0">
                  GDSC IOIT
                </a>
              </h1>
            </div>
            <div class="col-12 col-md-10">
              <nav class="site-navigation position-relative text-right">
                <ul class="site-menu">
                  <li class="">
                    <a href="">
                      <span>Home</span>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <span class="gred">Workshops</span>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <span class="gyellow">Technologies</span>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <span class="ggreen">Team</span>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <span class="gblue">Community</span>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <span class="gred">Get In Touch</span>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <span class="gyellow">Be a Member</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
