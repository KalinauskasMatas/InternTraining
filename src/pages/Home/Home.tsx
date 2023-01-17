import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import MoviesList from "../../components/MoviesList/MoviesList";
import NavBar from "../../components/NavBar/NavBar";

const Home = () => {
  return (
    <div className="body-wrapper">
      <Header title={"Movie rental"} />
      <NavBar />
      <MoviesList />
      <Footer />
    </div>
  );
};

export default Home;
