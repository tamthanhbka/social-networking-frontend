import { FC } from "react";
import { Box } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { Post, CreatePost, CreateGroupPost, GroupPost } from "../../components";
import { GroupType, PostType } from "../../types";
import { useLocation, useParams } from "react-router-dom";
import { User, useAuth } from "../../components/Auth";
import { getInfoGroup, getPostsOfGroup } from "../../api";
interface GroupPostLayoutProps {}
const GroupPostLayout: FC<GroupPostLayoutProps> = ({}) => {
  const { id } = useParams();
  const { user } = useAuth();
  const { data: posts, refetch } = useQuery<PostType[]>({
    queryKey: ["posts", id],
    queryFn: () => getPostsOfGroup(id),
    initialData: [],
    refetchOnWindowFocus: false,
  });
  const { data: group } = useQuery<GroupType>({
    queryKey: ["group", id],
    queryFn: () => getInfoGroup(id),
    refetchOnWindowFocus: false,
  });

  if (!group) {
    return <></>;
  }

  return (
    <Box
      display="flex"
      flexDirection={"column"}
      width="100%"
      alignItems="center"
    >
      <Box
        flexDirection="column"
        sx={{ display: "flex", flex: 1, width: "80%" }}
      >
        {user && <CreateGroupPost onCreatePostSuccess={refetch} />}
        <Box display="flex" flexDirection="column" alignItems="stretch">
          {posts.map((post, i) => (
            <GroupPost key={i} {...post} group={group} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default GroupPostLayout;
