import axios from "axios";
import { userAuth } from "@/stores";

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL + "/api/v1",
});
  
axiosInstance.interceptors.request.use(function (config) {
    const authInfo = userAuth();
    const AUTH_TOKEN = authInfo.user.meta ? `Bearer ${authInfo.user.meta.token}` : "";

    config.headers.common["Authorization"] = AUTH_TOKEN;
    
    return config;
  }, function (error) {
    return Promise.reject(error);
});

  
export default axiosInstance;