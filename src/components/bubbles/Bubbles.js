import React from "react";
import "./Bubbles.css";

import Gdsc_Red from "../../images/home/gdsc-red.png";
import Gdsc_Blue from "../../images/home/gdsc-blue.png";
import Gdsc_Yellow from "../../images/home/gdsc-yellow.png";
import Gdsc_Green from "../../images/home/gdsc-green.png";

const Bubbles = () => {
  return (
    <div>
      <section className="sticky">
        <img className="bubble red" src={Gdsc_Red} alt="Gdsc_Red" />
        <img className="bubble blue" src={Gdsc_Blue} alt="Gdsc_Blue" />
        <img className="bubble green" src={Gdsc_Green} alt="Gdsc_Green" />
        <img className="bubble yellow" src={Gdsc_Yellow} alt="Gdsc_Yellow" />
        <img className="bubble red" src={Gdsc_Red} alt="Gdsc_Red" />
        <img className="bubble blue" src={Gdsc_Blue} alt="Gdsc_Blue" />
        <img className="bubble green" src={Gdsc_Green} alt="Gdsc_Green" />
        <img className="bubble yellow" src={Gdsc_Yellow} alt="Gdsc_Yellow" />
        {/* <img className="bubble red" src={Gdsc_Red} alt="Gdsc_Red" />
        <img className="bubble blue" src={Gdsc_Blue} alt="Gdsc_Blue" />
        <img className="bubble red" src={Gdsc_Yellow} alt="Gdsc_Yellow" />
        <img className="bubble blue" src={Gdsc_Blue} alt="Gdsc_Blue" /> */}
      </section>
    </div>
  );
};

export default Bubbles;
