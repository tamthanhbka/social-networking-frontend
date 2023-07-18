import {
  Avatar,
  Box,
  Button,
  Card,
  IconButton,
  MenuItem,
  Modal,
  ModalProps,
  TextField,
  Typography,
} from "@mui/material";
import { useState, type FC } from "react";
import { toast } from "react-toastify";
import { User } from "./Auth";
import { Close, Public } from "@mui/icons-material";
import { useMutation } from "@tanstack/react-query";
import { createGroup } from "../api";
import { useNavigate } from "react-router-dom";
import { GroupType } from "../types";

interface CreateGroupProps extends Omit<ModalProps, "children"> {
  onClose?: () => void;
  user?: User;
}
const currencies = [
  {
    value: "riêng tư",
    label: "Riêng tư",
  },
  {
    value: "công khai",
    label: "Công khai",
  },
];

const CreateGroup: FC<CreateGroupProps> = (props) => {
  const navigate = useNavigate();
  const [groupName, setGroupName] = useState("");
  const [status, setStatus] = useState("");
  const { onClose, user } = props;
  const { mutate: handleCreateGroup } = useMutation(() => {
    return createGroup({ groupName, status })
      .then((group) => {
        toast.success("Tạo nhóm thành công thành công!");
        return group;
      })
      .then((group: GroupType) => {
        navigate(`group/${group.id}`);
      })
      .then(onClose);
  });
  return (
    <Modal
      sx={{ display: "grid", placeItems: "center" }}
      color="#1A6ED8"
      {...props}
    >
      <Card
        sx={{
          background: "#fff",
          width: "clamp(250px, 30%, 600px)",
          //   minHeight: "500px",
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
            Tạo nhóm mới
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
        <Box p={4}>
          <Box display={"flex"} gap={2}>
            <Avatar
              sx={{ width: 45, height: 45, outline: "solid 1px #aaa" }}
              alt={user?.username}
              src={user?.avatar}
            />
            <Box>
              <Typography sx={{ fontSize: 18, fontWeight: 600 }}>
                {user?.username}
              </Typography>
              <Typography sx={{ fontSize: 14, fontWeight: 400 }}>
                Quản trị viên
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{ mt: 4 }}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
          >
            <TextField
              id="outlined-basic"
              label="Tên nhóm"
              variant="outlined"
              sx={{ width: "90%" }}
              onChange={(e) => {
                setGroupName(e.target.value);
              }}
            />
            <TextField
              id="outlined-select-currency"
              select
              label="Chọn quyền riêng tư"
              defaultValue="Công khai"
              sx={{ width: "90%", mt: 3 }}
              onChange={(e) => {
                setStatus(e.target.value);
              }}
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Box>
          <Box sx={{ mt: 6 }} textAlign={"center"}>
            <Button
              sx={{
                bgcolor: "#2a7de1",
                color: "#fff",
                "&:hover": { bgcolor: "#1A6ED8" },
                textTransform: "initial",
                width: "70%",
              }}
              onClick={() => {
                handleCreateGroup();
              }}
            >
              Tạo
            </Button>
          </Box>
        </Box>
      </Card>
    </Modal>
  );
};

export default CreateGroup;
