import React, { useState } from "react";
import "../styles/Child.css";

const Selection = (props) => {
//   const [currBg, setCurrBg] = useState({ background: "" });
  const [background, setBackground] = useState({ background: "" });
  const applyColor = () => {
    props.applyColor(getColor);
  };
//   const getColor = (color) => {
//     let newColor = color.background;
//     setCurrBg({ background: newColor });
//   };
const getColor = (c) => {
    let nb = c.background;
    setBackground({
      background: nb,
    });
  };
  return (
    <>
      <div className="fix-box" style={background} onClick={applyColor}></div>
      <h2 className="subheading">Selection</h2>
    </>
  );
};

export default Selection;
