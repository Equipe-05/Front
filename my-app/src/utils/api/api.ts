import axios, { AxiosRequestConfig } from "axios";
import {
  CreateUser,
  UpdateUser,
  LoginRequest,
  CreateProduct,
  UpdateProduct,
  UpdateProductPlan,
  UpdateUserRole,
  UpdateUserPassword,
  CreateFranchise,
} from "../types/requests";

axios.defaults.baseURL = "https://back-production-8e9e.up.railway.app";
axios.defaults.headers.post["Content-Type"] = "application/json";

axios.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers = {
        Authorization: "Bearer " + token,
      };
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export const api = {
  //LOGIN

  login: async ({ email, password }: LoginRequest) => {
    try {
      const response = await axios.post("/auth/signin", { email, password });
      console.log();
      localStorage.setItem("token", response.data.accessToken);
      return response.data;
    } catch (error) {
      alert(error);
    }
  },

  //GET
  getUser: async () => {
    try {
      const response = await axios.get("/auth/signed");
      return response.data;
    } catch (error) {
      alert(error);
    }
  },

  //USER

  postUser: async (data: CreateUser) => {
    try {
      const response = await axios.post("/user", data);
      return response.data;
    } catch (error) {
      alert(error);
    }
  },

  getAllUsers: async () => {
    try {
      const response = await axios.get("/user");
      return response.data;
    } catch (error) {
      alert(error);
    }
  },

  getUserById: async (data: UpdateUser) => {
    try {
      const response = await axios.get("/user/" + data.id);
      return response.data;
    } catch (error) {
      alert(error);
    }
  },

  patchUserById: async (data: UpdateUser) => {
    try {
      const response = await axios.patch("/user/" + data.id, {
        name: data.name,
        email: data.email,
        cpf: data.cpf,
        address: data.address,
        phone: data.phone,
      });
      return response.data;
    } catch (error) {
      alert(error);
    }
  },

  deteleUserById: async (data: UpdateUser) => {
    try {
      const response = await axios.delete("/user/" + data.id);
    } catch (error) {
      alert(error);
    }
  },

  patchUserRoleById: async (data: UpdateUserRole) => {
    try {
      const response = await axios.patch("/user/" + data.id + "/role", {
        role: data.role,
      });
      return response.data;
    } catch (error) {
      alert(error);
    }
  },

  patchUserPasswordById: async (data: UpdateUserPassword) => {
    try {
      const response = await axios.patch("/user/" + data.id + "/password", {
        password: data.password,
        confirmPassword: data.confirmPassword,
        currentPassword: data.currentPassword,
      });
      return response.data;
    } catch (error) {
      alert(error);
    }
  },

  // PRODUCT

  postProduct: async (data: CreateProduct) => {
    try {
      const response = await axios.post("/product", data);
      return response.data;
    } catch (error) {
      alert(error);
    }
  },

  getAllProducts: async () => {
    try {
      const response = await axios.get("/product");
      return response.data;
    } catch (error) {
      alert(error);
    }
  },

  getProductById: async (data: UpdateProduct) => {
    try {
      const response = await axios.get("/product/" + data.id);
      return response.data;
    } catch (error) {
      alert(error);
    }
  },

  patchProductById: async (data: UpdateProduct) => {
    try {
      const response = await axios.patch("/product/" + data.id, {
        name: data.name,
        description: data.description,
        score: data.score,
      });
      return response.data;
    } catch (error) {
      alert(error);
    }
  },

  deleteProductById: async (data: UpdateProduct) => {
    try {
      const response = await axios.delete("/product/" + data.id);
    } catch (error) {
      alert(error);
    }
  },

  patchProductPlanById: async (data: UpdateProductPlan) => {
    try {
      const response = await axios.patch("/product/" + data.id + "/plan", {
        plan: data.plan,
      });
      return response.data;
    } catch (error) {
      alert(error);
    }
  },

  // PRODUCT

  postFranchise: async (data: CreateFranchise) => {
    try {
      const response = await axios.post("/franchise", data);
      return response.data;
    } catch (error) {
      alert(error);
    }
  },
};
