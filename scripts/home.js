const movie = (name, genre, rentalPrice, count) => {
  return {
    name: name,
    genre: genre,
    rentalPrice: rentalPrice,
    count: count
  }
}

const defaultMovies = [
  movie('The Godfather', 'Drama', 5.99, 3),
  movie('The Shawshank Redemption', 'Drama', 4.99, 5),
  movie('Schindler\'s List', 'Biography', 5.49, 2),
  movie('Raging Bull', 'Biography', 4.69, 1),
  movie('Casablanca', 'Drama', 3.99, 2),
  movie('Citizen Kane', 'Mystery', 4.99, 3),
  movie('Gone with the Wind', 'Romance', 2.99, 0),
  movie('The Wizard of Oz', 'Adventure', 5.99, 2)
]

const myMovie = (name, genre, time, price) => {
  return {
    name: name,
    genre: genre,
    time: time,
    price: price
  }
}

const defaultMyMovies = []

const storageMovies = localStorage.getItem("movies");
const movies = storageMovies ? JSON.parse(storageMovies) : defaultMovies;

const storageMyMovies = localStorage.getItem("myMovies");
const myMovies = storageMyMovies ? JSON.parse(storageMyMovies) : defaultMyMovies;



const tableEl = document.getElementById('available-movies-table');

const renderTable = (movieList, tableElement) => {
  const tableList = movieList.reduce((prev, curr) => {
    return `${prev}
    <tr>
      <td>${curr.name}</td>
      <td>${curr.genre}</td>
      <td>${curr.rentalPrice}$</td>
      ${curr.count > 0 ? 
        `<td class="isInStock"><img src="./assets/check.png" alt="Yes"></td>` :
        `<td class="isInStock"><img src="./assets/cross.png" alt="No"></td>`
      }
      <td class="movie-rent" onclick="rent(this, movies, myMovies, tableEl)">Rent</td>
    </tr>
    `
  }, `
  <tr>
    <th>Name</th>
    <th>Genre</th>
    <th>Price for 12h</th>
    <th>Is in stock</th>
  </tr>
  `);
  tableElement.innerHTML = tableList;
}

renderTable(movies, tableEl);

const rent = (element, movieList, myMovieList, tableElement) => {
  const movieName = element.parentNode.children[0].textContent;
  if (myMovieList.filter((movie) => movie.name === movieName).length > 0) return;
  const movieIndex = movieList.findIndex((e) => e.name === movieName);
  const foundMovie = movieList[movieIndex];
  if (foundMovie.count === 0) return;
  foundMovie.count--;
  myMovieList.push(myMovie(foundMovie.name, foundMovie.genre, 12, foundMovie.rentalPrice));

  localStorage.setItem("myMovies", JSON.stringify(myMovieList));
  localStorage.setItem("movies", JSON.stringify(movieList));
  renderTable(movieList, tableElement)
}