import { useState, type FC } from "react";
import {
  Box,
  Container,
  IconButton,
  InputBase,
  Avatar,
  Typography,
  Tooltip,
  Menu,
  MenuItem,
  Divider,
  ListItemIcon,
} from "@mui/material";
import { Search, MapsUgc, Notifications, Logout } from "@mui/icons-material";
import { useAuth } from "./Auth";
import { useNavigate } from "react-router-dom";

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  const { user, action } = useAuth();
  const navigate = useNavigate();
  const { avatar, username } = user!;
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
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
        <Tooltip title="Tin nhắn">
          <IconButton
            sx={{
              width: "40px",
              height: "40px",
              bgcolor: "#e4e6eb",
              mr: "0.5rem",
              "&:hover": { bgcolor: "#D8DADF" },
            }}
          >
            <MapsUgc sx={{ fontSize: 22, color: "black" }} />
          </IconButton>
        </Tooltip>
        <Tooltip title="Thông báo">
          <IconButton
            sx={{
              width: "40px",
              height: "40px",
              bgcolor: "#e4e6eb",
              mr: "0.5rem",
              "&:hover": { bgcolor: "#D8DADF" },
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
        </Tooltip>
        <Tooltip title="Tài khoản">
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
              onClick={handleClick}
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
            />
          </Box>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem
          onClick={() => navigate(`profile/${user?.id}`)}
          sx={{
            "&:hover": { bgcolor: "#f2f2f2" },
          }}
        >
          <Avatar
            src={
              avatar
                ? avatar
                : "https://cdn-icons-png.flaticon.com/512/3237/3237472.png"
            }
          />
          My account
        </MenuItem>
        {/* <Divider /> */}
        <MenuItem
          onClick={handleLogout}
          sx={{
            "&:hover": { bgcolor: "#f2f2f2" },
          }}
        >
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default Header;
