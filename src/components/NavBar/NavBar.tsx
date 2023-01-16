import { Link } from "react-router-dom";

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
          <li id="logout" onClick={handleLogout}>
            Logout
          </li>
        </span>
      </ul>
    </nav>
  );
};

export default NavBar;
