import React, { useState } from "react";

import { useAppSelector, useAppDispatch } from "../../redux/hooks";

import { setUser } from "../../redux/features/currentUser/currentUserSlice";
import { registerUser } from "../../redux/features/registeredUsers/registeredUsersSlice";

import { AuthFormInterface } from "../../redux/interfaces";

import "./AuthForm.css";

const AuthForm = (props: AuthFormInterface) => {
  const [showRegister, setShowRegister] = useState(false);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [registerData, setRegisterData] = useState({
    fname: "",
    surname: "",
    email: "",
    emailRepeat: "",
    password: "",
    passwordRepeat: "",
  });

  const currUser = useAppSelector((state) => state.currentUser);
  const registeredUsers = useAppSelector((state) => state.registeredUsers);
  const dispatch = useAppDispatch();

  const revealRegister = () => {
    setShowRegister(!showRegister);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const matchUser = registeredUsers.filter(
      (user) =>
        user.email === loginData.email && user.password === loginData.password
    );
    if (matchUser.length !== 1) {
      console.log("User with this email or password does not exist");
      return;
    }
    dispatch(
      setUser({
        fname: matchUser[0].fname,
        surname: matchUser[0].surname,
        email: matchUser[0].email,
        password: matchUser[0].password,
      })
    );
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    const { fname, surname, email, emailRepeat, password, passwordRepeat } =
      registerData;
    if (email !== emailRepeat) {
      console.log("email mismatch");
      return;
    }

    if (password !== passwordRepeat) {
      console.log("password mismatch");
      return;
    }

    if (registeredUsers.filter((user) => user.email === email).length > 0) {
      console.log("this email is already used");
      return;
    }

    dispatch(
      registerUser({
        fname,
        surname,
        email,
        password,
      })
    );

    dispatch(
      setUser({
        fname,
        surname,
        email,
        password,
      })
    );
    console.log(registeredUsers);
  };

  const handleChange = (e: React.ChangeEvent<any>) => {
    if (e.target.parentNode.className.includes("login"))
      setLoginData({
        ...loginData,
        [e.target.id]: e.target.value,
      });
    else
      setRegisterData({
        ...registerData,
        [e.target.id]: e.target.value,
      });
  };

  if (!props.isRegister) {
    return (
      <article>
        <form className="login-form" onSubmit={handleLogin}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="email"
            onChange={handleChange}
            required
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="password"
            onChange={handleChange}
            required
          />
          <input className="form-button" type="submit" value="Sign in" />
        </form>
      </article>
    );
  }
  return (
    <article>
      {showRegister ? (
        <form className="register-form" onSubmit={handleRegister}>
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
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="email"
            onChange={handleChange}
            required
          />
          <label htmlFor="email-repeat">Email agail</label>
          <input
            type="email"
            id="emailRepeat"
            placeholder="email"
            onChange={handleChange}
            required
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="password"
            minLength={8}
            onChange={handleChange}
            required
          />
          <label htmlFor="passwordRepeat">Password again</label>
          <input
            type="password"
            id="passwordRepeat"
            placeholder="password"
            minLength={8}
            onChange={handleChange}
            required
          />
          <input className="form-button" type="submit" value="Register"></input>
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
