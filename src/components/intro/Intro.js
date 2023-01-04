import React from "react";
import "./Intro.css";
import github from "../../images/icons8-github.gif";
import Gmail from "../../images/icons8-gmail-logo.gif";
import LinkedIn from "../../images/icons8-linkedin-circled.gif";
function Intro() {
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span>Hello!!! I Am</span>
          <span>Sunil Kohar</span>
          <span>
            Full Stack developer with high level of experince in web
            development, producing the Quality Work
          </span>
        </div>
        <button className="i-hire">Hire Me</button>
        <div className="i-icons">
          <a href="https://github.com/SunilKohar">
            <img src={github} alt="Github" />
          </a>
          <a href="mailto:sunilkohar86@gmail.com">
            <img src={Gmail} alt="Gmail" />
          </a>
          <a href="https://www.linkedin.com/in/sunil-kohar/">
            <img src={LinkedIn} alt="Linkedin" />
          </a>
        </div>
      </div>
      <div className="i-right"></div>
    </div>
  );
}

export default Intro;
