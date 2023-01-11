const storageMovies = localStorage.getItem("movies");
const movies = storageMovies ? JSON.parse(storageMovies) : [];

const storageMyMovies = localStorage.getItem("myMovies");
const myMovies = storageMyMovies ? JSON.parse(storageMyMovies) : [];

const yourMoviesTableEl = document.getElementById('your-movies-table');

const renderTable = (movieList, tableElement) => {
  const tableList = movieList.reduce((prev, curr) => {
    return `${prev}
    <tr>
      <td class="movie-name">${curr.name}</td>
      <td>${curr.genre}</td>
      <td>
        <span class="time-settings">
          <span class="time-control" onclick="changeTime(this, false, myMovies, yourMoviesTableEl)">&#60;</span>
          <span class="time-input">${curr.time}h</span>
          <span class="time-control" onclick="changeTime(this, true, myMovies, yourMoviesTableEl)">&#62;</span>
        </span>
      </td>
      <td>${curr.price}$</td>
      <td class="remove-button" onclick="removeMovie(this, myMovies, movies, yourMoviesTableEl)">Remove</td>
    </tr>
    `
  }, `
  <tr>
    <th>Name</th>
    <th>Genre</th>
    <th>Time</th>
    <th>Price</th>
  </tr>
  `);
  tableElement.innerHTML = tableList;
}

renderTable(myMovies, yourMoviesTableEl);

const changeTime = (movieElement, isTimeIncrease, myMovieList, tableElement) => {
  const movieName = movieElement.parentNode.parentNode.parentNode.children[0].textContent;
  const movieIndex = myMovieList.findIndex((e) => e.name === movieName);
  if (isTimeIncrease) {
    if (myMovieList[movieIndex].time === 168) return;
    myMovieList[movieIndex].time += 12;
  } else {
    if (myMovieList[movieIndex].time === 12) return;
    myMovieList[movieIndex].time -= 12;
  }
  localStorage.setItem("myMovies", JSON.stringify(myMovieList));
  renderTable(myMovieList, tableElement);
}

const removeMovie = (movieElement, myMovieList, movieList, tableElement) => {
  const movieName = movieElement.parentNode.children[0].textContent;
  const myMovieIndex = myMovieList.findIndex((e) => e.name === movieName);
  myMovieList.splice(myMovieIndex, 1);

  const movieIndex = movieList.findIndex((e) => e.name === movieName);
  movieList[movieIndex].count += 1;

  localStorage.setItem("movies", JSON.stringify(movieList));
  localStorage.setItem("myMovies", JSON.stringify(myMovieList));
  renderTable(myMovieList, tableElement);
}