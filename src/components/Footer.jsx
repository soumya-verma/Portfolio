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
      {/* <br /> */}
      <div class="info">
        <p>© Soumya Verma {new Date().getFullYear()}</p>
      </div>
    </div>
  );
};

export default Footer;
