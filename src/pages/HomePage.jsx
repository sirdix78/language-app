import nativeLng from "../images/prof-img.jpg";
import React from "react";

const HomePage = () => {
  return (
    <>
      <div className="header">
        <div className="h-bg">
          <h1>
            Every <span>language at your </span> command
          </h1>
        </div>
        <p className="first-paragraph">
          Change your language and you change your thoughts
        </p>
      </div>
      <h1 className="article-title">
        Our core <span className="span-article">values and services</span>
      </h1>
      <div className="article-container">
        <article>
          <h2>Fast and Secure Online Support </h2>
          <p>
            You will have an online Student Support Professional 24/7 to resolve
            any problems or doubts you could have.
          </p>
        </article>
        <article>
          <h2> Full Corporate Lessons </h2>
          <p>
            Access to a huge variety of professional online courses to boost
            your lenguage knowledge and open your company possibilities.
          </p>
        </article>
        <article>
          <h2>Flexible Methodology </h2>
          <p>
            Learn at your own pace, organize your own ways… but don’t sleep on
            it!
          </p>
        </article>
      </div>
      <section className="team">
        <div>
          <img src={nativeLng} alt="native-img"></img>
        </div>
        <div className="prof-team">
          <h3>
            Professional Team For{" "}
            <span className="span-article">Top-Notch</span> Translation
          </h3>
          <p>
            Everyone should have the possibility to understand each other, and
            we came here to give you that oportunity. Our Translation Team works
            hard to bring to you this possibility, whenever you want, wherever
            you are. Just “log-in” and start enjoying the fastest live transalor
            on Earth.
          </p>
        </div>
      </section>
    </>
  );
};

export default HomePage;
