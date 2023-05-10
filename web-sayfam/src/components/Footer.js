import React from "react";
import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";

export default function Footer() {
  const { language } = useContext(LanguageContext);
  return (
    <div className="footerContainer">
      <div className="footerTotal">
        {language === "eng" ? (
          <h2 className="footerText">
            Let's work together on <br /> your next product.
          </h2>
        ) : (
          <h2 className="footerText">
            Bir sonraki ürününüz için <br /> birlikte çalışalım.
          </h2>
        )}

        <div className="footer">
          <div className="mailInfo">
            <span className="finger"> 👉 </span>
            <a className="mail" href="mailto:guvenilircemre@gmail.com">
              guvenilircemre@gmail.com
            </a>
          </div>
          <div className="footerLinks">
            {language === "eng" ? (
              <a className="linksBlog" href="#">
                Personal Blog
              </a>
            ) : (
              <a className="linksBlog" href="#">
                Kişisel Blog
              </a>
            )}

            <a className="linksGithub" href="https://github.com/cemreguvenilir">
              Github
            </a>
            <a className="linksLinkedin" href="https://www.linkedin.com">
              Linkedin
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
