import React from "react";

export default function ToggleBtn() {
  return (
    <div className="container">
      <input type="checkbox" className="checkbox" id="checkbox" />
      <label className="switch" for="checkbox">
        <span className="slider"></span>
      </label>
    </div>
  );
}
