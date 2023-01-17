import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";
import RentedMoviesList from "../../components/RentedMoviesList/RentedMoviesList";

const YourMovies = () => {
  return (
    <div className="body-wrapper">
      <Header title="Movie rental" />
      <NavBar />
      <RentedMoviesList />
      <Footer />
    </div>
  );
};

export default YourMovies;
