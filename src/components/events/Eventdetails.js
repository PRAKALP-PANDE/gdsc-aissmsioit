import React from "react";
import { useParams } from "react-router-dom";

import events from "events";

const Eventdetails = () => {
  const { id } = useParams();
  const event = events[id - 1];

  return <h1 className="text-center">Event Details Page {id}</h1>;
};

export default Eventdetails;
