import { useEffect } from "react";
import { Box } from "@mui/material";
import { Outlet, useNavigate } from "react-router-dom";
import { Header, Nav } from "../components";
import { useAuth } from "../components/Auth";

const HomeLayout = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  useEffect(() => {
    if (!login) navigate("/login");
  }, [login]);
  if (!login) return <></>;
  return (
    <Box flexGrow={1} display="flex" flexDirection="column">
      <Header />
      <Box display="flex" sx={{ bgcolor: "#F0F2F5" }}>
        <Nav />
        <Box display="flex" sx={{ ml: "25%", width: "75%" }}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default HomeLayout;
