import "./App.css";
import {
  Nav,
  Landing,
  AboutMe,
  Technologies,
  Portfolio,
  Contact,
} from "./PageComponents";
import React from "react";

function App() {
  return (
    <div>
      <Nav></Nav>
      <Landing></Landing>
      <AboutMe></AboutMe>
      <Portfolio></Portfolio>
      <Technologies></Technologies>
      <Contact></Contact>
    </div>
  );
}

export default App;
