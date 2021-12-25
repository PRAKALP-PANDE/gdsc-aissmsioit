import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import MenuOpenIcon from "@material-ui/icons/MenuOpen";
import "./Navbar.css";

import Gdsc_Logo from "../../images/gdsc_logo.png";

const Navbar = () => {
  useEffect(() => {
    const mainNav = document.getElementById("main-ul");
    window.screen.width < 800
      ? (mainNav.style.display = "none")
      : (mainNav.style.display = "block");

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
  });

  const toggle = () => {
    const mainNav = document.getElementById("main-ul");
    const hamburgerIcon = document.getElementById("hamburger-icon");

    if (mainNav.style.display === "none") {
      setTimeout(() => {
        mainNav.style.display = "block";
        hamburgerIcon.classList.add("toggle-up");
        hamburgerIcon.classList.remove("toggle-down");
      }, 100);
    } else {
      setTimeout(() => {
        mainNav.style.display = "none";
        hamburgerIcon.classList.add("toggle-down");
        hamburgerIcon.classList.remove("toggle-up");
      }, 100);
    }
  };

  const responsive = (media) => {
    const mainNav = document.getElementById("main-ul");
    const hamburgerIcon = document.getElementById("hamburger-icon");
    if (media.matches) {
      hamburgerIcon.classList.remove("d-none");
      mainNav.style.display = "none";
    } else {
      hamburgerIcon.classList.add("d-none");
      mainNav.style.display = "block";
    }
  };

  const media = window.matchMedia("(max-width: 800px)");
  media.addEventListener("change", responsive);

  const NavDisplay = () => {
    const mainNav = document.getElementById("main-ul");
    const hamburgerIcon = document.getElementById("hamburger-icon");
    hamburgerIcon.classList.add("toggle-down");
    hamburgerIcon.classList.remove("toggle-up");

    window.screen.width < 800
      ? (mainNav.style.display = "none")
      : (mainNav.style.display = "block");
  };

  return (
    <div id="Navbar">
      <header className="site-navbar">
        <div className="container">
          <div className="row align-items-center nav-main">
            <div className="col-11 col-xl-4">
              <h1 className="m-2 site-logo">
                <div className="m-2">
                  <NavLink to="/">
                    <img className="logo img-fluid" src={Gdsc_Logo} alt="Gdsc Logo" />
                  </NavLink>
                  <MenuOpenIcon
                    onClick={toggle}
                    className={window.screen.width < 800 ? "" : "d-none"}
                    id="hamburger-icon"
                  />
                </div>
              </h1>
            </div>
            <div className="col-12 col-md-8 second-div">
              <nav className="site-navigation position-relative text-right">
                <ul id="main-ul" className="site-menu">
                  <li>
                    <NavLink to="/">
                      <span onClick={NavDisplay}>Home</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/events">
                      <span onClick={NavDisplay} className="gred">
                        Events
                      </span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/blogs">
                      <span onClick={NavDisplay} className="gyellow">
                        Blogs
                      </span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/team">
                      <span onClick={NavDisplay} className="ggreen">
                        Team
                      </span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/about">
                      <span onClick={NavDisplay} className="gblue">
                        About
                      </span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/getintouch">
                      <span onClick={NavDisplay} className="gred">
                        Get In Touch
                      </span>
                    </NavLink>
                  </li>
                  <li>
                    <a
                      rel="noreferrer"
                      target="_blank"
                      href="https://gdsc.community.dev/aissms-institute-of-information-technology-pune/"
                    >
                      <span onClick={NavDisplay} className="gyellow beamember">
                        Be a Member
                      </span>
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
