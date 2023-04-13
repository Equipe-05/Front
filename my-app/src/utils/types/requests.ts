export type UserInput = {
  Name: String;
  Email: String;
  Password: String;
  CPF: String;
};

//LOGIN

export type LoginRequest = {
  email: string;
  password: string;
};

//USER

export type UpdateUser = {
  id: string;
  name: string;
  email: string;
  cpf: string;
  address: string;
  phone: string;
};

export type CreateUser = {
  name: string;
  email: string;
  role?: string;
  password: string;
  confirmPassword: string;
  cpf: string;
  address: string;
  phone: string;
};

export type UpdateUserRole = {
  id: string;
  role: string;
}

export type UpdateUserPassword = {
  id: string;
  password: string;
  confirmPassword: string;
  currentPassword: string;
}

// PRODUCT

export type CreateProduct = {
  name: string;
  description: string;
  plan: string;
  score: number;
}

export type UpdateProduct = {
  id: string;
  name: string;
  description: string;
  score: string;
}

export type UpdateProductPlan = {
  id: string;
  plan: string;
}