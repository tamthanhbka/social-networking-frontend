import axios from "axios";
import { axiosInstance, AxiosError } from "./axios";
import { Cloudinary } from "@cloudinary/url-gen";
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
const createPost = async (content: string, images: string[]) => {
  if (!content) throw new Error("Bài viết cần có nội dung hoặc ảnh!");
  const res = await axiosInstance.post(`post/create`, {
    content,
    images,
  });
  return res.data.data;
};
const createPostOfGroup = async (
  content: string,
  groupId: string,
  images: string[]
) => {
  if (!content) throw new Error("Bài viết cần có nội dung hoặc ảnh!");
  const res = await axiosInstance.post(`post/createPostOfGroup`, {
    groupId,
    content,
    images,
  });

  return res.data.data;
};
const isPostOfGroup = async (id: string) => {
  const res = await axiosInstance.post(`post/isPostOfGroup`, { postId: id });
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
const getListMember = async (id: string) => {
  const res = await axiosInstance.get(`/group/getListMember/${id}`);
  const data = res.data;
  return data.data;
};
const getListRequestJoinGroup = async (id: string) => {
  const res = await axiosInstance.get(`/group/getListRequestJoinGroup/${id}`);
  const data = res.data;
  return data.data;
};
const outGroup = async (id: string) => {
  const res = await axiosInstance.post(`/group/outGroup/${id}`);
  const data = res.data;
  return data.data;
};
const joinGroup = async (id: string) => {
  const res = await axiosInstance.post(`/group/joinGroup/${id}`);
  const data = res.data;
  return data.data;
};
const acceptMember = async (id: string, personId: string) => {
  const res = await axiosInstance.post(`/group/acceptMember/${id}`, {
    requestPersonId: personId,
  });
  const data = res.data;
  return data.data;
};
const getAllChat = async () => {
  const res = await axiosInstance.get("/chat/getAllChat");
  return res.data.data;
};
const getChat = async (id: string) => {
  const res = await axiosInstance.get(`/chat/getChat/${id}`);
  return res.data.data;
};
const sendMessage = async (to: string, content: string) => {
  const res = await axiosInstance.post(`/chat/sendToUser`, {
    to,
    content,
  });
  return res.data.data;
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
const CLOUD_NAME = "dry4uas1f";
const UPLOAD_URL = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;
const PRESET = "ylz3qbi1";

const uploadImg = async (file: File) => {
  // Initial FormData
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", PRESET);
  formData.append("folder", "tamtam");

  // Make an AJAX upload request using Axios (replace Cloudinary URL below with your own)
  return axios.post(UPLOAD_URL, formData).then((response) => {
    const data = response.data;
    const fileURL = data.secure_url;
    return fileURL as string;
  });
};
const uploadImgs = async (files: File[]) => {
  const uploaders = files.map(uploadImg);
  const data = await axios.all(uploaders);
  return data;
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
  getListMember,
  outGroup,
  joinGroup,
  getListRequestJoinGroup,
  acceptMember,
  uploadImg,
  uploadImgs,
  isPostOfGroup,
  getAllChat,
  getChat,
  sendMessage,
};
