import React from "react";

export default function Skills() {
  return (
    <div className="skillsMain">
      <div className="skillsContainer">
        <h2 className="skillsHeader" id="skills">
          Skills
        </h2>
        <div className="skillsList">
          <div className="javascript">
            <h3 className="subHeading">Java Script</h3>
            <p className="skillsText">
              A scripting language that enables you to create dynamically
              updating content, control multimedia, animate images, and pretty
              much everything else.
            </p>
          </div>
          <div className="react">
            <h3 className="subHeading">React.Js</h3>
            <p className="skillsText">
              A declarative, component-based, open-source front-end JavaScript
              library for building user interfaces.
            </p>
          </div>
          <div className="node">
            <h3 className="subHeading">Node.Js</h3>
            <p className="skillsText">
              A platform built on Chrome's JavaScript runtime for easily
              building fast and scalable network applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
