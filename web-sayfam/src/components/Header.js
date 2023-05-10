import React from "react";
import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";

export default function Header() {
  const { language } = useContext(LanguageContext);
  return (
    <div className="headerMain">
      <div className="headerContainer">
        <div className="logo">C</div>
        {language === "eng" ? (
          <nav className="nav">
            <a className="navA" href="#skills">
              Skills
            </a>
            <a className="navA" href="#projects">
              Projects
            </a>
            <a href="mailto:guvenilircemre@gmail.com" className="hireMe">
              Hire me
            </a>
          </nav>
        ) : (
          <nav className="nav">
            <a className="navA" href="#skills">
              Yetenekler
            </a>
            <a className="navA" href="#projects">
              Projeler
            </a>
            <a href="mailto:guvenilircemre@gmail.com" className="hireMe">
              Bana Ulaşın
            </a>
          </nav>
        )}
      </div>
    </div>
  );
}
