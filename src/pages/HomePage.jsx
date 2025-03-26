import BackgroundImage from "../images/al-sp.png";
import AlFlag from "../images/alb-flag.png";
import SpnFlag from "../images/spanish-flag.png";
import React from "react";

const HomePage = () => {
  return (
    <>
      {/* <div>
        <img src={BackgroundImage} className="bg-img"></img>
      </div> */}

      <div className="header">
        <h1>Every language at you command</h1>
        <p>Alfonso will invent the text</p>
      </div>
      <h1 className="article-title">Our core values and services</h1>
      <div className="article-container">
        <article>
          <p>Alfonso will invent the text</p>
        </article>
        <article>
          <p>Alfonso will invent the text</p>
        </article>
        <article>
          <p>Alfonso will invent the text</p>
        </article>
      </div>
      <section className="team">
        <div>
          <img src={AlFlag} className="bg-img"></img>
          <img src={SpnFlag} className="bg-img"></img>
        </div>
        <div>
          <h2>Professional Team For Top-Notch Translation</h2>
          <p>Alfonso will invent the text</p>
        </div>
      </section>
    </>
  );
};

export default HomePage;
