import React from "react";

import "./NavBar.css";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <span className="left">
          <li>Home</li>
          <li>Your movies</li>
          <li className="profile-link">Profile</li>
        </span>
        <span>
          <li id="logout">Logout</li>
        </span>
      </ul>
    </nav>
  );
};

export default NavBar;
