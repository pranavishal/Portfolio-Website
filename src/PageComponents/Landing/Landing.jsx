import React from "react";
import { AnimatedBackground, Typewriter } from "../components";
import "./Landing.css";

let msgArray = [
  //" ",
  "Student",
  "Web Developer",
  "Software Developer",
  "Gameplay Programmer",
  "Mobile Developer",
  "Graphics Programmer",
  "Innovator",
  //" ",
];

function Landing() {
  return (
    <AnimatedBackground>
      <div className="landing-type">
        <div>Pranav Vishal</div>
        <Typewriter data={msgArray} />
      </div>
    </AnimatedBackground>
  );
}

export default Landing;
