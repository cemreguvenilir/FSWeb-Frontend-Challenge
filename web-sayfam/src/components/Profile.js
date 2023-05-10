import React from "react";
import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";

export default function Profile() {
  const { language } = useContext(LanguageContext);
  return (
    <div className="profileMain">
      <div className="profileContainer">
        <h2 className="profileHeading">Profile</h2>
        <div className="profileAbout">
          <div className="profile">
            <h3 className="subHeading">Profile</h3>
            <div className="keysValue">
              {language === "eng" ? (
                <div className="keysProfile">
                  <p className="keys">Date of Birth</p>
                  <p className="keys">City of Residence</p>
                  <p className="keys">Educational Status</p>
                  <p className="keys">Preferred Role</p>
                </div>
              ) : (
                <div className="keysProfile">
                  <p className="keys">Doğum Tarihi</p>
                  <p className="keys">İkamet Şehri</p>
                  <p className="keys">Eğitim Durumu</p>
                  <p className="keys">Tercih Edilen Rol</p>
                </div>
              )}

              <div className="valuesProfile">
                <p className="values">17.05.1998</p>
                <p className="values">Istanbul</p>
                {language === "eng" ? (
                  <p className="values">
                    Boğaziçi University, Philosophy, 2023
                  </p>
                ) : (
                  <p className="values">Boğaziçi Üniversitesi, Felsefe, 2023</p>
                )}

                <p className="values">Frontend, UI</p>
              </div>
            </div>
          </div>
          <div className="about">
            <h3 className="subHeading">About Me</h3>
            {language === "eng" ? (
              <p className="aboutText">
                I studied philosophy at Boğaziçi University and graduated in
                January 2023. I met Workintech when I realized that I wanted to
                continue my career with software.
              </p>
            ) : (
              <p className="aboutText">
                Boğaziçi Üniversitesi'nde felsefe okudum ve Ocak 2023'te mezun
                oldum. Kariyerime yazılımla devam etmek istediğimi fark
                ettiğimde Workintech ile tanıştım.
              </p>
            )}
            {language === "eng" ? (
              <p className="aboutText">
                I received intensive full stack training for 6 months. I
                continue to improve myself to be better in this area.
              </p>
            ) : (
              <p className="aboutText">
                6 ay yoğun full stack eğitim aldım. Bu alanda daha iyi olabilmek
                için kendimi geliştirmeye devam ediyorum.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
