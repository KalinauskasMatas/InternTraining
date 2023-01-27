import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import YourMovies from "./pages/YourMovies/YourMovies";
import Profile from "./pages/Profile/Profile";

import "./App.css";
import Users from "./pages/Users/Users";
import axiosFetch from "./utils/axiosFetch";
import { setCurrUser } from "./redux/features/currentUser/currentUserSlice";
import { useEffect } from "react";

function App() {
  const currentUser = useAppSelector((state) => state.currentUser);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axiosFetch("/user/owndata", "GET");
        dispatch(setCurrUser(response.data));
      } catch (error) {
        console.error(error);
      }
    };

    getData();
  }, [dispatch]);

  return (
    <div className="App">
      {Object.keys(currentUser).length === 0 ? (
        <Login />
      ) : (
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/yourMovies" element={<YourMovies />} />
            <Route path="/profile" element={<Profile />} />
            {currentUser.isAdmin && <Route path="/users" element={<Users />} />}
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
