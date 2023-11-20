import { Avatar, Box, Tooltip, Typography } from "@mui/material";
import type { FC } from "react";
import { Chat } from "../types";
import { User, useAuth } from "./Auth";

interface MessageProps {
  chat: Chat;
  friend: User;
}

const Message: FC<MessageProps> = ({ chat, friend }) => {
  const { user } = useAuth();
  const isMe = user?.id === chat.from;
  const avt = friend.avatar;
  return (
    <Box
      display="flex"
      alignItems="center"
      gap={1}
      justifyContent={isMe ? "end" : "start"}
    >
      {!isMe && <Avatar sx={{ width: 30, height: 30 }} src={avt} />}
      <Box
        sx={{ bgcolor: isMe ? "#4e7df6" : "#E4E6EB", p: 1, borderRadius: 4 }}
      >
        <Tooltip title={chat.createdAt}>
          <Typography sx={{ fontSize: 14 }}>{chat.content}</Typography>
        </Tooltip>
      </Box>
    </Box>
  );
};

export default Message;
