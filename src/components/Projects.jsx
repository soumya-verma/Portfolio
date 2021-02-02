import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div id="projects" className="projects">
      <h1>Project Works</h1>
      <div className="projectWrapper">
        <ProjectCard
          name="Faceopedia"
          desc="An online celebrity finder website with a beautiful front-end created using HTML, CSS and JavaScript which displays information cards of celebrities along with hover effects. Used PHP for back-end and MySQL for managing database. Runs on CNN face recognition algorithm."
        />
        <ProjectCard
          name="To-Do List"
          desc="An online web-app for creating and organizing your custom to-do lists according to your various schedules. Allows you to create and manage your own custom lists along with a default list for the day. Created using Node.js, Express.js, HTML, CSS, EJS, MongoDB and Mongoose."
        />
        <ProjectCard
          name="Couch Potatoes"
          desc="An online furniture buying website. Implemented a fully functional signup, login and logout with validation and authentication using regex. Made using HTML, CSS and JavaScript for front-end, PHP for back-end and MySQL for managing database."
        />
        <ProjectCard
          name="Cab Providing System"
          desc="A cab booking system which runs on the Dijkstra's shortest distance algorithm. Implemented using graphs through adjacency list and using files for database, made using C++ language."
        />
        <ProjectCard
          name="M-Square"
          desc="A project made for ticket booking for movies and cricket matches, also displays available seats and scoreboard. Implemented using Stacks, Queues and 2-d arrays in C language."
        />
      </div>
    </div>
  );
};

export default Projects;
