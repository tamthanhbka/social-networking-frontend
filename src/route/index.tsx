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
            element: <PostLayout fn={getPosts} />,
          },
          {
            path: "follower",
            element: <>Người theo dõi</>,
          },
          {
            path: "images",
            element: <>Ảnh của bạn</>,
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
