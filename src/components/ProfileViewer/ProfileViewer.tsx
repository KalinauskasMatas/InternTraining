import { UserState } from "../../interfaces";

import "./ProfileViewer.css";
import defaultIcon from "./assets/default-icon.png";

const ProfileViewer = (props: { profile: UserState }) => {
  const profile = props.profile;

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
          <button>Reset email</button>
        </div>
      </div>
    </section>
  );
};

export default ProfileViewer;
