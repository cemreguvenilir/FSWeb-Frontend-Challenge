import React from "react";

export default function Footer() {
  return (
    <div className="footerContainer">
      <div className="footerTotal">
        <h2 className="footerText">
          Let's work together on <br /> your next product.
        </h2>

        <div className="footer">
          <div className="mailInfo">
            <a className="mail" href="mailto:guvenilircemre@gmail.com">
              👉 guvenilircemre@gmail.com
            </a>
          </div>
          <div className="footerLinks">
            <a className="linksBlog" href="#">
              Personal Blog
            </a>
            <a className="linksGithub" href="#">
              Github
            </a>
            <a className="linksLinkedin" href="#">
              Linkedin
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
