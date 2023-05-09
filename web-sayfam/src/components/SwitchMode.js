import React from "react";

export default function SwitchMode() {
  return (
    <div className="switch">
      <div className="darkMode">
        <button className="darkButton" />

        <span className="darkText">DARK MODE </span>
      </div>
      <span className="darkText"> | </span>
      <div className="language">
        TÜRKÇE <span className="darkText">'YE GEÇ</span>
      </div>
    </div>
  );
}
