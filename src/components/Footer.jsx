import React from "react";
import Icon from "./Icon";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <Icon name="fas fa-envelope" link="mailto:soumya.verma2000@gmail.com" />
        <Icon
          name="fab fa-linkedin-in"
          link="https://www.linkedin.com/in/soumya-verma-3a61151b3/"
        />
        <Icon name="fab fa-github" link="https://github.com/soumya-verma" />
      </div>
      <div class="info">
        <p>Phone: 6283333046</p>
        <p>Email: soumya.verma2000@gmail.com</p>
      </div>
    </div>
  );
};

export default Footer;
