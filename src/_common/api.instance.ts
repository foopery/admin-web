import axios from "axios";
import { selectCookie } from "../components/auth/_core/auth.cookies";

/* API Instance */
export const apiInstance = axios.create({ baseURL: "https://api-dev.foopery.com" });
/* API Interceptor */
apiInstance.interceptors.request.use(
  (config) => {
    const token = selectCookie.getCookie("Token");
    console.log("Token:", token);
    // config.headers['Content-Type'] = 'application/json';
    // config.headers['Authorization'] = `Bearer ${token}`;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
      // config.headers["Content-Type"] = "application/json";
    }
    console.log("Request Headers:", config.headers);
    return config;
  },
  (error) => {
    console.log("Request Error:", error);
    return Promise.reject(error);
  },
);
