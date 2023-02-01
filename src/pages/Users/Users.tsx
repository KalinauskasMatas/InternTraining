import { useState } from "react";

import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";
import ProfileViewer from "../../components/ProfileViewer/ProfileViewer";

import "./Users.css";
import { useGetAllUsersQuery } from "../../redux/features/api/apiSlice";

const Users = () => {
  const { data: registeredUsers } = useGetAllUsersQuery();

  const [selectedUser, setSelectedUser] = useState(
    registeredUsers ? registeredUsers[0] : null
  );

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const user = registeredUsers?.find((user) => user.email === e.target.value);
    user && setSelectedUser(user);
  };

  return (
    <div className="body-wrapper">
      <Header title="Movie rental" />
      <NavBar />
      <section className="userselect-wrapper">
        User email:{" "}
        <select name="users" id="user-select" onChange={handleChange}>
          {registeredUsers?.map((user) => (
            <option key={user.email} value={user.email}>
              {user.email}
            </option>
          ))}
        </select>
      </section>
      <ProfileViewer
        profile={
          selectedUser
            ? selectedUser
            : {
                _id: "null",
                fname: "null",
                surname: "null",
                email: "null",
                isAdmin: false,
                rentMovies: [],
              }
        }
      />
      <Footer />
    </div>
  );
};

export default Users;
