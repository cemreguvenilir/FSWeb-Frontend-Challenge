import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { LanguageContext } from "../contexts/LanguageContext";

export default function SwitchMode() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { language, handleLanguage } = useContext(LanguageContext);
  return (
    <div className="switchMain">
      <div className="switch">
        <div className="darkMode">
          <button className="darkButton" onClick={toggleTheme} />
          {language === "eng" ? (
            <span className="darkText">
              {theme === "light" ? "DARK MODE" : "LIGHT MODE"}
            </span>
          ) : (
            <span className="darkText">
              {theme === "light" ? "KARANLIK MOD" : "AYDINLIK MOD"}
            </span>
          )}
        </div>
        <span className="darkText"> | </span>
        <div className="language">
          {language === "eng" ? (
            <span className="languageHover" onClick={handleLanguage}>
              TÜRKÇE
            </span>
          ) : (
            <span className="languageHover" onClick={handleLanguage}>
              ENGLISH
            </span>
          )}
          {language === "eng" ? (
            <span className="darkText">'YE GEÇ</span>
          ) : (
            <span className="darkText"></span>
          )}
        </div>
      </div>
    </div>
  );
}
