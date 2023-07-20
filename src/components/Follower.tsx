import { PersonAdd } from "@mui/icons-material";
import { Avatar, Box, Button, Card, Typography } from "@mui/material";
import type { FC } from "react";
import { User, useAuth } from "./Auth";
import { useNavigate, useParams } from "react-router-dom";
import { getInfo } from "../api";
import { useQuery } from "@tanstack/react-query";

interface FollowerProps {}

const Follower: FC<FollowerProps> = () => {
  const { user } = useAuth();
  const { id } = useParams() as { id: string };
  const { data: person, refetch } = useQuery<User>({
    queryKey: [`person${id}`],
    queryFn: () => getInfo(id),
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
      {person?.followers.map((member) => {
        return <Member key={member.id} member={member} user={user} />;
      })}
    </Card>
  );
};
const Member = ({ member, user }: { member: User; user?: User }) => {
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
        </Box>
      </Box>
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
        Bỏ theo dõi
      </Button>
    </Box>
  );
};
export default Follower;
