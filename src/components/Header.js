import React from "react";
import "../App.css";
import img from "../logo.svg";

const Header = () => {
  return (
    <header>
      <nav className="navbar">
        <img src={img} alt="React" className="logo" />
        <h3>Static Page</h3>
        <ol id="nav-list">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ol>
      </nav>
    </header>
  );
};

export default Header;
