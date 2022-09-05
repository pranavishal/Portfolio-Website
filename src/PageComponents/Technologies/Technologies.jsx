import React from "react";
import "./Technologies.css";
import { techs } from "./techs.js";

function Technologies() {
  const technologiesList = techs.map((tech, idx) => {
    return (
      <div className="tech-frames background-animation" key={idx}>
        <img src={tech.image} alt={tech.name} />
        <h3>{tech.name}</h3>
      </div>
    );
  });
  return (
    <div id="skills" className="technologies-container">
      <h1>The Frameworks and Technologies I Use</h1>
      <div className="tech-grid-container">{technologiesList}</div>
      <h3>And more ...</h3>
    </div>
  );
}

export default Technologies;
