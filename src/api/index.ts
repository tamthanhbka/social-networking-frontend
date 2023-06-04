import { axiosInstance, AxiosError } from "./axios";
const getAllPosts = async () => {
  const res = await axiosInstance.get("/post/getAllPosts");
  const data = res.data;
  return data.data;
};
const login = async (email: string, password: string) => {
  await axiosInstance.post("/auth/login", { email, password });
  const response = await axiosInstance.get("/me");
  return response.data.data;
};
export { getAllPosts, login, axiosInstance, AxiosError };
