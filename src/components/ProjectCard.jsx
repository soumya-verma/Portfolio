import React from "react";

const ProjectCard = (props) => {
  return (
    <div className="projectCard">
      <h2>{props.name}</h2>
      <p>{props.desc}</p>
      <button>Visit</button>
    </div>
  );
};

export default ProjectCard;
