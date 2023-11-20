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
  MenuItem,
  Menu,
  ListItemIcon,
  Fade,
  Modal,
} from "@mui/material";
import {
  MoreVert,
  FavoriteOutlined,
  SmsOutlined,
  ShareOutlined,
  Edit,
  Delete,
} from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./Auth";
import { useMutation } from "@tanstack/react-query";
import { isPostOfGroup } from "../api";
import { GroupType } from "../types";
import { renderTime } from "../utils";

interface PostProps {
  id: string;
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
  images: string[];
  group?: GroupType;
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
  id,
  group,
}) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const [favorite, setFavorite] = React.useState(false);
  const [viewImg, setViewImg] = React.useState<string>();
  const [openImgView, setOpenImgView] = React.useState(false);
  const { mutate: handleGroupPost } = useMutation((postId: string) => {
    return isPostOfGroup(postId);
  });
  const handleFavoriteClick = () => {
    setFavorite(!favorite);
  };
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
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
          user?.id == author.id && (
            <IconButton
              aria-label="settings"
              sx={{}}
              onClick={handleClick}
              aria-controls={open ? "post-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
            >
              <MoreVert />
            </IconButton>
          )
        }
        title={
          <Box display="flex" alignItems="baseline" gap={0.3}>
            <Typography
              onClick={() => {
                navigate(`/profile/${author.id}`);
              }}
              sx={{ fontSize: 18, fontWeight: 500, cursor: "pointer" }}
            >
              {author.username}
            </Typography>
            {group ? (
              <>
                <span
                  style={{
                    color: "#aaaaaa",
                    fontWeight: "lighter",
                    padding: "0 2px",
                  }}
                >
                  đã đăng trong
                </span>
                <b
                  onClick={() => navigate(`/group/${group.id}`)}
                  style={{ cursor: "pointer" }}
                >
                  {group?.groupName}
                </b>
              </>
            ) : (
              ""
            )}
          </Box>
        }
        subheader={renderTime(createdAt)}
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
          {images.map((item) => (
            <ImageListItem key={item} sx={{ border: "1px solid #aaaaaa" }}>
              <img
                src={item}
                srcSet={item}
                // alt={item.title}
                loading="lazy"
                onClick={() => {
                  setOpenImgView(true);
                  setViewImg(item);
                }}
                style={{ cursor: "pointer" }}
              />
            </ImageListItem>
          ))}
        </ImageList>
      )}
      <Modal
        open={openImgView}
        onClose={() => {
          setOpenImgView(false);
          setTimeout(() => {
            setViewImg(undefined);
          }, 500);
        }}
        closeAfterTransition
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          ".MuiModal-backdrop": { bgcolor: "#0f0e0ef5" },
        }}
      >
        <Fade in={openImgView} timeout={500}>
          <img src={viewImg} alt="asd" style={{ height: "500px" }} />
        </Fade>
      </Modal>
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
      <Menu
        anchorEl={anchorEl}
        id="post-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Edit fontSize="small" sx={{ mr: 1 }} />
          </ListItemIcon>
          Chỉnh sửa bài viết
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Delete fontSize="small" sx={{ mr: 1 }} />
          </ListItemIcon>
          Xóa bài viết
        </MenuItem>
      </Menu>
    </Card>
  );
};

export default Post;
