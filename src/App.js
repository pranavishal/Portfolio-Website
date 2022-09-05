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
      <Technologies></Technologies>
      <Portfolio></Portfolio>
      <Contact></Contact>
    </div>
  );
}

export default App;
