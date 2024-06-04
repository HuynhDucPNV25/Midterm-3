import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
export const Navbar = () => {
  return (
    <nav className="navbar bg-success">
      <h1>
        <i className="fab fa-github" /> GitHub Finder
      </h1>
      <ul>
        <li>
          <a href="#>">Home</a>
          <a href="#>">About</a>
        </li>
      </ul>
    </nav>
  );
};