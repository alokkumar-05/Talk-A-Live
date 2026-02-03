import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:5001/api",
  withCredentials: true,
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // normal: user not logged in
      return Promise.reject(error);
    }
    console.error("API Error:", error);
    return Promise.reject(error);
  }
);
