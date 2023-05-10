import React from "react";

export default function Projects() {
  return (
    <div className="projectMain">
      <div className="projectsContainer">
        <h2 className="projectHeading">Projects</h2>
        <div className="projectsList">
          <div className="firstProject">
            <img src="Rectangle 41.png" alt="firstProject" />
            <h3 className="subHeading">Workintech</h3>
            <p className="projectText">
              A simple, customizable, minimal setup cookie plugin that allows
              your users to select which cookies to accept or decline. This was
              created with vanilla JS, SCSS and Parcel Bundler and is available
              as a NPM package and the git repository makes any type of
              customization to code and themes possible.
            </p>
            <div className="projectButtons">
              <p>react</p>
              <p>redux</p>
              <p>axios</p>
            </div>
            <div className="githubLink">
              <a className="githubLinkA" href="#">
                Github
              </a>
              <a className="githubLinkA" href="#">
                View Site
              </a>
            </div>
          </div>
          <div className="secondProject">
            <img src="Rectangle2.png" alt="secondProject" />
            <h3 className="subHeading">Random Jokes</h3>
            <p className="projectText">
              A simple, customizable, minimal setup cookie plugin that allows
              your users to select which cookies to accept or decline. This was
              created with vanilla JS, SCSS and Parcel Bundler and is available
              as a NPM package and the git repository makes any type of
              customization to code and themes possible.
            </p>
            <div className="projectButtons">
              <p>react</p>
              <p>redux</p>
              <p>axios</p>
            </div>
            <div className="githubLink">
              <a className="githubLinkA" href="#">
                Github
              </a>
              <a className="githubLinkA" href="#">
                View Site
              </a>
            </div>
          </div>
          <div className="thirdProject">
            <img src="Rectangle3.png" alt="thirdProject" />
            <h3 className="subHeading">Journey</h3>
            <p className="projectText">
              A simple, customizable, minimal setup cookie plugin that allows
              your users to select which cookies to accept or decline. This was
              created with vanilla JS, SCSS and Parcel Bundler and is available
              as a NPM package and the git repository makes any type of
              customization to code and themes possible.
            </p>
            <div className="projectButtons">
              <p>react</p>
              <p>redux</p>
              <p>axios</p>
            </div>
            <div className="githubLink">
              <a className="githubLinkA" href="#">
                Github
              </a>
              <a className="githubLinkA" href="#">
                View Site
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
