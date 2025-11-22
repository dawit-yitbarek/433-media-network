import axios from "axios";
const BackEndUrl = import.meta.env.VITE_BACKEND_URL;

const publicApi = axios.create({
  baseURL: BackEndUrl,
  withCredentials: true,
});

const protectedApi = axios.create({
  baseURL: BackEndUrl,
  withCredentials: true,
});

// Request interceptor: add access token
protectedApi.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export { publicApi, protectedApi };