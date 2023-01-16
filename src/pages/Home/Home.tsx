import React from "react";
import Header from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";

const Home = () => {
  return (
    <div className="body-wrapper">
      <Header title={"Movie rental"} />
      <NavBar />
    </div>
  );
};

export default Home;
