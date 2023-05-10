import React from "react";
import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";

export default function Hero() {
  const { language } = useContext(LanguageContext);
  return (
    <div className="heroMain">
      <div className="heroContainer">
        <div className="heroName">
          <hr className="nameLine" />
          <h5 className="nameH">Cemre Güvenilir</h5>
        </div>
        <div className="heroTotal">
          <div className="heroText">
            {language === "eng" ? (
              <h1 className="head">
                Creative thinker <br />
                Minimalism lover
              </h1>
            ) : (
              <h1 className="head">
                Yaratıcı Düşünür <br />
                Minimalist Sever
              </h1>
            )}
            {language === "eng" ? (
              <p className="pText">
                Hi, I'm Cemre. I'am a full-stack developer. If you are looking
                for a Developer who to craft solid and scalable frontend
                products with great user experiences. Let's shake hands with me.
              </p>
            ) : (
              <p className="pText">
                Merhaba, ben Cemre. Full-stack geliştiricisiyim. Mükemmel
                kullanımıcı deneyimleriyle sağlam ve ölçeklenebilir frontend
                ürünleri oluşturacak bir geliştirici arıyorsanız el
                sıkışabiliriz.
              </p>
            )}

            <div className="heroButtons">
              <div className="firstButton">
                {language === "eng" ? (
                  <a
                    href="mailto:guvenilircemre@gmail.com"
                    className="buttonHero"
                  >
                    Hire me
                  </a>
                ) : (
                  <a
                    href="mailto:guvenilircemre@gmail.com"
                    className="buttonHero"
                  >
                    Bana ulaşın
                  </a>
                )}
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
