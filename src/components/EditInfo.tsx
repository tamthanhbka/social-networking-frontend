import {
  AccountCircle,
  Close,
  EditOutlined,
  Phone,
  Save,
} from "@mui/icons-material";
import { toast } from "react-toastify";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardHeader,
  IconButton,
  Input,
  InputAdornment,
  Modal,
  ModalProps,
  TextField,
  Typography,
} from "@mui/material";
import { FC, useEffect, useState } from "react";
import { User, useAuth } from "./Auth";
import { useMutation } from "@tanstack/react-query";
import { updateInfo } from "../api";

interface EditInfoProps extends Omit<ModalProps, "children"> {
  onClose?: () => void;
  user: User;
  onUpdateSuccess: () => void;
}

const EditInfo: FC<EditInfoProps> = (props) => {
  const { action } = useAuth();
  const [openNameEdit, setOpenNameEdit] = useState(false);
  const [openPhoneEdit, setOpenPhoneEdit] = useState(false);
  const [avatar, setAvatar] = useState(props.user.avatar);
  const [phone, setPhone] = useState(props.user.phone);
  const [username, setUsername] = useState(props.user.username);
  const { onClose, user, onUpdateSuccess } = props;
  const { mutate: handleUpdateInfo } = useMutation(
    () => {
      console.log(avatar);
      return updateInfo({ avatar, phone, username })
        .then(() => {
          toast.success("Chỉnh sửa thành công!");
        })
        .then(onClose)
        .then(() => {
          action.update();
        })
        .then(onUpdateSuccess);
    }
    // .then(handleClose)
    // .then(onCreatePostSuccess)
    // .catch((e) => {
    //   toast.error(e.message);
  );
  // useEffect(() => {
  //   handleUpdateInfo();
  // }, [avatar, phone, username]);
  return (
    <Modal
      sx={{ display: "grid", placeItems: "center" }}
      color="#1A6ED8"
      {...props}
    >
      <Card
        sx={{
          background: "#fff",
          width: "clamp(350px, 40%, 700px)",
          minHeight: "500px",
        }}
      >
        <Box
          sx={{
            padding: 2,
            borderBottom: "#dedcdc 1px solid",
            display: "flex",
            position: "relative",
            justifyContent: "center",
          }}
        >
          <Typography variant="h6" fontWeight={900}>
            Chỉnh sửa trang cá nhân
          </Typography>
          <IconButton
            onClick={onClose}
            sx={{
              position: "absolute",
              right: 12,
              top: 12,
              background: "#e3e5ea",
              "&:hover": { backgroundColor: "#D8DADF" },
            }}
          >
            <Close />
          </IconButton>
        </Box>
        <Box p={2}>
          <Box position={"relative"} display={"flex"} flexDirection={"column"}>
            <Typography variant="h6" fontWeight={900}>
              Ảnh đại diện
            </Typography>
            <Button
              sx={{
                textTransform: "initial",
                position: "absolute",
                top: 0,
                right: 12,
                "&:hover": { backgroundColor: "#e7eaeb" },
              }}
            >
              <label htmlFor="avatar_input">Chỉnh sửa</label>
              <input
                id="avatar_input"
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                onChange={(e) => {
                  const img = e.target.files?.[0];
                  if (!img) return;
                  const reader = new FileReader();
                  reader.onload = (v) => {
                    setAvatar(v.target?.result?.toString() || avatar);
                  };
                  reader.readAsDataURL(img);
                }}
              />
            </Button>
            <Avatar
              sx={{
                width: "170px",
                height: "170px",
                outline: "solid 1px #aaa",
                alignSelf: "center",
                m: 2,
              }}
              alt={`${user.username}`}
              src={avatar}
            ></Avatar>
          </Box>
          <Box display={"flex"} flexDirection={"column"}>
            {/* <Modal
              open={openNameEdit}
              onClose={() => {
                setOpenNameEdit(false);
              }}
              sx={{ display: "grid", placeItems: "center" }}
            >
              <Card sx={{ p: 2 }}>
                <CardHeader
                  title={
                    <Typography
                    // sx={{ borderBottom: "1px solid #aaa", mb: 2, p: 2 }}
                    >
                      Chỉnh sửa thông tin liên hệ
                    </Typography>
                  }
                ></CardHeader>
                <Box display={"flex"}>
                  <TextField
                    id="outlined-basic"
                    label="Tên nhóm"
                    variant="outlined"
                    sx={{ width: "90%" }}
                  />
                  <IconButton onClick={() => setOpenNameEdit(false)}>
                    <Save></Save>
                  </IconButton>
                </Box>
              </Card>
            </Modal> */}
            <Typography variant="h6" fontWeight={900}>
              Thông tin liên hệ
            </Typography>
            <Box
              position="relative"
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <TextField
                defaultValue={phone}
                sx={{ width: "50%" }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Phone />
                    </InputAdornment>
                  ),
                  readOnly: !openPhoneEdit,
                }}
                variant="standard"
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
              />
              <IconButton
                sx={{
                  textTransform: "initial",
                  bgcolor: "#e4e8e9",
                  "&:hover": { backgroundColor: "#dce0e0" },
                }}
                onClick={() => setOpenPhoneEdit((v) => !v)}
              >
                <EditOutlined></EditOutlined>
              </IconButton>
            </Box>
          </Box>
          <Box display={"flex"} flexDirection={"column"}>
            <Typography variant="h6" fontWeight={900}>
              Tên người dùng
            </Typography>
            <Box
              position={"relative"}
              display={"flex"}
              alignItems="center"
              justifyContent="space-between"
            >
              <TextField
                defaultValue={username}
                sx={{ width: "50%" }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  ),
                  readOnly: !openNameEdit,
                }}
                variant="standard"
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
              <IconButton
                sx={{
                  textTransform: "initial",
                  bgcolor: "#e4e8e9",
                  "&:hover": { backgroundColor: "#dce0e0" },
                }}
                onClick={() => setOpenNameEdit((v) => !v)}
              >
                <EditOutlined></EditOutlined>
              </IconButton>
            </Box>
          </Box>
        </Box>
        <Box display="grid" sx={{ placeItems: "center", p: 2 }}>
          <Button
            sx={{
              color: "#fff",
              width: "40%",
              bgcolor: "#4f85f1",
              "&:hover": { bgcolor: "#3971e0" },
            }}
            onClick={() => handleUpdateInfo()}
          >
            Cập nhật
          </Button>
        </Box>
      </Card>
    </Modal>
  );
};

export default EditInfo;
