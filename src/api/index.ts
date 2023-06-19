import { axiosInstance, AxiosError } from "./axios";
const getAllPosts = async () => {
  const res = await axiosInstance.get("/post/getAllPosts");
  const data = res.data;
  return data.data;
};
const getListPosts = async () => {
  const res = await axiosInstance.get("/me/getListPosts");
  const data = res.data;
  return data.data;
};
const getPosts = async (id?: string) => {
  const url = id ? `/post/getListPostsOfUser/${id}` : "/post/getAllPosts";
  console.log(url);
  const res = await axiosInstance.get(url);
  const data = res.data;
  console.log(data);

  return data.data;
};
const getListFollowers = async () => {
  const res = await axiosInstance.get("/me/getListFollowers");
  const data = res.data;
  return data.data;
};
const getInfo = async (id: string) => {
  const res = await axiosInstance.get(`/user/getInfo/${id}`);
  const data = res.data;
  console.log(data.data);

  return data.data;
};
const login = async (email: string, password: string) => {
  await axiosInstance.post("/auth/login", { email, password });
  const data = await getMe();
  return data;
};
const getMe = async () => {
  const response = await axiosInstance.get("/me");
  return response.data.data;
};
const signup = async (
  email: string,
  phone: string,
  password: string,
  username: string
) => {
  await axiosInstance.post("/auth/signup", {
    email,
    phone,
    password,
    username,
  });
  const response = await axiosInstance.get("/me");
  return response.data.data;
};
export {
  getAllPosts,
  login,
  axiosInstance,
  AxiosError,
  signup,
  getMe,
  getListPosts,
  getListFollowers,
  getInfo,
  getPosts,
};
