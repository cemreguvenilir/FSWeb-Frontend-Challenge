import React from "react";
import { Link } from "react-scroll";

export default function Header() {
  return (
    <div className="headerMain">
      <div className="headerContainer">
        <div className="logo">C</div>
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
      </div>
    </div>
  );
}
