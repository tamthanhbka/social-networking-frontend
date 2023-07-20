import { Avatar, Button, Typography } from "@mui/material";
import type { FC } from "react";
import { User } from "./Auth";
import { useNavigate } from "react-router-dom";

interface ContactItemProps {
  user: User;
}

const ContactItem: FC<ContactItemProps> = ({ user }) => {
  const navigate = useNavigate();
  console.log(user);

  return (
    <Button
      sx={{
        justifyContent: "start",
        borderRadius: 2,
        "&:hover": { bgcolor: "#E4E6E9" },
      }}
      onClick={() => {
        navigate(`profile/${user.id}`);
      }}
    >
      <Avatar
        sx={{
          width: 30,
          height: 30,
          outline: "solid 1px #aaa",
          mr: 2,
        }}
        src={
          user.avatar
            ? user.avatar
            : "https://cdn-icons-png.flaticon.com/512/3237/3237472.png"
        }
      />
      <Typography
        sx={{
          fontWeight: 500,
          fontSize: 14,
          textTransform: "initial",
          color: "black",
        }}
      >
        {user.username}
      </Typography>
    </Button>
  );
};

export default ContactItem;
