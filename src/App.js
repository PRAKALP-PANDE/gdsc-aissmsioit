import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Event from "./components/events/Events";

import Workshops from "./components/workshops/Workshops";
import Technologies from "./components/technologies/Technologies";
import Community from "./components/community/Community";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <Router>
      <Navbar />

      <Switch>
        <Route path="/workshops" exact component={Workshops} />
        <Route exact path="/technologies" component={Technologies} />
        <Route exact path="/events" exact component={Event} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
