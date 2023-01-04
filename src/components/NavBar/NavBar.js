import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./NavBar.css";

function NavBar() {
  return (
    <div className="NavBar-container">
      <div className="n-left">
        <div className="n-name">Sunil</div>
        <span>Toggle</span>
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <li>Home</li>
            <li>Services</li>
            <li>Experience</li>
            <li>Portfolio</li>
            <li>Testimonials</li>
          </ul>
        </div>
        <button className="n-contact">Contact</button>
      </div>
    </div>
  );
}

export default NavBar;
