import React from "react";

const ProjectCard = (props) => {
  return (
    <div className="projectCard">
      <i class="fas fa-check-double fa-3x"></i>
      <h2>{props.name}</h2>
      <p>{props.desc}</p>
      <br />
      <a href={props.link}>VISIT</a>
    </div>
  );
};

export default ProjectCard;
