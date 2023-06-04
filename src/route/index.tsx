import { createBrowserRouter } from "react-router-dom";
import { Register, Login } from "../pages";
import { AuthLayout, HomeLayout, PostLayout, ProfileLayout } from "../layouts";
import { homeLoader } from "../loader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "/profile",
        element: <ProfileLayout />,
      },
      {
        path: "/",
        element: <PostLayout />,
        loader: homeLoader,
      },
    ],
  },
  {
    element: <AuthLayout />,
    children: [
      { path: "/register", element: <Register /> },
      { path: "/login", element: <Login /> },
    ],
  },
]);
export default router;
