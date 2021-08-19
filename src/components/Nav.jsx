import React from "react";

const Nav = () => {
  return (
    <div className="nav">
      <div className="ul">
        <a href="#top">HOME</a>
        <a href="#projects">PROJECTS</a>
        <a href="#contact">CONTACT</a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://drive.google.com/file/d/17FGZRTq_DarCgXkD1ORFDxPLE1G-QzZ0/view?usp=sharing"
        >
          RESUME
        </a>
      </div>
      <hr />
    </div>
  );
};

export default Nav;
