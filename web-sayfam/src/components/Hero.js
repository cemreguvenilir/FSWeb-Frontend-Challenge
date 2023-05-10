import React from "react";

export default function Hero() {
  return (
    <div className="heroMain">
      <div className="heroContainer">
        <div className="heroName">
          <hr className="nameLine" />
          <h5 className="nameH">Cemre Güvenilir</h5>
        </div>
        <div className="heroTotal">
          <div className="heroText">
            <h1 className="head">
              Creative thinker <br />
              Minimalism lover
            </h1>
            <p className="pText">
              Hi, I'm Cemre. I'am a full-stack developer. If you are looking for
              a Developer who to craft solid and scalable frontend products with
              great user experiences. Let's shake hands with me.
            </p>
            <div className="heroButtons">
              <div className="firstButton">
                <a
                  href="mailto:guvenilircemre@gmail.com"
                  className="buttonHero"
                >
                  Hire me
                </a>
              </div>
              <div className="secondButton">
                <img className="buttonLogo" src="github.png" alt="githubLogo" />
                <a
                  className="githubButton"
                  target="_blank"
                  href="https://github.com/cemreguvenilir"
                >
                  Github
                </a>
              </div>
              <div className="thirdButton">
                <img
                  className="buttonLogo"
                  src="LinkedIn.png"
                  alt="linkedinLogo"
                />
                <a
                  className="linkButton"
                  target="_blank"
                  href="https://www.linkedin.com"
                >
                  Linkedin
                </a>
              </div>
            </div>
          </div>
          <img className="heroImg" src="image1.png" alt="studying" />
        </div>
      </div>
    </div>
  );
}
