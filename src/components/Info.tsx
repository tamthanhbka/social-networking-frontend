import { Avatar, AvatarGroup, Box, Typography } from "@mui/material";
import { type FC } from "react";
import type { User } from "./Auth";
import { useNavigate } from "react-router-dom";

interface InfoProps {
  user: User;
}

const Info: FC<InfoProps> = ({ user }) => {
  const navigate = useNavigate();
  const { followers } = user;
  return (
    <>
      <Box sx={{ p: 2 }}>
        <Avatar
          sx={{
            width: "170px",
            height: "170px",
            outline: "solid 1px #aaa",
          }}
          alt={user?.username}
          src={
            user?.avatar
              ? user.avatar
              : "https://cdn-icons-png.flaticon.com/512/3237/3237472.png"
          }
        />
      </Box>
      <Box>
        <Box>
          <Typography sx={{ fontSize: 32, fontWeight: 900, color: "#313131" }}>
            {user?.username}
          </Typography>
          <Typography sx={{ fontSize: 16, fontWeight: 500, color: "#686565" }}>
            {user?.phone}
          </Typography>
          <Typography sx={{ fontSize: 16, fontWeight: 500, color: "#686565" }}>
            {followers.length} Nguoi theo doi
          </Typography>
        </Box>
        <AvatarGroup total={followers.length} sx={{ display: "-webkit-box" }}>
          {followers.map((follower, i) => (
            <Avatar
              key={i}
              alt={`${follower?.username}`}
              src={`${follower?.avatar}`}
              onClick={() => navigate(`/profile/${follower.id}`)}
              sx={{
                cursor: "pointer",
                "&:hover": {
                  transform: "scale(1.07)",
                  boxShadow: "0px 0px 3px 3px rgba(230, 230, 229, 1)",
                },
              }}
            />
          ))}
        </AvatarGroup>
      </Box>
    </>
  );
};

export default Info;
