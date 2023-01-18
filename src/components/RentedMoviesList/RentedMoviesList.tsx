import { useAppDispatch, useAppSelector } from "../../redux/hooks";

import { updateCurrUser } from "../../redux/features/currentUser/currentUserSlice";
import { updateUser } from "../../redux/features/registeredUsers/registeredUsersSlice";
import { returnMovie } from "../../redux/features/availableMovies/availableMoviesSlice";

import { RentMovieInterface } from "../../interfaces";
import "./RentedMoviesList.css";

const RentedMoviesList = () => {
  const currentUser = useAppSelector((state) => state.currentUser);
  const dispatch = useAppDispatch();

  const handleChangeTime = (movie: RentMovieInterface, changeTime: string) => {
    const movieIndex = currentUser.rentMovies.findIndex(
      (movies) => movies.name === movie.name
    );

    const newRentList = JSON.parse(JSON.stringify(currentUser.rentMovies));

    if (changeTime === "decrease") {
      if (movie.time === 12) return;
      newRentList[movieIndex].time -= 12;
    } else {
      if (movie.time === 168) return;
      newRentList[movieIndex].time += 12;
    }

    dispatch(updateCurrUser({ ...currentUser, rentMovies: [...newRentList] }));
    dispatch(updateUser({ ...currentUser, rentMovies: [...newRentList] }));
  };

  const handleRemove = (movie: RentMovieInterface) => {
    const movieIndex = currentUser.rentMovies.findIndex(
      (movies) => movies.name === movie.name
    );
    const newMovieArray = JSON.parse(JSON.stringify(currentUser.rentMovies));
    newMovieArray.splice(movieIndex, 1);

    dispatch(returnMovie(movie.name));
    dispatch(
      updateCurrUser({ ...currentUser, rentMovies: [...newMovieArray] })
    );
    dispatch(updateUser({ ...currentUser, rentMovies: [...newMovieArray] }));
  };

  return (
    <div className="body-wrapper">
      <section className="your-movies">
        <h2 className="your-movies-header">Your movies</h2>
        <table id="your-movies-table">
          <tbody>
            <tr>
              <th>Name</th>
              <th>Genre</th>
              <th>Time</th>
              <th>Price</th>
            </tr>
            {currentUser.rentMovies.map((movie) => (
              <tr key={movie.name}>
                <td className="movie-name">{movie.name}</td>
                <td>{movie.genre}</td>
                <td>
                  <span className="time-settings">
                    <span
                      className="time-control"
                      onClick={() => handleChangeTime(movie, "decrease")}
                    >
                      &#60;
                    </span>
                    <span className="time-input">{movie.time}h</span>
                    <span
                      className="time-control"
                      onClick={() => handleChangeTime(movie, "increase")}
                    >
                      &#62;
                    </span>
                  </span>
                </td>
                <td>{movie.price}$</td>
                <td
                  className="remove-button"
                  onClick={() => handleRemove(movie)}
                >
                  Remove
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default RentedMoviesList;
