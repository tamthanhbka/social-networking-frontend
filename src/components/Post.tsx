import type { FC } from "react";
import {
  Card,
  CardHeader,
  Avatar,
  IconButton,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Collapse,
  IconButtonProps,
  Box,
  ImageList,
  ImageListItem,
} from "@mui/material";
import {
  MoreVert,
  FavoriteOutlined,
  SmsOutlined,
  ShareOutlined,
} from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

interface PostProps {
  author: { username: string; avatar: string; id: string };
  createdAt: string;
  content: string;
  likes: string[];
  comments: {
    content: string;
    createdAt: string;
    updatedAt?: string;
    userId: string;
  }[];
  images: { link: string; createdAt: string }[];
}

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const Expand = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  // transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const Post: FC<PostProps> = ({
  author,
  comments,
  content,
  createdAt,
  images,
  likes,
}) => {
  const navigate = useNavigate();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const [favorite, setFavorite] = React.useState(false);

  const handleFavoriteClick = () => {
    setFavorite(!favorite);
  };
  return (
    <Card sx={{ maxWidth: "xl", borderRadius: 3, mb: 3 }}>
      <CardHeader
        sx={{ color: "black", fontSize: 40, fontWeight: "medium" }}
        avatar={
          <Link to={`/profile/${author.id}`}>
            <Avatar
              sx={{ width: "45px", height: "45px", outline: "solid 1px #aaa" }}
              alt={author.username}
              src={
                author.avatar
                  ? author.avatar
                  : "https://cdn-icons-png.flaticon.com/512/3237/3237472.png"
              }
              // onClick={() => navigate(`/profile/${author.id}`)}
            />
          </Link>
        }
        action={
          <IconButton aria-label="settings" sx={{}}>
            <MoreVert />
          </IconButton>
        }
        title={
          <Typography sx={{ fontSize: 18, fontWeight: 500 }}>
            {author.username}
          </Typography>
        }
        subheader={new Date(createdAt).toLocaleString("vi-VN", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
          hour: "2-digit",
          second: "2-digit",
          minute: "numeric",
        })}
      />
      <CardContent>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ color: "black", fontWeight: 400, fontSize: 16 }}
        >
          {content}
        </Typography>
      </CardContent>
      {images && (
        <ImageList cols={Math.min(3, images.length)} gap={1}>
          {images.map((item, i) => (
            <ImageListItem key={i} sx={{ border: "1px solid #aaaaaa" }}>
              <img
                src={`${item.link}`}
                srcSet={`${item.link}`}
                // alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      )}
      <Box sx={{ pl: 2, pr: 2 }}>
        <Box
          display="flex"
          gap={50}
          justifyContent="center"
          alignItems="center"
          sx={{ borderBottom: "solid 1px #cecece" }}
        >
          <Typography
            sx={{
              color: "#9A9B9D",
              fontSize: 14,
              fontWeight: 400,
              lineHeight: 3,
            }}
          >
            {likes.length != 0 && `${likes.length} người yêu thích`}
          </Typography>
          <Typography
            sx={{
              color: "#9A9B9D",
              fontSize: 14,
              fontWeight: 400,
              lineHeight: 3,
            }}
          >
            {comments.length != 0 && `${comments.length} bình luận`}
          </Typography>
        </Box>
      </Box>
      <CardActions
        sx={{ alignItems: "center", justifyContent: "center", gap: 25 }}
      >
        <IconButton
          aria-label="add to favorites"
          onClick={handleFavoriteClick}
          sx={{ color: favorite ? "red" : "gray" }} //favorite
        >
          <FavoriteOutlined />
        </IconButton>
        <IconButton aria-label="comment">
          <SmsOutlined />
        </IconButton>
        <IconButton aria-label="comment">
          <ShareOutlined />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Post;
