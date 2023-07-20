import { PersonAdd, RemoveRedEye } from "@mui/icons-material";
import { Avatar, Box, Button, Card, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import type { FC } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { User, useAuth } from "./Auth";
import { getInfoGroup, getListMember } from "../api";
import { GroupType } from "../types";
import { useState, useEffect } from "react";

interface GroupMemberProps {}

const GroupMember: FC<GroupMemberProps> = () => {
  const { user } = useAuth();
  const { id } = useParams() as { id: string };
  const { data: group } = useQuery<GroupType>({
    queryKey: [`group${id}`],
    queryFn: () => getInfoGroup(id),
    refetchOnWindowFocus: false,
  });
  const { data: listMembers, refetch } = useQuery<User[]>({
    queryKey: [`members`, id],
    queryFn: () => getListMember(id),
    initialData: [],
    refetchOnWindowFocus: false,
  });
  return (
    <Card
      sx={{
        width: "100%",
        bgcolor: "white",
        mt: 2,
        p: 2,
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
      }}
    >
      {listMembers.map((member) => {
        return (
          <Member key={member.id} member={member} group={group} user={user} />
        );
      })}
    </Card>
  );
};
const Member = ({
  member,
  group,
  user,
}: {
  member: User;
  group?: GroupType;
  user?: User;
}) => {
  // const [isFollowed, setIsFollowed] = useState(false);
  // useEffect(() => {
  //   if (member && user)
  //     setIsFollowed(
  //       member.followers.some((u) => {
  //         const condition = u.id === user.id;
  //         return condition;
  //       })
  //     );
  // }, [member]);
  const navigate = useNavigate();
  return (
    <Box
      display="flex"
      sx={{
        border: "1px solid #e2e2e2",
        p: 2,
        m: 1,
        borderRadius: 2,
        "&:hover": {
          // transform: "scale(1.001)",
          boxShadow: "0px 0px 3px 3px rgba(242, 242, 242, 1)",
        },
      }}
      alignItems="center"
      justifyContent="space-between"
      width="47%"
    >
      <Box display="flex" gap={1} alignItems="center">
        <Avatar
          sx={{ width: 60, height: 60, cursor: "pointer" }}
          src={member.avatar}
          onClick={() => navigate(`/profile/${member.id}`)}
        ></Avatar>
        <Box>
          <Typography sx={{ fontWeight: 600 }}>{member.username}</Typography>
          {member.id === group?.admin && (
            <Typography sx={{ fontWeight: 400, fontSize: 12 }}>
              Quản trị viên
            </Typography>
          )}
        </Box>
      </Box>
      {member.id === group?.admin ? (
        <Button
          sx={{
            color: "black",
            bgcolor: "#eae9e9",
            "&:hover": { bgcolor: "#DBDBDB" },
            display: "flex",
            alignItems: "center",
            gap: 1,
            textTransform: "initial",
          }}
        >
          <RemoveRedEye sx={{ color: "black" }} />
          Xem trang cá nhân
        </Button>
      ) : (
        <Button
          sx={{
            color: "white",
            bgcolor: "#2879db",
            "&:hover": { bgcolor: "#2571ce" },
            display: "flex",
            alignItems: "center",
            gap: 1,
            textTransform: "initial",
          }}
        >
          <PersonAdd sx={{ color: "#ffffff" }} />
          Theo dõi
        </Button>
      )}
    </Box>
  );
};
export default GroupMember;
