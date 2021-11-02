import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import React from "react";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Team from "./components/team/Team";
import Workshop from "./components/workshops/Workshop";
import Community from "./components/community/Community";
import Technologies from "./components/technologies/Technologies";
import GetInTouch from "./components/getintouch/GetInTouch";
import Error from "./components/error/Error";

import Workshops from "./components/workshops/Workshops";
import Technologies from "./components/technologies/Technologies";
import Community from "./components/community/Community";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/workshops" exact component={Workshop} />
        <Route path="/technologies" exact component={Technologies} />
        <Route path="/team" exact component={Team} />
        <Route path="/community" exact component={Community} />
        <Route path="/getintouch" exact component={GetInTouch} />
        <Route path="*" exact component={Error} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
