import React, { useState, useEffect } from "react";
import "./Nav.css";
import menuButton from "./hamburger-menu.svg";

function Nav() {
  const [showLinks, setShowLinks] = useState(true);
  const [showBtn, setShowBtn] = useState(false);

  const handleClick = () => setShowLinks(!showLinks);

  window.addEventListener("resize", (e) => {
    if (e.target.innerWidth > 900) {
      setShowBtn(false);
      setShowLinks(true);
    } else {
      setShowBtn(true);
      setShowLinks(false);
    }
  });

  useEffect(() => {
    if (window.innerWidth > 900) {
      setShowBtn(false);
      setShowLinks(true);
    } else {
      setShowBtn(true);
      setShowLinks(false);
    }
  }, []);

  return (
    <div className="nav-container">
      <div className="nav-name">
        <div>PV</div>
        {showBtn && <img alt="Menu" src={menuButton} onClick={handleClick} />}
      </div>

      {showLinks && (
        <div className="nav-links-container">
          <a href="#home">Home</a>
          <a href="#aboutme">About Me</a>
          <a href="#projects">Portfolio</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
      )}
    </div>
  );
}

export default Nav;
