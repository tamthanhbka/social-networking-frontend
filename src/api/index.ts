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
  const url = id ? `post/getListPostsOfUser/${id}` : "/post/getAllPosts";
  const res = await axiosInstance.get(url);
  const data = res.data;
  return data.data;
};
const getPostsOfGroup = async (id?: string) => {
  const res = await axiosInstance.get(`group/getListPosts/${id}`);
  const data = res.data;
  return data.data;
};
const getInfo = async (id: string) => {
  const res = await axiosInstance.get(`/user/getInfo/${id}`);
  const data = res.data;
  return data.data;
};
const getMe = async () => {
  const response = await axiosInstance.get("/me");
  return response.data.data;
};
const followUser = async (id: string) => {
  const res = await axiosInstance.patch(`/user/follow/${id}`);
  const data = res.data;
  return data.data;
};
const unfollowUser = async (id: string) => {
  const res = await axiosInstance.patch(`/user/unfollow/${id}`);
  const data = res.data;
  return data.data;
};
const listFollowedPeople = async () => {
  const res = await axiosInstance.get("/me/getIsFollowedPeople");
  const data = res.data;
  return data.data;
};
const createPost = async (content: string, image: string) => {
  if (!content) throw new Error("Bài viết cần có nội dung hoặc ảnh!");
  const res = await axiosInstance.post(`post/create`, {
    content,
  });
  return res.data.data;
};
const createPostOfGroup = async (content: string, groupId: string) => {
  if (!content) throw new Error("Bài viết cần có nội dung hoặc ảnh!");
  const res = await axiosInstance.post(`post/createPostOfGroup`, {
    groupId,
    content,
  });

  return res.data.data;
};
const updateInfo = async (info: object) => {
  const res = await axiosInstance.post("me/updateInfo", info);
  return res.data.data;
};
const createGroup = async (info: object) => {
  const res = await axiosInstance.post("group/create", info);
  console.log(res.data.data);
  return res.data.data;
};
const getListGroup = async () => {
  const res = await axiosInstance.get("/me/getListGroup");
  const data = res.data;
  return data.data;
};
const getInfoGroup = async (id?: string) => {
  if (!id) throw new Error("Group not found!");
  const res = await axiosInstance.get(`/group/getInfoGroup/${id}`);
  const data = res.data;
  return data.data;
};
const login = async (email: string, password: string) => {
  await axiosInstance.post("/auth/login", { email, password });
  const data = await getMe();
  return data;
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
  getInfo,
  getPosts,
  followUser,
  unfollowUser,
  createPost,
  listFollowedPeople,
  getListGroup,
  updateInfo,
  getInfoGroup,
  createGroup,
  getPostsOfGroup,
  createPostOfGroup,
};
