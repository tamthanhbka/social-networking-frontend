import { Box } from "@mui/material";
import type { FC } from "react";
import { ListMessageUser } from "../../components";
import { Outlet } from "react-router-dom";

interface MessageLayoutProps {}

const MessageLayout: FC<MessageLayoutProps> = () => {
  return (
    <Box display="flex" sx={{ width: "100%", ml: 2 }}>
      <ListMessageUser />
      <Outlet />
    </Box>
  );
};

export default MessageLayout;
