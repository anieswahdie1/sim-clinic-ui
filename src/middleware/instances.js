import axios from "axios";
import useAuth from "../stores/useAuth";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_SIM_CLINIC_API,
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Set Header Request via Interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    const token = useAuth.getState().accessToken;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// intercept response from api
axiosInstance.interceptors.response.use(
  (response) => response
  // (error) => {
  //   if (error.response?.status === 401) {
  //     useAuth.getState().setAuthorizeFalse();
  //     // window.location.href = "/";
  //   }
  //   return Promise.reject(error);
  // }
);

export default axiosInstance;
