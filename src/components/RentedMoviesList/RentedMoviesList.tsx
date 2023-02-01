import { useAppDispatch, useAppSelector } from "../../redux/hooks";

import { updateCurrUser } from "../../redux/features/currentUser/currentUserSlice";
import { useGetAvailableMoviesQuery } from "../../redux/features/api/apiSlice";

import "./RentedMoviesList.css";
import axiosFetch from "../../utils/axiosFetch";

const RentedMoviesList = () => {
  const currentUser = useAppSelector((state) => state.currentUser);
  const dispatch = useAppDispatch();

  const { data: availableMovies } = useGetAvailableMoviesQuery();

  const fullInfo = currentUser.rentMovies.map((movie) => {
    const foundMovie = availableMovies?.find((mov) => movie.id === mov._id);
    return {
      id: movie.id,
      name: foundMovie?.name,
      time: movie.time,
      genre: foundMovie?.genre,
      price: foundMovie?.rentalPrice,
    };
  });

  const handleChangeTime = async (
    id: string,
    time: number,
    changeTime: string
  ) => {
    if (
      (changeTime === "decrease" && time === 12) ||
      (changeTime === "increase" && time === 168)
    )
      return;

    const { data: updatedUser } = await axiosFetch("/movies/time", "PUT", {
      movieId: id,
      changeTime,
    });

    dispatch(updateCurrUser(updatedUser));
  };

  const handleRemove = async (id: string) => {
    const { data: updatedUser } = await axiosFetch("/movies/return", "POST", {
      movieId: id,
    });

    dispatch(updateCurrUser(updatedUser));
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
              <th></th>
            </tr>
            {fullInfo.map((movie) => (
              <tr key={movie.id}>
                <td className="movie-name">{movie.name}</td>
                <td>{movie.genre}</td>
                <td>
                  <span className="time-settings">
                    <span
                      className="time-control"
                      onClick={() =>
                        handleChangeTime(movie.id, movie.time, "decrease")
                      }
                    >
                      &#60;
                    </span>
                    <span className="time-input">{movie.time}h</span>
                    <span
                      className="time-control"
                      onClick={() =>
                        handleChangeTime(movie.id, movie.time, "increase")
                      }
                    >
                      &#62;
                    </span>
                  </span>
                </td>
                <td>{movie.price}$</td>
                <td
                  className="remove-button"
                  onClick={() => handleRemove(movie.id)}
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
