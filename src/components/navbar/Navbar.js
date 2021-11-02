import React from "react";
import { NavLink } from "react-router-dom";
import MenuOpenIcon from "@material-ui/icons/MenuOpen";
import "./Navbar.css";

const Navbar = () => {
  const toggle = () => {
    const mainNav = document.getElementById("main-ul");
    if (mainNav.style.display === "none") mainNav.style.display = "block";
    else mainNav.style.display = "none";
  };

  const responsive = (media) => {
    const mainNav = document.getElementById("main-ul");
    const hamburgerIcon = document.getElementById("hamburger-icon");
    if (media.matches) {
      mainNav.style.display = "block";
      hamburgerIcon.classList.remove("d-none");
    } else {
      mainNav.style.display = "flex";
      hamburgerIcon.classList.add("d-none");
    }
  };

  const media = window.matchMedia("(max-width: 800px)");
  media.addEventListener("change", responsive);

  return (
    <div>
      <header class="site-navbar">
        <div class="container">
          <div class="row align-items-center nav-main">
            <div class="col-11 col-xl-2">
              <h1 class="mb-0 site-logo">
                <a href="" class="mb-0 m-0">
                  GDSC IOIT
                  <MenuOpenIcon
            onClick={toggle}
            className={window.screen.width < 800 ? "" : "d-none"}
            id="hamburger-icon"
          />
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
