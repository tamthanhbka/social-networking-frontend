import type { FC } from "react";
import {
  Box,
  Container,
  IconButton,
  InputBase,
  Avatar,
  Typography,
} from "@mui/material";
import { Search, MapsUgc, Notifications } from "@mui/icons-material";
import { useAuth } from "./Auth";

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  const { user, action } = useAuth();
  const { avatar, username } = user!;
  const handleLogout = () => {
    action.logout();
  };
  return (
    <Box
      alignItems="center"
      display="flex"
      height="60px"
      zIndex={999}
      sx={{
        boxShadow: "2px 2px 5px -2px #aaa",
        position: "sticky",
        top: 0,
        bgcolor: "white",
      }}
    >
      <Box flex={1}>
        <Container>
          <Typography variant="h4" color="#056BE1" fontWeight={800}>
            Facebook
          </Typography>
        </Container>
      </Box>
      <Box flex={2} sx={{ alignItems: "center" }}>
        <Container maxWidth="sm">
          <Box
            sx={{
              alignItems: "center",
              bgcolor: "#F0F2F5",
              borderRadius: "24px",
              width: "100%",
            }}
          >
            <IconButton>
              <Search />
            </IconButton>
            <InputBase
              placeholder="Nhập để tìm kiếm...."
              size={"medium"}
              sx={{ height: "6vh", width: "90%" }}
            />
          </Box>
        </Container>
      </Box>
      <Box
        flex={1}
        display="flex"
        alignItems="center"
        sx={{ justifyContent: "right" }}
      >
        <IconButton
          sx={{
            width: "40px",
            height: "40px",
            bgcolor: "#e4e6eb",
            mr: "0.5rem",
          }}
        >
          <MapsUgc sx={{ fontSize: 22, color: "black" }} />
        </IconButton>

        <IconButton
          sx={{
            width: "40px",
            height: "40px",
            bgcolor: "#e4e6eb",
            mr: "0.5rem",
          }}
        >
          <Notifications
            sx={{
              color: "black",
              fontSize: 22,
              transform: "rotate(-10deg)",
            }}
          />
        </IconButton>
        <Box sx={{ mr: "2rem" }}>
          <Avatar
            sx={{
              width: "40px",
              height: "40px",
              outline: "solid 1px #aaa",
              cursor: "pointer",
            }}
            alt={username}
            src={
              avatar
                ? avatar
                : "https://cdn-icons-png.flaticon.com/512/3237/3237472.png"
            }
            onClick={handleLogout}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
