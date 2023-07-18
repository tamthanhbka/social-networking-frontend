import { useState, type FC } from "react";
import { Avatar, Box, Button, Typography } from "@mui/material";
import {
  Home,
  Collections,
  People,
  Message,
  Groups,
  Add,
} from "@mui/icons-material";
import { useAuth } from "./Auth";
import { Link, useNavigate } from "react-router-dom";
import { getListGroup } from "../api";
import { useQuery } from "@tanstack/react-query";
import { GroupType } from "../types";
import { CreateGroup } from "../components";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [open, setOpen] = useState(false);
  const { data: groups } = useQuery<GroupType[]>({
    queryKey: ["groups"],
    queryFn: () => getListGroup(),
    initialData: [],
    refetchOnWindowFocus: false,
  });
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Box
      sx={{
        display: "flex",
        position: "fixed",
        left: 0,
        top: 60,
        width: "20%",
        height: "calc(100vh - 60px)",
        flexDirection: "column",
        pt: 2,
        overflowY: "auto",
        overflowX: "hidden",
        "&::-webkit-scrollbar": {
          bgcolor: "transparent",
          width: 8,
        },
        "&::-webkit-scrollbar-thumb": {
          bgcolor: "#aaaa",
          borderRadius: 5,
        },
      }}
    >
      <Box sx={{ pt: 0, pl: 2, pr: 2, pb: 2 }}>
        <Box
          gap={1}
          alignItems="start"
          display="flex"
          sx={{
            flexDirection: "column",
            borderBottom: "solid #aaa 1px",
            pb: 1,
          }}
        >
          <Link to="/" style={{ width: "100%" }}>
            <Button
              sx={{
                width: "100%",
                bgcolor: "#F0F2F5",
                justifyContent: "start",
                color: "#333",
              }}
            >
              <Home sx={{ width: 30, height: 30, mr: 2, color: "#056BE1" }} />
              <Typography
                sx={{ fontSize: 14, fontWeight: 500, textTransform: "initial" }}
              >
                Trang chủ
              </Typography>
            </Button>
          </Link>
          <Link to={`/profile/${user?.id}`} style={{ width: "100%" }}>
            <Button
              sx={{
                width: "100%",
                bgcolor: "#F0F2F5",
                justifyContent: "start",
                color: "#333",
              }}
            >
              <Avatar
                sx={{ width: 30, height: 30, mr: 2 }}
                src={user?.avatar}
              />
              <Typography
                sx={{ fontSize: 14, fontWeight: 500, textTransform: "initial" }}
              >
                {user?.username}
              </Typography>
            </Button>
          </Link>
        </Box>
      </Box>
      <Box sx={{ pt: 0, pl: 2, pr: 2, pb: 2 }}>
        <Box
          gap={1}
          alignItems="start"
          display="flex"
          sx={{
            flexDirection: "column",
            borderBottom: "solid #aaa 1px",
            pb: 1,
          }}
        >
          <Button
            sx={{
              width: "100%",
              bgcolor: "#F0F2F5",
              justifyContent: "start",
              color: "#333",
            }}
          >
            <Collections
              sx={{ width: 30, height: 30, mr: 2, color: "#41B35D" }}
            />
            <Typography
              sx={{ fontSize: 14, fontWeight: 500, textTransform: "initial" }}
            >
              Ảnh của bạn
            </Typography>
          </Button>
          <Button
            sx={{
              width: "100%",
              bgcolor: "#F0F2F5",
              justifyContent: "start",
              color: "#333",
            }}
          >
            <Avatar sx={{ width: 30, height: 30, mr: 2, bgcolor: "#D8DADF" }}>
              <People
                sx={{
                  color: "#209DEE",
                }}
              />
            </Avatar>

            <Typography
              sx={{ fontSize: 14, fontWeight: 500, textTransform: "initial" }}
            >
              Người theo dõi
            </Typography>
          </Button>
          <Button
            sx={{
              width: "100%",
              bgcolor: "#F0F2F5",
              justifyContent: "start",
              color: "#333",
            }}
          >
            <Message sx={{ width: 30, height: 30, mr: 2, color: "#A538DC" }} />
            <Typography
              sx={{ fontSize: 14, fontWeight: 500, textTransform: "initial" }}
            >
              Tin nhắn
            </Typography>
          </Button>
        </Box>
      </Box>
      <Box sx={{ pt: 0, pl: 2, pr: 2, pb: 2 }}>
        <Box
          gap={1}
          alignItems="start"
          display="flex"
          sx={{
            flexDirection: "column",
            borderBottom: "solid #aaa 1px",
            pb: 1,
          }}
        >
          {groups.map((group) => {
            return (
              <Button
                key={group.id}
                sx={{
                  width: "100%",
                  bgcolor: "#F0F2F5",
                  justifyContent: "start",
                  color: "#333",
                }}
                onClick={() => {
                  navigate(`/group/${group.id}`);
                }}
              >
                <Avatar
                  sx={{ width: 30, height: 30, mr: 2 }}
                  src={group.avatar}
                />
                <Typography
                  sx={{
                    fontSize: 14,
                    fontWeight: 500,
                    textTransform: "initial",
                  }}
                >
                  {group.groupName}
                </Typography>
              </Button>
            );
          })}

          <Button
            sx={{
              width: "100%",
              bgcolor: "#e6eff8",
              justifyContent: "start",
              color: "#333",
              "&:hover": { bgcolor: "#dbe8f5" },
            }}
            onClick={() => handleOpen()}
          >
            {/* <Avatar sx={{ width: 30, height: 30, mr: 2, bgcolor: "#D8DADF" }}>
              <Groups sx={{ color: "black" }} />
            </Avatar> */}
            <Add sx={{ color: "#468fef", mr: 1 }}></Add>
            <Typography
              sx={{
                fontSize: 14,
                fontWeight: 500,
                textTransform: "initial",
                color: "#468fef",
              }}
            >
              Tạo nhóm mới
            </Typography>
          </Button>
        </Box>
      </Box>
      {open && <CreateGroup user={user} open={open} onClose={handleClose} />}
    </Box>
  );
};

export default Navbar;
