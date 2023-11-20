import { Box, Typography } from "@mui/material";
import { FC } from "react";

const MessageBoxPlaceHolder: FC = () => {
  return (
    <Box
      sx={{
        bgcolor: "white",
        width: "70%",
        display: "grid",
        placeItems: "center",
      }}
    >
      <Typography variant="h5" fontWeight={800}>
        Hãy chọn một đoạn chat hoặc bắt đầu cuộc trò chuyện mới
      </Typography>
    </Box>
  );
};

export default MessageBoxPlaceHolder;
