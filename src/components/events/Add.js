import React from "react";
import events from "events";

const Add = () => {
  events.forEach(async (event) => {
    const response = await fetch(
      "https://gdsc-web-default-rtdb.firebaseio.com/Events.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: event.name,
          date: event.date,
          day: event.day,
          about: event.about,
          speaker: event.speaker,
          guest: event.guest,
          recording: event.recording,
        }),
      }
    );
  });
  return <h1>Done!</h1>;
};

export default Add;
