import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom/cjs/react-router-dom.min";

import React, { useEffect } from "react";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Team from "./components/team/Team";
import Event from "./components/events/Event";
import Community from "./components/community/Community";
import Blog from "./components/blog/Blog";
import GetInTouch from "./components/getintouch/GetInTouch";
import Error from "./components/error/Error";

import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/events" exact component={Event} />
        <Route path="/blogs" exact component={Blog} />
        <Route path="/team" exact component={Team} />
        <Route path="/community" exact component={Community} />
        <Route path="/getintouch" exact component={GetInTouch} />
        <Route path="*" exact component={Error} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
