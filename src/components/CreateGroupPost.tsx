import { FC, useState, useRef } from "react";
import {
  AddPhotoAlternate,
  Close,
  EmojiEmotionsOutlined,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  IconButton,
  Input,
  Modal,
  Paper,
  Typography,
  styled,
} from "@mui/material";
import { Link, useParams } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { User, useAuth } from "./Auth";
import { toast } from "react-toastify";
import { createPostOfGroup } from "../api";

interface CreateGroupPostProps {
  onCreatePostSuccess?: () => void;
}

const CreateGroupPost: FC<CreateGroupPostProps> = ({ onCreatePostSuccess }) => {
  const { id: groupId } = useParams();
  const { user } = useAuth();
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState("");
  const [image, setImg] = useState("");
  const handleClose = () => setOpen(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const handleOpen = () => {
    setOpen(true);
  };
  const { mutate: handleCreatePost } = useMutation(async () => {
    if (!groupId) throw new Error("Group undefined!");
    return createPostOfGroup(content, groupId)
      .then(handleClose)
      .then(onCreatePostSuccess)
      .then(() => setContent(""))
      .catch((e) => {
        toast.error(e.message);
      });
  });

  return (
    <Paper
      elevation={1}
      sx={{
        mt: 4,
        mb: 3,
        borderRadius: 3,
        height: 140,
        pl: 2,
        pr: 2,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        display="flex"
        flex={1}
        alignItems="center"
        justifyContent="center"
        gap={2}
        sx={{ borderBottom: "#e4e6eb solid 1px" }}
      >
        <Link to={`/profile/${user?.id}`}>
          <Avatar
            sx={{
              width: "45px",
              height: "45px",
              outline: "solid 1px #aaa",
            }}
            alt={user?.username}
            src={
              user?.avatar
                ? user.avatar
                : "https://cdn-icons-png.flaticon.com/512/3237/3237472.png"
            }
          />
        </Link>

        <Button
          variant="text"
          sx={{
            bgcolor: "#F0F2F5",
            color: "#aaa",
            borderRadius: 8,
            width: "90%",
            height: "60%",
            textTransform: "inherit",
            fontSize: 18,
            fontWeight: 400,
          }}
          onClick={handleOpen}
        >
          Bạn viết gì đi...
        </Button>
      </Box>
      <Box
        flex={1}
        display="flex"
        justifyContent="center"
        alignItems="center"
        gap={6}
      >
        <Button
          sx={{
            color: "#333",
            textTransform: "inherit",
            fontSize: 16,
            fontWeight: 400,
            bgcolor: "#F0F2F5",
            borderRadius: 2,
            width: "40%",
          }}
          onClick={handleOpen}
        >
          <AddPhotoAlternate sx={{ width: 40, height: 40, color: "#41B35D" }} />
          Thêm ảnh/video
        </Button>
        <Button
          sx={{
            color: "#333",
            textTransform: "inherit",
            fontSize: 16,
            fontWeight: 400,
            bgcolor: "#F0F2F5",
            borderRadius: 2,
            width: "40%",
          }}
        >
          <EmojiEmotionsOutlined
            sx={{ width: 40, height: 40, color: "#EAB026" }}
          />
          Hoạt động/Cảm xúc
        </Button>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            bgcolor: "white",
            width: "35%",
            boxShadow: "1px 1px 4px 4px #656464",
            borderRadius: "8px",
            p: 1,
          }}
        >
          <Box
            sx={{
              borderBottom: "1px solid #b9b9b9",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              p: 1,
            }}
          >
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              flex={1}
              textAlign="center"
            >
              Tạo bài viết
            </Typography>
            <IconButton sx={{ bgcolor: "#ebeaea" }} onClick={handleClose}>
              <Close sx={{ width: 20, height: 20 }} />
            </IconButton>
          </Box>
          <Box sx={{ p: 1, display: "flex", alignItems: "center" }} gap={2}>
            <Link to="/profile">
              <Avatar
                alt={user?.username}
                src={
                  user?.avatar
                    ? user.avatar
                    : "https://cdn-icons-png.flaticon.com/512/3237/3237472.png"
                }
              />
            </Link>
            <Typography sx={{ fontWeight: 500, fontSize: 16 }}>
              {user?.username}
            </Typography>
          </Box>
          <Box
            sx={{
              p: 1,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Input
              placeholder={`Bạn viết gì đi...`}
              disableUnderline
              fullWidth
              multiline
              value={content}
              onChange={(e) => {
                setContent(e.target.value);
              }}
            />
            <IconButton
              sx={{ width: 45, height: 45 }}
              onClick={() => {
                inputRef.current?.click();
              }}
            >
              <input
                ref={inputRef}
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const img = e.target.files?.[0];
                  if (!img) return;
                  const reader = new FileReader();
                  reader.onload = (v) => {
                    setImg(v.target?.result?.toString() || image);
                  };
                  reader.readAsDataURL(img);
                }}
              />
              <AddPhotoAlternate
                sx={{ width: 30, height: 30, color: "#41B35D" }}
              />
            </IconButton>
          </Box>
          <Box
            sx={{
              display: "flex",
              p: 1,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Button
              sx={{
                bgcolor: "#2077e1",
                color: "white",
                width: "80%",
                "&:hover": { bgcolor: "#1d6fd4" },
              }}
              onClick={() => handleCreatePost()}
            >
              Đăng
            </Button>
          </Box>
        </Box>
      </Modal>
    </Paper>
  );
};

export default CreateGroupPost;
