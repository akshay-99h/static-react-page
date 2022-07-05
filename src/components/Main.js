import React from "react";
import img from "./logo.png";

const Main = () => {
  return (
    <div className="main-content">
      <h1 className="heading">Fun facts about React</h1>
      <ul className="blue-bullet">
        <li>Was first released in 2013</li>
        <li>Was orignally created by Jordan Walke</li>
        <li>Has well over 100K start on GitHub</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, include mobile apps</li>
      </ul>
      <img src={img} alt="React" className="logoInBg" />
    </div>
  );
};

export default Main;
