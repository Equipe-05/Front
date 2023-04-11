import axios, { AxiosRequestConfig } from "axios";
import { CreateUser, UpdateUser, LoginRequest, } from "../types/requests";



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
            const response = await axios.post("/auth/signin", { email, password })
            localStorage.setItem("token", response.data.token)
            return response.data
        } catch (error) {
            alert(error)
        }
    },

    //USER 

    postUser: async (data: CreateUser) => {
        try {
            const response = await axios.post("/user", data)
            return response.data
        } catch (error) {
            alert(error)
        }
    },

    getAllUsers: async () => {
        try {
            const response = await axios.get("/user")
            return response.data
        } catch (error) {
            alert(error)
        }
    },

    getUserById: async (data: UpdateUser) => {
        try {
            const response = await axios.get("/user/" + data.id)
            return response.data
        } catch (error) {
            alert(error)
        }
    },

    patchUserById: async (data: UpdateUser) => {
        try {
            const response = await axios.patch("/user/" + data.id, { name: data.name, email: data.email, role: data.role, password: data.password, confirmPassword: data.confirmPassword, cpf: data.cpf, address: data.address, phone: data.phone })
            return response.data
        } catch (error) {
            alert(error)
        }
    },

    deteleUserById: async (data: UpdateUser) => {
        try {
            const response = await axios.delete("/user/" + data.id)
        } catch (error) {
            alert(error)
        }
    }
}