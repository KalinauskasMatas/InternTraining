import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { Tooltip } from "react-tooltip";

import { rentMovie } from "../../redux/features/availableMovies/availableMoviesSlice";
import { updateCurrUser } from "../../redux/features/currentUser/currentUserSlice";
import { updateUser } from "../../redux/features/registeredUsers/registeredUsersSlice";

import checkIcon from "./assets/check.png";
import crossIcon from "./assets/cross.png";

import "./MoviesList.css";
import { useGetAvailableMoviesQuery } from "../../redux/features/api/apiSlice";
import axiosFetch from "../../utils/axiosFetch";

const MoviesList = () => {
  const currentUser = useAppSelector((state) => state.currentUser);
  const dispatch = useAppDispatch();

  const { data: availableMovies } = useGetAvailableMoviesQuery();

  const rent = async (rentMovie) => {
    const isMovieRented =
      currentUser.rentMovies.filter((movie) => movie.id === rentMovie._id)
        .length > 0;
    if (isMovieRented) return;

    const { data: updatedUser } = await axiosFetch("/movies/rent", "POST", {
      movieId: rentMovie._id,
    });

    dispatch(updateCurrUser(updatedUser));

    // const newRentMovie = {
    //   name: movieName,
    //   genre: foundMovie.genre,
    //   time: 12,
    //   price: foundMovie.rentalPrice,
    // };

    // dispatch(rentMovie(movieName));

    // dispatch(
    //   updateCurrUser({
    //     rentMovies: [...currentUser.rentMovies, newRentMovie],
    //   })
    // );

    // dispatch(
    //   updateUser({
    //     ...currentUser,
    //     rentMovies: [...currentUser.rentMovies, newRentMovie],
    //   })
    // );
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
          {availableMovies?.map((movie) => (
            <tr key={movie.name}>
              <td>{movie.name}</td>
              <td>{movie.genre}</td>
              <td>{movie.rentalPrice}$</td>
              <td className="isInStock">
                {movie.stock > 0 ? (
                  <img src={checkIcon} alt="Yes" />
                ) : (
                  <img src={crossIcon} alt="No" />
                )}
              </td>
              {currentUser.rentMovies?.find(
                (movies) => movies.id === movie._id
              ) ? (
                <>
                  <td
                    className="movie-rent disabled-button"
                    id={"rented" + movie._id}
                  >
                    Rent
                    <Tooltip
                      anchorId={"rented" + movie._id}
                      style={{ backgroundColor: "rgba(0, 0, 0, 1)" }}
                      content="You have already rented this movie"
                    />
                  </td>
                </>
              ) : movie.stock < 1 ? (
                <td
                  className="movie-rent disabled-button"
                  id={"no-stock" + movie._id}
                >
                  Rent
                  <Tooltip
                    anchorId={"no-stock" + movie._id}
                    style={{ backgroundColor: "rgba(0, 0, 0, 1)" }}
                    content="There is no stock left"
                  />
                </td>
              ) : (
                <td className="movie-rent" onClick={() => rent(movie)}>
                  Rent
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default MoviesList;
