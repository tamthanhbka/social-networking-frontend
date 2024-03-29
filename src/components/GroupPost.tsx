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
  Modal,
  Fade,
  Menu,
  MenuItem,
  ListItemIcon,
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
import { GroupType } from "../types";
import { useAuth } from "./Auth";

interface GroupPostProps {
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
  group: GroupType;
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

const renderTime = (createdAt: string) => {
  const date = new Date(createdAt);
  const now = new Date();
  const diff = now.getTime() - date.getTime();
  let html: JSX.Element;
  if (diff < 1000 * 60) {
    html = <p>Vừa xong</p>;
  } else if (diff < 1000 * 60 * 60) {
    html = <p>{Math.floor(diff / (1000 * 60))} phút trước</p>;
  } else if (diff < 1000 * 60 * 60 * 24) {
    html = <p>{Math.floor(diff / (1000 * 60 * 60))} giờ trước</p>;
  } else if (diff < 1000 * 60 * 60 * 24 * 30) {
    html = <p>{Math.floor(diff / (1000 * 60 * 60 * 24))} ngày trước</p>;
  } else
    html = <p>{Math.floor(diff / (1000 * 60 * 60 * 24 * 30))} tháng trước</p>;
  return html;
};

const GroupPost: FC<GroupPostProps> = ({
  author,
  comments,
  content,
  createdAt,
  images,
  likes,
  group,
}) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const [expanded, setExpanded] = React.useState(false);
  const [viewImg, setViewImg] = React.useState<string>();
  const [openImgView, setOpenImgView] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const [favorite, setFavorite] = React.useState(false);

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
          <Typography
            onClick={() => {
              navigate(`/profile/${author.id}`);
            }}
            sx={{ fontSize: 18, fontWeight: 500, cursor: "pointer" }}
          >
            {author.username}
          </Typography>
        }
        subheader={
          <Box display="flex">
            {" "}
            <Typography
              sx={{ bgcolor: "#E7F3FF", color: "#1875F0", fontSize: 13, mr: 1 }}
            >
              {group.admin === author.id ? "Quan tri vien" : "Thanh vien"}
            </Typography>
            <Box sx={{ fontSize: 13 }}>{renderTime(createdAt)}</Box>
          </Box>
        }
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
                src={`${item}`}
                srcSet={`${item}`}
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

export default GroupPost;
