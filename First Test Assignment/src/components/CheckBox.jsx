import React, { useState } from "react";
import "../styles/checkbox.css";
const CheckBox = ({ label }) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="options" onClick={() => setIsChecked(!isChecked)}>
      <span>{label}</span>
      <input type="checkbox" name="" id="" checked={isChecked} />
    </div>
  );
};

export default CheckBox;
