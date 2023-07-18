import { Avatar, AvatarGroup, Box, Typography } from "@mui/material";
import type { FC } from "react";
import { GroupType } from "../types";
import { useAuth } from "./Auth";

interface GroupInfoProps {
  group?: GroupType;
}

const GroupInfo: FC<GroupInfoProps> = ({ group }) => {
  const { user } = useAuth();
  // const { id } = useParams() as { id: string };
  // const { data: group } = useQuery<GroupType>({
  //   queryKey: [`group${id}`],
  //   queryFn: () => getInfoGroup(id),
  //   refetchOnWindowFocus: false,
  // });
  return (
    <>
      <Box sx={{ p: 2 }}>
        <Avatar
          sx={{
            width: "170px",
            height: "170px",
            outline: "solid 1px #aaa",
          }}
          alt="{user?.username}"
          src={
            group?.avatar
              ? group.avatar
              : "https://cdn-icons-png.flaticon.com/512/3237/3237472.png"
          }
        />
      </Box>
      <Box>
        <Box>
          <Typography sx={{ fontSize: 32, fontWeight: 900, color: "#313131" }}>
            {group?.groupName}
          </Typography>
          <Typography
            sx={{
              fontSize: 16,
              fontWeight: 500,
              color: "#686565",
              textTransform: "inherit",
            }}
          >
            Nhóm {group?.status}
          </Typography>
          {user?.id === group?.admin && (
            <Typography
              sx={{ fontSize: 16, fontWeight: 500, color: "#686565" }}
            >
              Bạn là quản trị viên
            </Typography>
          )}

          {/* <Typography sx={{ fontSize: 16, fontWeight: 500, color: "#686565" }}>
            30 thanh vien
          </Typography> */}
        </Box>
        {/* <AvatarGroup total={followers.length} sx={{ display: "-webkit-box" }}>
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
    </AvatarGroup> */}
      </Box>
    </>
  );
};

export default GroupInfo;
