import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {
  HashRouter,
  Switch,
  Route,
} from "react-router-dom/cjs/react-router-dom.min";

import React, { useEffect, useState } from "react";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Team from "./components/team/Team";
import Event from "./components/events/Event";
import Eventdetails from "./components/events/Eventdetails";
import Workshopdetails from "./components/events/Workshopdetails";
import Blog from "./components/blog/Blog";
import Blogdetails from "./components/blog/Blogdetails";
import GetInTouch from "./components/getintouch/GetInTouch";
import Error from "./components/error/Error";
import Community from "./components/community/Community";

import AOS from "aos";
import "aos/dist/aos.css";

import "./App.css";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);

  const [loaderDisplay, setLoaderDisplay] = useState("");
  const [contentDisplay, setContentDisplay] = useState("d-none");

  setTimeout(() => {
    setLoaderDisplay("d-none");
    setContentDisplay("");
  }, 5000);

  return (
    <>
      <div className={loaderDisplay}>
        <div className="artboard">
          <div className="domino">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
      <div className={contentDisplay}>
        <HashRouter>
          <Navbar />
          <Switch>
            <Route
              path="/"
              exact
              component={() => <Home active="active_home" />}
            />
            <Route
              path="/events"
              exact
              component={() => <Event active="active_events" />}
            />
            <Route
              path="/events/:id/"
              exact
              component={() => <Eventdetails active="active_events" />}
            />
            <Route
              path="/workshops/:id/"
              exact
              component={() => <Workshopdetails active="active_events" />}
            />
            <Route
              path="/blogs"
              exact
              component={() => <Blog active="active_blogs" />}
            />
            <Route
              path="/blogs/:id/"
              exact
              component={() => <Blogdetails active="active_blogs" />}
            />
            <Route
              path="/team"
              exact
              component={() => <Team active="active_team" />}
            />
            <Route
              path="/team/:id"
              exact
              component={() => <Team active="active_team" />}
            />
            <Route
              path="/about"
              exact
              component={() => <Community active="active_about" />}
            />
            <Route
              path="/getintouch"
              exact
              component={() => <GetInTouch active="active_contact" />}
            />
            <Route path="/gdsc-aissmsioit" component={Home} />
            <Route path="*" exact component={Error} />
          </Switch>
          <Footer />
        </HashRouter>
      </div>
    </>
  );
};

export default App;
