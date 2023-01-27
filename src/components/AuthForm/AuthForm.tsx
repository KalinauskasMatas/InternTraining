import React, { useState } from "react";

import { useAppSelector, useAppDispatch } from "../../redux/hooks";

import { setCurrUser } from "../../redux/features/currentUser/currentUserSlice";
import { registerUser } from "../../redux/features/registeredUsers/registeredUsersSlice";

import { AuthFormInterface } from "../../interfaces";

import "./AuthForm.css";
import axiosFetch from "../../utils/axiosFetch";

const AuthForm = (props: AuthFormInterface) => {
  const [showRegister, setShowRegister] = useState(false);
  const [formError, setFormError] = useState("");

  const [inputData, setInputData] = useState({
    fname: "",
    surname: "",
    email: "",
    emailRepeat: "",
    password: "",
    passwordRepeat: "",
  });

  const registeredUsers = useAppSelector((state) => state.registeredUsers);
  const dispatch = useAppDispatch();

  const { isRegister } = props;

  const revealRegister = () => {
    setShowRegister(!showRegister);
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError("");

    try {
      const response = await axiosFetch("/user/login", "POST", {
        email: inputData.email,
        password: inputData.password,
      });
      const { data: user } = response;
      dispatch(setCurrUser(user));
    } catch (error: any) {
      if (error.response.status === 404) {
        setFormError("Invalid username or password");
      }
    }
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError("");

    const { fname, surname, email, emailRepeat, password, passwordRepeat } =
      inputData;

    if (email !== emailRepeat) {
      setFormError("The emails entered do not match");
      return;
    }

    if (password !== passwordRepeat) {
      setFormError("The passwords entered do not match");
      return;
    }

    if (registeredUsers.find((user) => user.email === email)) {
      setFormError("User with this email already exists");
      return;
    }

    const newUser = {
      fname,
      surname,
      email,
      password,
      isAdmin: false,
      rentMovies: [],
    };

    dispatch(registerUser(newUser));

    dispatch(setCurrUser(newUser));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputData({
      ...inputData,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <article>
      {!isRegister || showRegister ? (
        <form
          className="auth-form"
          onSubmit={isRegister ? handleRegister : handleLogin}
        >
          {isRegister && (
            <>
              <label htmlFor="fname">Name</label>
              <input
                type="text"
                id="fname"
                placeholder="name"
                minLength={2}
                onChange={handleChange}
                required
              ></input>
              <label htmlFor="surname">Surname</label>
              <input
                type="text"
                id="surname"
                placeholder="surname"
                minLength={2}
                onChange={handleChange}
              />
            </>
          )}
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="email"
            onChange={handleChange}
            required
          />
          {isRegister && (
            <>
              <label htmlFor="email-repeat">Email again</label>
              <input
                type="email"
                id="emailRepeat"
                placeholder="email"
                onChange={handleChange}
                required
              />
            </>
          )}
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="password"
            onChange={handleChange}
            required
          />
          {isRegister && (
            <>
              <label htmlFor="passwordRepeat">Password again</label>
              <input
                type="password"
                id="passwordRepeat"
                placeholder="password"
                minLength={8}
                onChange={handleChange}
                required
              />
            </>
          )}
          <input
            className="form-button"
            type="submit"
            value={isRegister ? "Register" : "Sign In"}
          />
          <p className="error">{formError}</p>
        </form>
      ) : (
        <button className="form-button" onClick={revealRegister}>
          Register
        </button>
      )}
    </article>
  );
};

export default AuthForm;
