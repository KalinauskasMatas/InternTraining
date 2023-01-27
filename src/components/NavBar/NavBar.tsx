import { Link } from "react-router-dom";

import { useAppSelector } from "../../redux/hooks";
import axiosFetch from "../../utils/axiosFetch";

import "./NavBar.css";

const NavBar = () => {
  const currentUser = useAppSelector((state) => state.currentUser);

  const handleLogout = async () => {
    axiosFetch("/user/logout", "POST");
    window.location.reload();
  };

  return (
    <nav>
      <ul>
        <span className="left">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/yourMovies">Your movies</Link>
          </li>
          <li className="profile-link">
            <Link to="/profile">Profile</Link>
          </li>
        </span>
        <span>
          {currentUser.isAdmin && (
            <li>
              <Link to="/users">Users</Link>
            </li>
          )}
          <li id="logout" onClick={handleLogout}>
            Logout
          </li>
        </span>
      </ul>
    </nav>
  );
};

export default NavBar;
