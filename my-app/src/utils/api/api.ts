import axios, { AxiosRequestConfig } from "axios";
import { LoginRequest } from "../types/requests";



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
            const response = await axios.post("/auth/signed", { email, password })
            localStorage.setItem("token", response.data.token)
            return response.data
        } catch (error) {
            alert(error)
        }
    }
}