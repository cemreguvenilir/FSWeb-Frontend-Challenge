import React from "react";
import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";

export default function Skills() {
  const { language } = useContext(LanguageContext);
  return (
    <div className="skillsMain">
      <div className="skillsContainer">
        {language === "eng" ? (
          <h2 className="skillsHeader" id="skills">
            Skills
          </h2>
        ) : (
          <h2 className="skillsHeader" id="skills">
            Yetenekler
          </h2>
        )}

        <div className="skillsList">
          <div className="javascript">
            <h3 className="subHeading">Java Script</h3>
            {language === "eng" ? (
              <p className="skillsText">
                A scripting language that enables you to create dynamically
                updating content, control multimedia, animate images, and pretty
                much everything else.
              </p>
            ) : (
              <p className="skillsText">
                Dinamik olarak güncellenen içerik oluşturmanıza, multimedyayı
                kontrol etmenize, görüntüleri canlandırmanıza ve hemen hemen her
                şeye olanak tanıyan bir betik dili.
              </p>
            )}
          </div>
          <div className="react">
            <h3 className="subHeading">React.Js</h3>
            {language === "eng" ? (
              <p className="skillsText">
                A declarative, component-based, open-source front-end JavaScript
                library for building user interfaces.
              </p>
            ) : (
              <p className="skillsText">
                Kullanıcı arabirimleri oluşturmak için bildirime dayalı, bileşen
                tabanlı, açık kaynaklı bir front-end JavaScript kitaplığı.
              </p>
            )}
          </div>
          <div className="node">
            <h3 className="subHeading">Node.Js</h3>
            {language === "eng" ? (
              <p className="skillsText">
                A platform built on Chrome's JavaScript runtime for easily
                building fast and scalable network applications.
              </p>
            ) : (
              <p className="skillsText">
                Hızlı ve ölçeklenebilir ağ uygulamalarını kolayca oluşturmak
                için Chrome'un JavaScript çalıştırma zamanı üzerine oluşturulmuş
                bir platform.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
