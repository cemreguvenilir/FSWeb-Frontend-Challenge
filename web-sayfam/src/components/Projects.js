import React from "react";

export default function Projects() {
  const data = [
    {
      image: "diary.svg",
      name: "Gratitude Journal",
      description:
        " A gratitude journal is a type of journal where one often writes down the things one is thankful for so that they can focus on the positive things in their life and feel gratitude. ",
      programs: ["React", "Redux", "Axios"],
      github: "https://github.com/cemreguvenilir/fsweb-s10-challenge",
      viewSite: "https://cemre-challenge-pi.vercel.app/",
    },
    {
      image: "jokes.png",
      name: "Random Jokes",
      description:
        "In order to write an asynchronous action creator, I used redux-thunk as middleware and stored some of the data I created in localStorage.",
      programs: ["React", "Redux", "Axios"],
      github: "https://github.com/cemreguvenilir/fsweb-s10g4-thunk-and-apis",
      viewSite: "https://cemre-thunk-and-apis-alpha.vercel.app/",
    },
    {
      image: "watchlist.webp",
      name: "Watchlist",
      description:
        "I created it with Redux with actions that provide tasks such as adding movies, deleting them, adding to favorites.You can create your movie list here!",
      programs: ["React", "Redux", "Axios"],
      github: "https://github.com/cemreguvenilir/fsweb-s10g3-redux-watchlist",
      viewSite: "https://cemre-watchlist.vercel.app/",
    },
  ];
  return (
    <div className="projectMain">
      <div className="projectsContainer">
        <h2 className="projectHeading" id="projects">
          Projects
        </h2>
        <div className="projectsTotal">
          {data.map((project) => (
            <div className="projectsList">
              <img src={project.image} alt="projects" className="projectsImg" />
              <h3 className="subHeading">{project.name} </h3>
              <p className="projectText">{project.description} </p>
              <div className="projectButtons">
                {" "}
                <p>{project.programs[0]} </p>
                <p>{project.programs[1]} </p>
                <p>{project.programs[2]} </p>
              </div>
              <div className="githubLink">
                <a href={project.github} target="_blank" rel="noreferrer">
                  <p>GitHub</p>
                </a>
                <a href={project.viewSite} target="_blank" rel="noreferrer">
                  <p>View Site</p>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
