import React from "react";

import { AuthFormInterface } from "../../interfaces";

import "./AuthForm.css";

const AuthForm = (props: AuthFormInterface) => {
  if (!props.isRegister) {
    return (
      <article>
        <form className="login-form">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="email" required />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="password"
            required
          />
          <input className="form-button" type="submit" value="Sign in" />
        </form>
      </article>
    );
  }
  return (
    <article>
      <form className="register-form">
        <label htmlFor="fname">Name</label>
        <input
          type="text"
          id="fname"
          placeholder="name"
          minLength={2}
          required
        ></input>
        <label htmlFor="surname">Surname</label>
        <input type="text" id="surname" placeholder="surname" minLength={2} />
        <label htmlFor="email-form">Email</label>
        <input type="email" id="email-form" placeholder="email" required />
        <label htmlFor="email-repeat">Email agail</label>
        <input type="email" id="email-repeat" placeholder="email" required />
        <label htmlFor="password-form">Password</label>
        <input
          type="password"
          id="password-form"
          placeholder="password"
          minLength={8}
          required
        />
        <label htmlFor="password-repeat">Password again</label>
        <input
          type="password"
          id="password-repeat"
          placeholder="password"
          minLength={8}
          required
        />
        <input className="form-button" type="submit" value="Register"></input>
      </form>
      <button className="form-button" id="show-register">
        Register
      </button>
    </article>
  );
};

export default AuthForm;
