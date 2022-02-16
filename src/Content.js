import React from "react";
import img from "./Tanishka.jpg";

export default function Content(props) {
  return (
    <main className={props.darkMode ? "dark" : ""}>
      <nav className="nav-bar">
        <img src={img} className="nav-img" />
      </nav>
      <div className="content">
        <h1 className="heading">Fun facts about Tanishka</h1>
        <ul className="list">
          <li>Confirms JavaScript is just a simpler version of JAVA</li>
          <li>Believes, she's smartest of all which is technically true</li>
          <li>Thinks she has the ability to conquer the world</li>
          <li>Can't write code without semi-colons ; </li>
          <li>Hates DSA but pretends to love it!</li>
        </ul>
      </div>
    </main>
  );
}
