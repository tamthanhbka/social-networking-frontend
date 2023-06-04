import { FC } from "react";
import { useLoaderData } from "react-router-dom";
import { Box, Paper, Avatar, Button } from "@mui/material";
import { AddPhotoAlternate, EmojiEmotionsOutlined } from "@mui/icons-material";
import { Post, Contact } from "../../components";
import { PostType } from "../../types";
import { useAuth } from "../../components/Auth";

interface PostLayoutProps {}

const PostLayout: FC<PostLayoutProps> = () => {
  const posts = useLoaderData() as PostType[];
  const { user } = useAuth();
  return (
    <>
      <Box sx={{ width: "60%", display: "flex", ml: 8 }}>
        <Box display="flex" flexDirection="column" alignItems="stretch">
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
              <Avatar
                sx={{
                  width: "45px",
                  height: "45px",
                  outline: "solid 1px #aaa",
                }}
                alt="TamThanh"
                src={
                  user?.avatar
                    ? user.avatar
                    : "https://cdn-icons-png.flaticon.com/512/3237/3237472.png"
                }
              />
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
              >
                Bạn đang nghĩ gì thế?
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
              >
                <AddPhotoAlternate
                  sx={{ width: 40, height: 40, color: "#41B35D" }}
                />
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
          </Paper>
          {posts.map((post, i) => (
            <Post key={i} {...post} />
          ))}
        </Box>
      </Box>
      <Contact />
    </>
  );
};

export default PostLayout;
