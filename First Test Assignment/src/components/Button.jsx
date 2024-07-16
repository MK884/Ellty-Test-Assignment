import React from "react";
import "../styles/button.css";

const Button = ({ text }) => {
  return (
    <div className="button-frame">
      <button className="button">{text}</button>
    </div>
  );
};

export default Button;
