import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "./Team.css";

import Team_Img from "../../images/team/team2.jpg";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Fade from "react-reveal/Fade";

import Web from "./web";
import Cloud from "./cloud";
import ML from "./ml";
import Android from "./android";
import Management from "./management";
import DesignAndSocialMedia from "./designandsocialmedia";

import TeamCard from "./TeamCard";

const Team = () => {
  const { id } = useParams();

  useEffect(() => {
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
    
    if (id) {
      document.getElementById(id).scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [id]);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    // autoplay: true,
    // autoplaySpeed: 4000,
  };

  const WebTeam = Web.map((member) => (
    <TeamCard key={member.id} member={member} />
  ));

  const CloudTeam = Cloud.map((member) => (
    <TeamCard key={member.id} member={member} />
  ));

  const MLTeam = ML.map((member) => (
    <TeamCard key={member.id} member={member} />
  ));

  const AndroidTeam = Android.map((member) => (
    <TeamCard key={member.id} member={member} />
  ));

  const ManagementTeam = Management.map((member) => (
    <TeamCard key={member.id} member={member} />
  ));

  const DesignAndSocialMediaTeam = DesignAndSocialMedia.map((member) => (
    <TeamCard key={member.id} member={member} />
  ));

  const [teams, setTeams] = useState(
    window.screen.width < 800
      ? {
          web: <Slider {...settings}>{WebTeam}</Slider>,
          cloud: <Slider {...settings}>{CloudTeam}</Slider>,
          ml: <Slider {...settings}>{MLTeam}</Slider>,
          android: <Slider {...settings}>{AndroidTeam}</Slider>,
          management: <Slider {...settings}>{ManagementTeam}</Slider>,
          desginandsocialmedia: (
            <Slider {...settings}>{DesignAndSocialMediaTeam}</Slider>
          ),
        }
      : {
          web: WebTeam,
          cloud: CloudTeam,
          ml: MLTeam,
          android: AndroidTeam,
          management: ManagementTeam,
          desginandsocialmedia: DesignAndSocialMediaTeam,
        }
  );

  const responsive = (media) => {
    if (media.matches) {
      setTeams({
        web: <Slider {...settings}>{WebTeam}</Slider>,
        cloud: <Slider {...settings}>{CloudTeam}</Slider>,
        ml: <Slider {...settings}>{MLTeam}</Slider>,
        android: <Slider {...settings}>{AndroidTeam}</Slider>,
        management: <Slider {...settings}>{ManagementTeam}</Slider>,
        desginandsocialmedia: (
          <Slider {...settings}>{DesignAndSocialMediaTeam}</Slider>
        ),
      });
    } else {
      setTeams({
        web: WebTeam,
        cloud: CloudTeam,
        ml: MLTeam,
        android: AndroidTeam,
        management: ManagementTeam,
        desginandsocialmedia: DesignAndSocialMediaTeam,
      });
    }
  };

  const media = window.matchMedia("(max-width: 800px)");
  media.addEventListener("change", responsive);
  window.onload = () => responsive(media);

  return (
    <>
      <div className="container-fluid team-heading">
        <div className="row">
          <div
            className="col-lg-6 col-sm-12 vector-img"
            data-aos="fade-right"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1000"
            data-aos-delay="100"
            data-aos-anchor=".example-selector"
            data-aos-anchor-placement="top-center"
          >
            <img className="cursor-pointer" src={Team_Img} alt="Team_Image" />
          </div>
          <div
            className="col-lg 6 col-sm-12 team-body"
            data-aos="fade-left"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1000"
            data-aos-delay="100"
            data-aos-anchor=".example-selector"
            data-aos-anchor-placement="top-center"
          >
            <h1 className="font-weight-bold">
              Meet Our Team
              <span role="img" aria-label="">
                🌐
              </span>
            </h1>
            <p className="font-weight-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam. Duis aute irure dolor in reprehenderit in
              voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>
        </div>
      </div>

      <div className="container team-members">
        <Fade up>
          <div id="gdsc_lead" className="row">
            <div className="col-lg-12 col-sm-12 member-body">
              <Fade up>
                <h3 className="font-weight-bold">GDSC Lead</h3>
              </Fade>
              <img
                src="https://i.ibb.co/QbYjh69/Prarthana-Chandak.jpg"
                className="img-fluid lead-img"
                alt="Lead_Image"
              />
              <h5>Prarthana Chandak</h5>
              <span></span>
              <div className="social-ico">
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/prarthana-chandak-2a84b81b7">
                  <i className="fa fa-linkedin ico-link"></i>
                </a>
                <a target="_blank" rel="noreferrer" href="https://www.instagram.com/prarthanachandak">
                  <i className="fa fa-instagram ico-insta"></i>
                </a>
                <a target="_blank" rel="noreferrer" href="https://github.com/prarthanachandak">
                  <i className="fa fa-github ico-github"></i>
                </a>
              </div>
            </div>
          </div>
        </Fade>

        <div id="web_team" className="row">
          <Fade up>
            <h3 className="my-5 font-weight-bold">Web Team</h3>
          </Fade>
          {teams.web}
        </div>

        <div id="cloud_team" className="row">
          <Fade up>
            <h3 className="my-5 font-weight-bold">Cloud Team</h3>
          </Fade>
          {teams.cloud}
        </div>

        <div id="dsa_cp_team" className="row">
          <Fade up>
            <h3 className="my-5 font-weight-bold">DSA/CP Team</h3>
          </Fade>
          <Fade up>
            <div className="col-lg-12 col-sm-12 teams">
              <img
                src="https://i.ibb.co/K5WwkbT/HARSHAL-RAUNDAL.jpg"
                className="img-fluid team-img"
                alt="Lead_Image"
              />
              <h5>Harshal Raundal</h5>
              <h5>DSA Lead</h5>
              <span></span>
              <div className="social-ico-team col-lg-12">
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/harshal-raundal-8a25861a8">
                  <i className="fa fa-linkedin ico-link"></i>
                </a>
                <a target="_blank" rel="noreferrer" href="https://www.instagram.com/_.harshal__/">
                  <i className="fa fa-instagram ico-insta"></i>
                </a>
                <a target="_blank" rel="noreferrer" href="https://github.com/HarshalRaundal">
                  <i className="fa fa-github ico-github"></i>
                </a>
              </div>
            </div>
          </Fade>
        </div>

        <div id="ml_team" className="row">
          <Fade up>
            <h3 className="my-5 font-weight-bold">Machine Learning Team</h3>
          </Fade>
          {teams.ml}
        </div>

        <div id="android_team" className="row">
          <Fade up>
            <h3 className="my-5 font-weight-bold">Android Team</h3>
          </Fade>
          {teams.android}
        </div>

        <div id="management_team" className="row">
          <Fade up>
            <h3 className="my-5 font-weight-bold">Management Team</h3>
          </Fade>
          {teams.management}
        </div>

        <div id="design_and_socialmedia_team" className="row">
          <Fade up>
            <h3 className="my-5 font-weight-bold">
              Design and Social Media Team
            </h3>
          </Fade>
          {teams.desginandsocialmedia}
        </div>
      </div>
    </>
  );
};

export default Team;
