import { createBrowserRouter } from "react-router-dom";
import { Register, Login } from "../pages";
import {
  AuthLayout,
  HomeLayout,
  PostLayout,
  ProfileLayout,
  SubHomeLayout,
} from "../layouts";
import { getListPosts, getPosts } from "../api";
import Group from "../layouts/subs/Group";
import GroupPostLayout from "../layouts/subs/GroupPost";
import {
  Follower,
  GroupMember,
  MessageBox,
  RequestJoinGroup,
} from "../components";
import MessageLayout from "../layouts/subs/Message";
import MessageBoxPlaceHolder from "../components/MessageBoxPlaceholder";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "/profile/:id",
        element: <ProfileLayout />,
        children: [
          {
            path: "",
            element: <PostLayout fn={getPosts} width="80%" />,
          },
          {
            path: "follower",
            element: <Follower />,
          },
          {
            path: "images",
            element: <>Ảnh của bạn</>,
          },
        ],
      },
      {
        path: "/group/:id",
        element: <Group />,
        children: [
          {
            path: "",
            element: <GroupPostLayout />,
          },
          {
            path: "member",
            element: <GroupMember />,
          },
          {
            path: "requestJoinGroup",
            element: <RequestJoinGroup />,
          },
        ],
      },
      {
        path: "/messages",
        element: <MessageLayout />,
        children: [
          {
            path: "",
            element: <MessageBoxPlaceHolder />,
          },
          {
            path: ":id",
            element: <MessageBox />,
          },
        ],
      },
      {
        path: "/",
        element: <SubHomeLayout />,
      },
    ],
  },
  {
    element: <AuthLayout />,
    path: "/",
    children: [
      { path: "register", element: <Register /> },
      { path: "login", element: <Login /> },
    ],
  },
]);
export default router;
