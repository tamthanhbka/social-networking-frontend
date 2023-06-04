import axios, {
  InternalAxiosRequestConfig,
  AxiosResponse,
  AxiosError,
} from "axios";
const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/",
});
const onRequest = (config: InternalAxiosRequestConfig) => {
  config.headers.set("Content-Type", "application/json");
  config.headers.Authorization = "Bearer " + localStorage.getItem("token");
  return config;
};
const onResponse = (response: AxiosResponse) => {
  const token = response.data.token;
  if (token) {
    localStorage.setItem("token", token);
  }
  return response;
};
axiosInstance.interceptors.request.use(onRequest);
axiosInstance.interceptors.response.use(onResponse);
export { axiosInstance, AxiosError };
