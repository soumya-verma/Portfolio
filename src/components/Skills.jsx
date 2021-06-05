import React from "react";
import Tag from "./Tag";

const Skills = () => {
  return (
    <div className="skills">
      <h1>
        Skills<span class="dot">.</span>
      </h1>
      <div className="skillsWrapper">
        <Tag name="HTML/CSS" />
        <Tag name="JavaScript" />
        <Tag name="ReactJS" />
        <Tag name="NodeJS" />
        <Tag name="ExpressJS" />
        <Tag name="MongoDB" />
        <Tag name="Mongoose" />
        <Tag name="Redux" />
        <Tag name="MySQL" />
        <Tag name="PHP" />
        <Tag name="C/C++" />
        <Tag name="Data Structures" />
        <Tag name="Algorithms" />
        <Tag name="Problem Solving" />
      </div>
    </div>
  );
};

export default Skills;
