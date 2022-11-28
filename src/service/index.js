import axios from "axios";
import loginDataUtils from "@/utils/loginData";

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000,
});

service.interceptors.request.use(
  (config) => {
    const token = loginDataUtils.getLoginData("token");
    if (token) {
      config.headers.Authorization = `Barer ${token}`;
    }
    return config;
  },
  (err) => {
    console.log(err);
  }
);

export default service;
