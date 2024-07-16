import React from "react";
import "../styles/button.css";

const Button = ({ text }) => {
  return (
    <div className="btn-frame">
      <button>{text}</button>
    </div>
  );
};

export default Button;
