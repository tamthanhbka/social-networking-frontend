import { Avatar, AvatarGroup, Box, Typography } from "@mui/material";
import type { FC } from "react";
import type { User } from "./Auth";
import { useQuery } from "@tanstack/react-query";
import { getInfo } from "../api";

interface InfoProps {
  user: User;
}

const Info: FC<InfoProps> = ({ user }) => {
  const followerIds = user.followers;
  const followers = followerIds.map((id) => {
    const { data: person } = useQuery<User>({
      queryKey: [`person${id}`],
      queryFn: () => getInfo(id),
      refetchOnWindowFocus: false,
    });
    return person;
  });

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
        <Box sx={{ fontSize: 32, fontWeight: 900 }}>
          {user?.username}
          <Typography sx={{ fontSize: 16, fontWeight: 500, color: "#686565" }}>
            {user?.phone}
          </Typography>
          <Typography sx={{ fontSize: 16, fontWeight: 500, color: "#686565" }}>
            {user?.followers.length} Nguoi theo doi
          </Typography>
        </Box>
        <AvatarGroup
          total={user?.followers.length}
          sx={{ display: "-webkit-box" }}
          max={6}
        >
          {followers.map((follower) => (
            <Avatar alt={`${follower?.username}`} src={`${follower?.avatar}`} />
          ))}
        </AvatarGroup>
      </Box>
    </>
  );
};

export default Info;
