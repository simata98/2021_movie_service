import React from "react";
import "./About.css";

function About(props) {
  console.log(props);
  return (
    <div className="about__container">
      <span>Clone Coding By Jeong Hyeong Lee</span>
      <p>Used Movie database API</p>
      <span>2021-01-18 Started</span>
    </div>
  );
}

export default About;
