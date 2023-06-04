import type { FC } from "react";
import { Avatar, Box, Button, Typography } from "@mui/material";
import {
  Home,
  Collections,
  People,
  Message,
  Groups,
} from "@mui/icons-material";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => {
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
              src="https://scontent.fhan14-1.fna.fbcdn.net/v/t39.30808-6/347635090_980191409821605_9083187072725207852_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=aR-DpeP5g4cAX_DyxZ9&_nc_ht=scontent.fhan14-1.fna&oh=00_AfDJDU8OtgL2SLXcNoIxxGR6OEb1UssKZjGcLn4o0XKnxQ&oe=646CBFA3"
            />
            <Typography
              sx={{ fontSize: 14, fontWeight: 500, textTransform: "initial" }}
            >
              Thanh Tam
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
              src="https://scontent.fhan14-1.fna.fbcdn.net/v/t39.30808-6/347635090_980191409821605_9083187072725207852_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=aR-DpeP5g4cAX_DyxZ9&_nc_ht=scontent.fhan14-1.fna&oh=00_AfDJDU8OtgL2SLXcNoIxxGR6OEb1UssKZjGcLn4o0XKnxQ&oe=646CBFA3"
            />
            <Typography
              sx={{ fontSize: 14, fontWeight: 500, textTransform: "initial" }}
            >
              Điểm rèn luyện HUST
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
            <Avatar
              sx={{ width: 30, height: 30, mr: 2 }}
              src="https://scontent.fhan14-1.fna.fbcdn.net/v/t39.30808-6/347635090_980191409821605_9083187072725207852_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=aR-DpeP5g4cAX_DyxZ9&_nc_ht=scontent.fhan14-1.fna&oh=00_AfDJDU8OtgL2SLXcNoIxxGR6OEb1UssKZjGcLn4o0XKnxQ&oe=646CBFA3"
            />
            <Typography
              sx={{ fontSize: 14, fontWeight: 500, textTransform: "initial" }}
            >
              HEDSPI.K64
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
            <Avatar
              sx={{ width: 30, height: 30, mr: 2 }}
              src="https://scontent.fhan14-1.fna.fbcdn.net/v/t39.30808-6/347635090_980191409821605_9083187072725207852_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=aR-DpeP5g4cAX_DyxZ9&_nc_ht=scontent.fhan14-1.fna&oh=00_AfDJDU8OtgL2SLXcNoIxxGR6OEb1UssKZjGcLn4o0XKnxQ&oe=646CBFA3"
            />
            <Typography
              sx={{ fontSize: 14, fontWeight: 500, textTransform: "initial" }}
            >
              Việt Nhật 02-K64
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
            <Avatar
              sx={{ width: 30, height: 30, mr: 2 }}
              src="https://scontent.fhan14-1.fna.fbcdn.net/v/t39.30808-6/347635090_980191409821605_9083187072725207852_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=aR-DpeP5g4cAX_DyxZ9&_nc_ht=scontent.fhan14-1.fna&oh=00_AfDJDU8OtgL2SLXcNoIxxGR6OEb1UssKZjGcLn4o0XKnxQ&oe=646CBFA3"
            />
            <Typography
              sx={{ fontSize: 14, fontWeight: 500, textTransform: "initial" }}
            >
              Weibo Việt Nam
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
            <Avatar
              sx={{ width: 30, height: 30, mr: 2 }}
              src="https://scontent.fhan14-1.fna.fbcdn.net/v/t39.30808-6/347635090_980191409821605_9083187072725207852_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=aR-DpeP5g4cAX_DyxZ9&_nc_ht=scontent.fhan14-1.fna&oh=00_AfDJDU8OtgL2SLXcNoIxxGR6OEb1UssKZjGcLn4o0XKnxQ&oe=646CBFA3"
            />
            <Typography
              sx={{ fontSize: 14, fontWeight: 500, textTransform: "initial" }}
            >
              Việt Nhật 02-K64
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
            <Avatar
              sx={{ width: 30, height: 30, mr: 2 }}
              src="https://scontent.fhan14-1.fna.fbcdn.net/v/t39.30808-6/347635090_980191409821605_9083187072725207852_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=aR-DpeP5g4cAX_DyxZ9&_nc_ht=scontent.fhan14-1.fna&oh=00_AfDJDU8OtgL2SLXcNoIxxGR6OEb1UssKZjGcLn4o0XKnxQ&oe=646CBFA3"
            />
            <Typography
              sx={{ fontSize: 14, fontWeight: 500, textTransform: "initial" }}
            >
              Việt Nhật 02-K64
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
            <Avatar
              sx={{ width: 30, height: 30, mr: 2 }}
              src="https://scontent.fhan14-1.fna.fbcdn.net/v/t39.30808-6/347635090_980191409821605_9083187072725207852_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=aR-DpeP5g4cAX_DyxZ9&_nc_ht=scontent.fhan14-1.fna&oh=00_AfDJDU8OtgL2SLXcNoIxxGR6OEb1UssKZjGcLn4o0XKnxQ&oe=646CBFA3"
            />
            <Typography
              sx={{ fontSize: 14, fontWeight: 500, textTransform: "initial" }}
            >
              Việt Nhật 02-K64
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
              <Groups sx={{ color: "black" }} />
            </Avatar>
            <Typography
              sx={{ fontSize: 14, fontWeight: 500, textTransform: "initial" }}
            >
              Xem tất cả các nhóm
            </Typography>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
