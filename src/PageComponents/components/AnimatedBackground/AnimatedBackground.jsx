import React from "react";
import "./AnimatedBackground.css";
import { ReactComponent as CPlusPlus } from "./svg/c-plus-plus-svgrepo-com.svg";
//import { ReactComponent as CSharp } from "./svg/TeOr1X01.svg";
import { ReactComponent as Computer } from "./svg/computer-svgrepo-com.svg";
import { ReactComponent as CSS } from "./svg/css3-svgrepo-com (5).svg";
import { ReactComponent as Flutter } from "./svg/flutter-svgrepo-com.svg";
import { ReactComponent as Html } from "./svg/html5-svgrepo-com.svg";
import { ReactComponent as Java } from "./svg/java-svgrepo-com.svg";
import { ReactComponent as OpenGL } from "./svg/opengl-svgrepo-com.svg";
import { ReactComponent as ReactSVG } from "./svg/react-svgrepo-com (1).svg";
import { ReactComponent as Book } from "./svg/book-svgrepo-com.svg";
import { ReactComponent as Unity } from "./svg/unity-svgrepo-com.svg";
import { ReactComponent as Unreal } from "./svg/unreal-engine-svgrepo-com.svg";
import { ReactComponent as Game } from "./svg/video-games-game-controller-svgrepo-com.svg";
import { ReactComponent as Python } from "./svg/python-svgrepo-com (2).svg";

//import { ReactComponent as C } from "./svg/c3-svgrepo-com.svg";

function AnimatedBackground({ children }) {
  let arr = [];
  let qty = 20;

  for (let i = 0; i < qty; i++) {
    arr.push(i);
  }

  const layers = arr.map((i) => {
    return (
      <div key={i} className="animated-row">
        <div>
          <CPlusPlus />
          <Game />
          <Computer />
          <CSS />
          <Html />
          <Unreal />
          <Java />
          <Flutter />
          <OpenGL />
          <ReactSVG />
          <Book />
          <Unity />
          <Python />
        </div>

        <div>
          <CPlusPlus />
          <Game />
          <Computer />
          <CSS />
          <Html />
          <Unreal />
          <Java />
          <Flutter />
          <OpenGL />
          <ReactSVG />
          <Book />
          <Unity />
          <Python />
        </div>
      </div>
    );
  });

  return (
    <section className="animated-section">
      {layers}
      {children}
    </section>
  );
}

export default AnimatedBackground;
