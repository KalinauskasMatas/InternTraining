import { useState } from "react";
import { useAppSelector } from "../../redux/hooks";

import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";
import ProfileViewer from "../../components/ProfileViewer/ProfileViewer";

import "./Users.css";

const Users = () => {
  const registeredUsers = useAppSelector((state) => state.registeredUsers);

  const [selectedUser, setSelectedUser] = useState(registeredUsers[0]);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const user = registeredUsers.find((user) => user.email === e.target.value);
    user && setSelectedUser(user);
  };

  return (
    <div className="body-wrapper">
      <Header title="Movie rental" />
      <NavBar />
      <section className="userselect-wrapper">
        User email:{" "}
        <select name="users" id="user-select" onChange={handleChange}>
          {registeredUsers.map((user) => (
            <option key={user.email} value={user.email}>
              {user.email}
            </option>
          ))}
        </select>
      </section>
      <ProfileViewer profile={selectedUser} />
      <Footer />
    </div>
  );
};

export default Users;
