import React from "react";

export default function Profile() {
  return (
    <div className="profileContainer">
      <h2 className="profileHeading">Profile</h2>
      <div className="profileAbout">
        <div className="profile">
          <h3 className="subHeading">Profile</h3>
          <div className="keysValue">
            <div className="keysProfile">
              <p className="keys">Doğum Tarihi</p>
              <p className="keys">İkamet Şehri</p>
              <p className="keys">Eğitim Durumu</p>
              <p className="keys">Tercih Ettiği Rol</p>
            </div>
            <div className="valuesProfile">
              <p className="values">17.05.1998</p>
              <p className="values">Istanbul</p>
              <p className="values">Boğaziçi Üniversitesi, Felsefe, 2023</p>
              <p className="values">Frontend, UI</p>
            </div>
          </div>
        </div>
        <div className="about">
          <h3 className="subHeading">About Me</h3>
          <p className="aboutText">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Veniam aut,
            odit laborum aliquam voluptatum nisi mollitia.
          </p>
          <p className="aboutText">
            Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quad
            deserunt quam temporibus cumque magnam!
          </p>
        </div>
      </div>
    </div>
  );
}
