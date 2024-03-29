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
  UpdateFranchise,
  CreateCustomer,
  UpdateCustomer,
  UpdateSale,
  CreateSale,
  PatchFranchiseByUserId,
} from "../types/requests";

axios.defaults.baseURL = "https://hyperlocal-backend-production-64e4.up.railway.app/";
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
      localStorage.setItem("token", response.data.accessToken);
      return response.data;
    } catch (error) {
      alert(error);
    }
  },

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

  getAllUsersFranchise: async () => {
    try {
      const query = "?role=FRANCHISEE";
      const response = await axios.get("/user" + query);
      return response.data;
    } catch (error) {
      alert(error);
    }
  },

  getUserById: async (id: string) => {
    try {
      const response = await axios.get("/user/" + id);
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

  deteleUserById: async (id: string) => {
    try {
      const response = await axios.delete("/user/" + id);
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

  getProductById: async (id: string) => {
    try {
      const response = await axios.get("/product/" + id);
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

  deleteProductById: async (id: string) => {
    try {
      const response = await axios.delete("/product/" + id);
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

  // FRANCHISE

  postFranchise: async (data: CreateFranchise) => {
    try {
      const response = await axios.post("/franchise", data);
      return response.data;
    } catch (error) {
      alert(error);
    }
  },

  getAllFranchise: async () => {
    try {
      const response = await axios.get("/franchise");
      return response.data;
    } catch (error) {
      alert(error);
    }
  },

  getFranchiseById: async (id: string) => {
    try {
      const response = await axios.get("/franchise/" + id);
      return response.data;
    } catch (error) {
      alert(error);
    }
  },

  patchFranchiseById: async (data: UpdateFranchise) => {
    try {
      const response = await axios.patch("/franchise/" + data.id, {
        name: data.name,
        adress: data.address,
        phone: data.phone,
        cnpj: data.cnpj,
      });
      return response.data;
    } catch (error) {
      alert(error);
    }
  },

  deleteFranchiseById: async (id: string) => {
    try {
      const response = await axios.delete("/franchise/" + id);
    } catch (error) {
      alert(error);
    }
  },

  patchFranchiseByUserId: async (data: PatchFranchiseByUserId) => {
    try {
      const response = await axios.patch(
        "/franchise/" + data.franchiseId + "/user",
        {
          userId: data.userId,
        }
      );
      return response.data;
    } catch (error) {
      alert(error);
    }
  },

  //CUSTOMER

  postCustomer: async (data: CreateCustomer) => {
    try {
      const response = await axios.post("/customer", data);
      return response.data;
    } catch (error) {
      alert(error);
    }
  },

  getAllCustomer: async () => {
    try {
      const response = await axios.get("/customer");
      return response.data;
    } catch (error) {
      alert(error);
    }
  },

  getCustomerById: async (id: string) => {
    try {
      const response = await axios.get("/customer/" + id);
      return response.data;
    } catch (error) {
      alert(error);
    }
  },

  patchCustomerById: async (data: UpdateCustomer) => {
    try {
      const response = await axios.patch("/customer/" + data.id, {
        name: data.name,
        adress: data.address,
        phone: data.phone,
        cnpj: data.cnpj,
      });
      return response.data;
    } catch (error) {
      alert(error);
    }
  },

  deleteCustomerById: async (id: string) => {
    try {
      const response = await axios.delete("/Customer/" + id);
    } catch (error) {
      alert(error);
    }
  },

  //SALE

  postSale: async (data: CreateSale) => {
    try {
      const response = await axios.post("/sale", data);
      return response.data;
    } catch (error) {
      alert(error);
    }
  },

  getAllSale: async () => {
    try {
      const response = await axios.get("/sale");
      return response.data;
    } catch (error) {
      alert(error);
    }
  },

  getSaleById: async (id: string) => {
    try {
      const response = await axios.get("/sale/" + id);
      return response.data;
    } catch (error) {
      alert(error);
    }
  },

  patchSaleById: async (data: UpdateSale) => {
    try {
      const response = await axios.patch("/sale/" + data.id, {
        description: data.description,
      });
      return response.data;
    } catch (error) {
      alert(error);
    }
  },

  deleteSaleById: async (id: string) => {
    try {
      const response = await axios.delete("/sale/" + id);
    } catch (error) {
      alert(error);
    }
  },

  getFranchiseSaleById: async (franchiseId: string) => {
    try {
      const response = await axios.get("/sale/franchise/" + franchiseId);
      return response.data;
    } catch (error) {
      alert(error);
    }
  },

  getCustomerSaleById: async (customerId: string) => {
    try {
      const response = await axios.get("/sale/customer/" + customerId);
      return response.data;
    } catch (error) {
      alert(error);
    }
  },

  getUserSaleById: async (userId: string) => {
    try {
      const response = await axios.get("/sale/user/" + userId);
      return response.data;
    } catch (error) {
      alert(error);
    }
  },

  getProductSaleById: async (productId: string) => {
    try {
      const response = await axios.get("/sale/product/" + productId);
      return response.data;
    } catch (error) {
      alert(error);
    }
  },

  // CALLED

  postCalled: async (data: any) => {
    try {
      const response = await axios.post("/called", data)
      return response.data;
    } catch (error) {
      alert(error)
    }
  }
};
