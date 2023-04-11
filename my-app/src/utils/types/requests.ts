export type UserInput = {
  Name: String;
  Email: String;
  Password: String;
  CPF: String;
};

export type LoginRequest = {
  email: string;
  password: string;
}

export type UpdateUser = {
  id: string;
  name: string;
  email: string;
  role: string;
  password: string;
  confirmPassword: string;
  cpf: string;
  address: string;
  phone: string;
}

export type CreateUser = {
  name: string;
  email: string;
  role: string;
  password: string;
  confirmPassword: string;
  cpf: string;
  address: string;
  phone: string;
}