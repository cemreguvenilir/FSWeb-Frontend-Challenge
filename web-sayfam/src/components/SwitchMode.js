import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default function SwitchMode() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div className="switchMain">
      <div className="switch">
        <div className="darkMode">
          <button className="darkButton" onClick={toggleTheme} />

          <span className="darkText">
            {theme === "light" ? "DARK MODE" : "LIGHT MODE"}{" "}
          </span>
        </div>
        <span className="darkText"> | </span>
        <div className="language">
          TÜRKÇE <span className="darkText">'YE GEÇ</span>
        </div>
      </div>
    </div>
  );
}
