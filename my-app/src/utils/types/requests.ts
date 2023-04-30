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

export type UserFranchise = {
  id: string;
  name: string;
  email: string;
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
};

export type UpdateUserPassword = {
  id: string;
  password: string;
  confirmPassword: string;
  currentPassword: string;
};

// PRODUCT

export type CreateProduct = {
  name: string;
  description: string;
  plan: string;
  score: number;
};

export type UpdateProduct = {
  id: string;
  name: string;
  description: string;
  score: number;
};

export type AllProduct = {
  id: string;
  name: string;
  description: string;
  score: number;
  plan: string;
};

export type UpdateProductPlan = {
  id: string;
  plan: string;
};

export type optionPlan = {
  value: string;
  label: string;
};

// FRANCHISE

export type CreateFranchise = {
  name: string;
  address: string;
  phone: string;
  cnpj: number;
};

export type UpdateFranchise = {
  id: string;
  name: string;
  address: string;
  phone: number;
  cnpj: string;
};

export type PatchFranchiseByUserId = {
  franchiseId: string | null;
  userId: string;
};

// CUSTOMER

export type CreateCustomer = {
  name: string;
  cnpj: string;
  address: string;
  phone: string;
  franchiseId: string | null;
};

export type UpdateCustomer = {
  id: string;
  name: string;
  address: string;
  phone: string;
  cnpj: string;
};

// SALE

export type CreateSale = {
  description: string;
  customerId: string;
  franchiseId: string;
  productId: string;
  userId: string;
};

export type UpdateSale = {
  id: string;
  description: string;
};

export type Sale = {
  id: string;
  description: string;
  customerId: string;
  franchiseId: string;
  productId: string;
  userId: string;
};
