import BackgroundImage from "../images/al-sp.png";
// import AlFlag from "../images/alb-flag.png";
// import SpnFlag from "../images/spanish-flag.png";
import React from "react";

const HomePage = () => {
  return (
    <>
      <div>
        <img src={BackgroundImage} className="bg-img"></img>
      </div>

      {/* <div className="select-all">
        <div className="select-lng">
          <h3>Select a language</h3>
        </div>
        <div className="select-flag">
          <img src={AlFlag} className="bg-img"></img>
          <img src={SpnFlag} className="bg-img"></img>
        </div>
      </div> */}
    </>
  );
};

export default HomePage;
