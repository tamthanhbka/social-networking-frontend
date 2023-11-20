import { Search } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  IconButton,
  InputBase,
  Typography,
} from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { FC, useState, useEffect } from "react";
import { getAllChat, getInfo } from "../api";
import { Chat } from "../types";
import { User, useAuth } from "./Auth";
import { renderTime } from "../utils";
import { useNavigate } from "react-router-dom";

interface ListMessageUserProps {}

const ListMessageUser: FC<ListMessageUserProps> = () => {
  const { data: listChat } = useQuery<Chat[]>({
    queryKey: ["chat"],
    queryFn: () => getAllChat(),
    initialData: [],
    refetchInterval: 1000,
  });
  return (
    <Box
      sx={{
        bgcolor: "white",
        width: "30%",
        border: "1px solid #e3e3e3",
      }}
    >
      <Box
        sx={{
          p: 2,
          borderBottom: "1px solid #e1e1e1",
          top: "60px",
        }}
        display="flex"
        flexDirection="column"
        // alignItems="center"
        position="sticky"
      >
        <Typography sx={{ fontSize: 24, fontWeight: 700 }}>Chat</Typography>
        <Box
          sx={{
            mt: 1,
            alignItems: "center",
            bgcolor: "#F0F2F5",
            borderRadius: "24px",
            width: "100%",
          }}
          display="flex"
        >
          <IconButton>
            <Search />
          </IconButton>
          <InputBase
            placeholder="Tìm kiếm trên Messenger"
            size={"medium"}
            sx={{ width: "90%" }}
          />
        </Box>
      </Box>
      <Box
        sx={{
          p: 1,
          width: "100%",
          height: "calc(100vh - 60px - 117px)",
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
        {listChat.map((chat) => {
          return <ChatUser key={chat.id} chat={chat} />;
        })}
      </Box>
    </Box>
  );
};

const ChatUser = ({ chat }: { chat: Chat }) => {
  const { user } = useAuth();
  const isMe = user?.id === chat.from;
  const friendId = isMe ? chat.to : chat.from;
  const [friend, setFriend] = useState<User>();
  const navigate = useNavigate();
  useEffect(() => {
    getInfo(friendId).then(setFriend);
  }, [friendId]);
  if (!friend) return null;
  return (
    <Button
      sx={{
        width: "100%",
        display: "flex",
        gap: 1.5,
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: 2,
        "&:hover": { bgcolor: "#F2F2F2" },
        "&:focus": { bgcolor: "#EAF3FF" },
      }}
      onClick={() => navigate(friendId)}
    >
      <Box display="flex" flex={1} gap={1} alignItems="center">
        <Avatar sx={{ width: 50, height: 50 }} src={friend.avatar} />
        <Box display="flex" flexDirection="column">
          <Typography
            sx={{
              fontWeight: 500,
              fontSize: 16,
              color: "black",
              textTransform: "initial",
              display: "flex",
              flex: 1,
            }}
          >
            {friend.username}
          </Typography>
          <Box
            display="flex"
            flex={1}
            justifyContent="space-between"
            alignItems="center"
            gap={1}
          >
            <Typography
              sx={{
                fontWeight: 400,
                fontSize: 13,
                color: "#616161",
                textTransform: "initial",
              }}
            >
              {isMe ? `Bạn: ${chat.content}` : chat.content}
            </Typography>
            {/* <Typography sx={{ color: "#616161" }}>.</Typography> */}
          </Box>
        </Box>
      </Box>
      <Typography
        sx={{
          fontWeight: 400,
          fontSize: 13,
          color: "#616161",
          textTransform: "initial",
        }}
      >
        {renderTime(chat.createdAt)}
      </Typography>
    </Button>
  );
};
export default ListMessageUser;
