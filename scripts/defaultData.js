const movie = (name, genre, rentalPrice, count) => {
  return {
    name: name,
    genre: genre,
    rentalPrice: rentalPrice,
    count: count
  }
}

const adefaultMovies = [
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

const defaultMyMovies = [
  myMovie ('The Godfather', 'Drama', 12, 5.99),
  myMovie ('Schindler\'s List', 'Biography', 24, 5.49)
]

export {defaultMovies, defaultMyMovies}