import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="social-bar">
      <a
        href="https://github.com/dannycvera"
        className="github"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="github-icon"
          alt="Daniel Vera's Github"
          src={require("../img/GitHub-logo-32px.png")}
        />
      </a>
      <a
        href="https://www.linkedin.com/in/daniel-vera-65bbb07/"
        className="linkedin"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="linkedin-icon"
          alt="Daniel Vera's LinkedIn"
          src={require("../img/linkedIn-logo.png")}
        />
      </a>
    </div>
  );
}

export default Footer;
