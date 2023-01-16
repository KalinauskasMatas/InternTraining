import React from "react";
import { clearUser } from "../../redux/features/currentUser/currentUserSlice";
import { useAppDispatch } from "../../redux/hooks";

import "./NavBar.css";

const NavBar = () => {
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(clearUser());
    window.location.reload();
  };

  return (
    <nav>
      <ul>
        <span className="left">
          <li>Home</li>
          <li>Your movies</li>
          <li className="profile-link">Profile</li>
        </span>
        <span>
          <li id="logout" onClick={handleLogout}>
            Logout
          </li>
        </span>
      </ul>
    </nav>
  );
};

export default NavBar;
