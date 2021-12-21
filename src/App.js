import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter,
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
import Community from "./components/community/Community";
import Blog from "./components/blog/Blog";
import GetInTouch from "./components/getintouch/GetInTouch";
import Error from "./components/error/Error";

import AOS from "aos";
import "aos/dist/aos.css";

import "./App.css";

const App = () => {
  useEffect(() => {
    AOS.init();
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
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/events" exact component={Event} />
            <Route path="/events/:id/" exact component={Eventdetails} />
            <Route path="/blogs" exact component={Blog} />
            <Route path="/team" exact component={Team} />
            <Route path="/community" exact component={Community} />
            <Route path="/getintouch" exact component={GetInTouch} />
            <Route path="*" exact component={Error} />
          </Switch>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
