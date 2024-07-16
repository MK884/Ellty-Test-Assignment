import React from "react";
import "../styles/checkbox.css";

const CheckOptions = ({ label, isChecked, onClick }) => {
  return (
    <div className="options" onClick={onClick}>
      <span>{label}</span>
      {/* making checkbox readonly to avoid double triggering */}
      <input type="checkbox" checked={isChecked} readOnly />
    </div>
  );
};

export default CheckOptions;
