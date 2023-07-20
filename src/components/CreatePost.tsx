import {
  AddPhotoAlternate,
  Close,
  Delete,
  Edit,
  EmojiEmotionsOutlined,
} from "@mui/icons-material";
import {
  Avatar,
  Badge,
  Box,
  Button,
  IconButton,
  Input,
  Menu,
  MenuItem,
  Modal,
  Paper,
  Typography,
  styled,
} from "@mui/material";
import { FC, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { User } from "./Auth";
import { createPost, uploadImgs } from "../api";

import { toast } from "react-toastify";

interface CreatePostProps {
  user: User;
  onCreatePostSuccess?: () => void;
}
const CustomButton = styled(Button)({
  "&:hover": {
    backgroundColor: "#1A6ED8",
    color: "white",
  },
});

const CreatePost: FC<CreatePostProps> = ({ user, onCreatePostSuccess }) => {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState("");
  const [image, setImage] = useState<File[]>([]);
  const handleClose = () => setOpen(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const handleOpen = () => {
    setOpen(true);
  };
  const { mutate: handleCreatePost } = useMutation(async (imgs: File[]) => {
    const data = await uploadImgs(imgs);
    if (!data) return;
    return createPost(content, data)
      .then(handleClose)
      .then(onCreatePostSuccess)
      .then(() => {
        setContent("");
        setImage([]);
      })
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
          {user?.username} ơi, bạn đang nghĩ gì thế?
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
              placeholder={`${user?.username} ơi, bạn đang nghĩ gì thế?`}
              disableUnderline
              fullWidth
              multiline
              value={content}
              onChange={(e) => {
                setContent(e.target.value);
              }}
              autoFocus
            />
            <IconButton
              sx={{ width: 45, height: 45 }}
              onClick={() => {
                inputRef.current?.click();
              }}
            >
              <input
                multiple
                ref={inputRef}
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const imgs = e.target.files;
                  if (!imgs) return;
                  const images = new Array(imgs.length).fill(1).map((_, i) => {
                    return imgs[i];
                  });
                  setImage(images);
                }}
              />
              <Badge
                badgeContent={image.length}
                sx={{
                  ".MuiBadge-standard": {
                    bgcolor: "#79acb15b",
                    color: "#000000",
                  },
                }}
              >
                <AddPhotoAlternate
                  sx={{ width: 30, height: 30, color: "#41B35D" }}
                />
              </Badge>
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
            <CustomButton
              sx={{ bgcolor: "#2077e1", color: "white", width: "80%" }}
              onClick={() => {
                if (!image) return;
                handleCreatePost(image);
              }}
            >
              Đăng
            </CustomButton>
          </Box>
        </Box>
      </Modal>
    </Paper>
  );
};

export default CreatePost;
