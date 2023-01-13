import React from "react";

import Header from "../../components/Header/Header";
import AuthForm from "../../components/AuthForm/AuthForm";
import Footer from "../../components/Footer/Footer";

const Login = () => {
  return (
    <div className="body-wrapper">
      <Header />
      <AuthForm />
      <AuthForm />
      <Footer />
    </div>
  );
};

export default Login;
