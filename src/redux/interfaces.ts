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
}

export interface MovieInterface {
  name: string;
  genre: string;
  rentalPrice: number;
  stock: number;
}
