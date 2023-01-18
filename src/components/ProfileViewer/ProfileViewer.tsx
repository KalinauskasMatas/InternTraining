import { UserState } from "../../interfaces";

import "./ProfileViewer.css";
import defaultIcon from "./assets/default-icon.png";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { updateCurrUser } from "../../redux/features/currentUser/currentUserSlice";
import { usersSetEmail } from "../../redux/features/registeredUsers/registeredUsersSlice";

const ProfileViewer = (props: { profile: UserState }) => {
  const dispatch = useAppDispatch();
  const currProfile = useAppSelector((state) => state.currentUser);
  const profile = props.profile;

  const handleChangeEmail = () => {
    const newEmail = prompt("Enter new email");
    if (!newEmail || !newEmail.includes(`@`)) return;

    if (profile.email === currProfile.email) {
      dispatch(updateCurrUser({ ...profile, email: newEmail }));
    }

    dispatch(usersSetEmail({ user: profile, newEmail }));
  };

  return (
    <section className="profile">
      <h2 className="profile-header">Profile</h2>
      <div className="profile-content">
        <div className="profile-info">
          <div className="profile-picture">
            <img src={defaultIcon} alt="Default profile icon" />
          </div>
          <div className="profile-text">
            <p>
              <b>Name:</b> {profile.fname}
            </p>
            <p>
              <b>Surname:</b> {profile.surname}
            </p>
            <p>
              <b>Email:</b> {profile.email}
            </p>
          </div>
        </div>
        <div className="profile-buttons">
          <button>Reset password</button>
          <button onClick={handleChangeEmail}>Reset email</button>
        </div>
      </div>
    </section>
  );
};

export default ProfileViewer;
