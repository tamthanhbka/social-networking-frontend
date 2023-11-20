import {
  LocalPhone,
  Videocam,
  Info,
  AddCircle,
  SentimentSatisfiedAlt,
  AddPhotoAlternate,
  GifBox,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  IconButton,
  InputBase,
  Input,
  Tooltip,
  Typography,
} from "@mui/material";
import { useState, type FC, useEffect } from "react";
import { Message } from "../components";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getChat, getInfo, sendMessage } from "../api";
import { Chat } from "../types";
import { User } from "./Auth";

interface MessageBoxProps {}

const MessageBox: FC<MessageBoxProps> = () => {
  const { id } = useParams();
  const [friend, setFriend] = useState<User>();
  const navigate = useNavigate();
  useEffect(() => {
    if (!id) return;
    getInfo(id).then(setFriend);
  }, [id]);
  const [chat, setChat] = useState("");
  const { data, refetch } = useQuery<Chat[]>(
    ["chat", id],
    () => {
      if (!id) return [];
      return getChat(id);
    },
    { initialData: [], refetchInterval: 1000 }
  );
  if (!id || !friend) return null;
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendMessage(id, chat).then(() => {
      setChat("");
    });
  };
  return (
    <Box
      sx={{
        bgcolor: "white",
        width: "70%",
        position: "relative",
      }}
    >
      <Box
        sx={{
          p: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          boxShadow: "2px 2px 5px -2px #cdcdcd",
        }}
      >
        <Button
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            borderRadius: 2,
            "&:hover": { bgcolor: "#F2F2F2" },
          }}
          onClick={() => navigate(`/profile/${friend.id}`)}
        >
          <Avatar src={friend.avatar} />
          <Typography
            sx={{
              fontWeight: 500,
              fontSize: 17,
              textTransform: "initial",
              color: "black",
            }}
          >
            {friend.username}
          </Typography>
        </Button>

        <Box gap={1} display="flex">
          <Tooltip title="Bắt đầu gọi thoại">
            <IconButton>
              <LocalPhone sx={{ color: "#007DF2" }} />
            </IconButton>
          </Tooltip>
          <Tooltip title="Bắt đầu gọi video">
            <IconButton>
              <Videocam sx={{ color: "#007DF2" }} />
            </IconButton>
          </Tooltip>
          <Tooltip title="Thông tin về cuộc trò chuyện">
            <IconButton>
              <Info sx={{ color: "#007DF2" }} />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>
      <Box
        sx={{
          height: "calc(100vh - 60px - 68px - 55px)",
          p: 2,
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
        display="flex"
        flexDirection="column-reverse"
        gap={3}
      >
        {data.map((chat) => {
          return <Message friend={friend} key={chat.id} chat={chat} />;
        })}
      </Box>
      <Box
        display="flex"
        sx={{
          borderTop: "1px solid #d2d2d2",
          position: "absolute",
          b: 0,
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          gap: 0.5,
          p: 1,
        }}
      >
        <Tooltip title="Mở hành động khác">
          <IconButton sx={{}}>
            <AddCircle sx={{ color: "#007DF2" }} />
          </IconButton>
        </Tooltip>
        <Tooltip title="Đính kèm file">
          <IconButton>
            <AddPhotoAlternate sx={{ color: "#007DF2" }} />
          </IconButton>
        </Tooltip>
        <Tooltip title="Chọn file gif">
          <IconButton>
            <GifBox sx={{ color: "#007DF2" }} />
          </IconButton>
        </Tooltip>
        <Box
          sx={{
            alignItems: "center",
            bgcolor: "#F0F2F5",
            borderRadius: "24px",
            width: "100%",
            justifyContent: "space-between",
          }}
          display="flex"
        >
          <Box
            component="form"
            width="90%"
            onSubmit={
              handleSubmit
              //   (e: React.FormEvent<HTMLFormElement>) => {
              //   e.preventDefault();
              //   const form = new FormData(e.currentTarget);
              //   const chat = form.get("chat");
              //   if (chat && !(chat instanceof File))
              //     sendMessage(id, chat).then(() => {
              //       refetch();
              //     });
              // }
            }
          >
            <InputBase
              name="chat"
              placeholder="Aa"
              size={"medium"}
              sx={{ width: "100%", ml: 2 }}
              value={chat}
              onChange={(e) => setChat(e.target.value)}
            />
          </Box>
          <Tooltip title="Chọn biểu tượng cảm xúc">
            <IconButton>
              <SentimentSatisfiedAlt sx={{ color: "#007DF2" }} />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>
    </Box>
  );
};

export default MessageBox;
