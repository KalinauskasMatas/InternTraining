import { useAppDispatch, useAppSelector } from "../../redux/hooks";

import { rentMovie } from "../../redux/features/availableMovies/availableMoviesSlice";

import "./MoviesList.css";

import checkIcon from "./assets/check.png";
import crossIcon from "./assets/cross.png";

const MoviesList = () => {
  const availableMovies = useAppSelector((state) => state.availableMovies);
  const dispatch = useAppDispatch();

  const rent = (movieName) => {
    dispatch(rentMovie(movieName));
  };

  return (
    <section className="available-movies">
      <h2 className="available-movies-header">Available Movies</h2>
      <table id="available-movies-table">
        <tbody>
          <tr>
            <th>Name</th>
            <th>Genre</th>
            <th>Price for 12h</th>
            <th>Is in stock</th>
          </tr>
          {availableMovies.map((movie) => (
            <tr key={movie.name}>
              <td>{movie.name}</td>
              <td>{movie.genre}</td>
              <td>{movie.rentalPrice}</td>
              <td className="isInStock">
                {movie.stock > 0 ? (
                  <img src={checkIcon} alt="Yes" />
                ) : (
                  <img src={crossIcon} alt="No" />
                )}
              </td>
              <td className="movie-rent" onClick={() => rent(movie.name)}>
                Rent
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default MoviesList;
