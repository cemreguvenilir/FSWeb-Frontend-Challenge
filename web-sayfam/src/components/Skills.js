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
          <div className="skillBox">
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
          <div className="skillBox">
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
          <div className="skillBox">
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

          <div className="skillBox">
            <h3 className="subHeading">Java</h3>
            {language === "eng" ? (
              <p className="skillsText">
                A programming language that can be used to code all kinds of
                software, from mobile applications and enterprise software to
                big data applications and server-side technologies.
              </p>
            ) : (
              <p className="skillsText">
                Mobil uygulamalardan kurumsal yazılımlara, büyük veri
                uygulamalarından sunucu tarafı teknolojilerine kadar her türlü
                yazılımı kodlamak için kullanılabilecek bir programlama dili.
              </p>
            )}
          </div>

          <div className="skillBox">
            <h3 className="subHeading">SQL</h3>
            {language === "eng" ? (
              <p className="skillsText">
                SQL, or Structured Query Language, is a domain-specific language
                used for managing and manipulating relational databases.
              </p>
            ) : (
              <p className="skillsText">
                SQL veya Yapılandırılmış Sorgu Dili, ilişkisel veritabanlarını
                yönetmek ve değiştirmek için kullanılan alana özgü bir dildir.
              </p>
            )}
          </div>
          <div className="skillBox">
            <h3 className="subHeading">OOP</h3>
            {language === "eng" ? (
              <p className="skillsText">
                Object-Oriented Programming(OOP) is a programming paradigm that
                organizes code around the concept of "objects," which
                encapsulate data and behavior.
              </p>
            ) : (
              <p className="skillsText">
                Nesneye Dayalı Programlama(OOP), kodu veri ve davranışı kapsayan
                "nesneler" kavramı etrafında düzenleyen bir programlama
                paradigmasıdır.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
