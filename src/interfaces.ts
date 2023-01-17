export interface Title {
  title: string;
}

export interface AuthFormInterface {
  isRegister: boolean;
}

export interface UserState {
  fname: string;
  surname: string;
  email: string;
  password: string;
  rentMovies: RentMovieInterface[];
}

export interface MovieInterface {
  name: string;
  genre: string;
  rentalPrice: number;
  stock: number;
}

export interface RentMovieInterface {
  name: string;
  genre: string;
  time: number;
  price: number;
}
