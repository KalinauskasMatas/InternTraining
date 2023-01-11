const tableEl = document.getElementById("available-movies-table");
const logoutEl = document.getElementById("logout");

const currentUser = JSON.parse(localStorage.getItem("currentUser"))?.[0] || {};
if (Object.keys(currentUser).length === 0) location.href = "./login.html";

const fetchMovies = async (address) => {
  const fetchPromise = fetch(address).then((res) => res.json());
  const data = await fetchPromise;
  return data;
};

const myMovie = (name, genre, time, price) => {
  return {
    name: name,
    genre: genre,
    time: time,
    price: price,
  };
};

const renderTable = (movieList, tableElement) => {
  const tableList = movieList.reduce(
    (prev, curr) => {
      return `${prev}
    <tr>
      <td>${curr.name}</td>
      <td>${curr.genre}</td>
      <td>${curr.rentalPrice}$</td>
      ${
        curr.count > 0
          ? `<td class="isInStock"><img src="./assets/check.png" alt="Yes"></td>`
          : `<td class="isInStock"><img src="./assets/cross.png" alt="No"></td>`
      }
      <td class="movie-rent" onclick="rentMovie(this, movies, myMovies, tableEl)">Rent</td>
    </tr>
    `;
    },
    `
  <tr>
    <th>Name</th>
    <th>Genre</th>
    <th>Price for 12h</th>
    <th>Is in stock</th>
  </tr>
  `
  );
  tableElement.innerHTML = tableList;
};

let defaultMovies = [];

let movies;
let myMovies;

(async function () {
  try {
    defaultMovies = await fetchMovies("./scripts/defaultData.json");

    const storageMovies = localStorage.getItem("movies");
    movies = storageMovies ? JSON.parse(storageMovies) : defaultMovies;

    const storageMyMovies = localStorage.getItem("myMovies");
    myMovies = storageMyMovies ? JSON.parse(storageMyMovies) : [];

    renderTable(movies, tableEl);
  } catch (error) {
    console.error(error);
  }
})();

const rentMovie = (element, movieList, myMovieList, tableElement) => {
  const movieName = element.parentNode.children[0].textContent;
  if (myMovieList.filter((movie) => movie.name === movieName).length > 0)
    return;

  const movieIndex = movieList.findIndex((e) => e.name === movieName);
  const foundMovie = movieList[movieIndex];
  if (foundMovie.count === 0) return;

  foundMovie.count--;
  myMovieList.push(
    myMovie(foundMovie.name, foundMovie.genre, 12, foundMovie.rentalPrice)
  );

  localStorage.setItem("myMovies", JSON.stringify(myMovieList));
  localStorage.setItem("movies", JSON.stringify(movieList));
  renderTable(movieList, tableElement);
};

const logout = () => {
  localStorage.removeItem("currentUser");
  location.href = "./login.html";
};

logoutEl.addEventListener("click", logout);
