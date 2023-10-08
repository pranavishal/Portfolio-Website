import React from "react";
import "./AboutMe.css";
import portfolioPhoto from "./PortfolioPhotoModified.png";

function AboutMe() {
  return (
    <div id="aboutme" className="aboutme-container">
      <img src={portfolioPhoto} alt="about me" />
      <div>
        <h1>About Me</h1>
        <p>
          Hi! I'm a prolific programmer, studying computer science at the
          University of Waterloo. I'm always looking for
          opportunities to increase my skills in new and challenging
          environments. Below you'll find details into my projects, skills, as
          well as my contact information. I'm always happy to chat, so feel free
          to reach out whenever!
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
