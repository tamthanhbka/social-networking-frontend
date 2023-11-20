import { useEffect } from "react";
import { Box } from "@mui/material";
import { Outlet, useNavigate } from "react-router-dom";
import { Header, Nav } from "../components";
import { useAuth } from "../components/Auth";

const HomeLayout = () => {
  const navigate = useNavigate();
  const { login, loading } = useAuth();
  useEffect(() => {
    if (!login && !loading) navigate("/login");
  }, [login, loading]);
  if (!login || loading)
    return (
      <div
        style={{
          width: "100%",
          height: "100vh",
          position: "fixed",
          background:
            "rgba(0, 0, 0, 0.834) url('https://media.giphy.com/media/8agqybiK5LW8qrG3vJ/giphy.gif') center no-repeat",
          zIndex: 1,
        }}
      ></div>
    );
  return (
    <Box flexGrow={1} display="flex" flexDirection="column" height="100%">
      <Header />
      <Box
        display="flex"
        sx={{ bgcolor: "#F0F2F5", alignItems: "stretch", height: "100%" }}
      >
        <Nav />
        <Box display="flex" sx={{ flex: 1, ml: "15%" }}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default HomeLayout;
