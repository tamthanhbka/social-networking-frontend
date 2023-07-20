import { FC } from "react";
import { Box } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { Post, CreatePost } from "../../components";
import { GroupType, PostType } from "../../types";
import { useLocation, useParams } from "react-router-dom";
import { User, useAuth } from "../../components/Auth";
interface PostLayoutProps {
  fn: (pathname?: string) => Promise<any>;
  width: string;
}
const PostLayout: FC<PostLayoutProps> = ({ fn, width }) => {
  const { id } = useParams();
  const { user } = useAuth();
  const { data: posts, refetch } = useQuery<
    (PostType & { group?: GroupType })[]
  >({
    queryKey: ["posts", id],
    queryFn: () => fn(id),
    initialData: [],
    refetchOnWindowFocus: false,
  });

  return (
    <Box
      display="flex"
      flexDirection={"column"}
      width="100%"
      alignItems="center"
    >
      <Box
        flexDirection="column"
        sx={{ display: "flex", flex: 1, width: width }}
      >
        {!id || id === user?.id ? (
          user && <CreatePost user={user} onCreatePostSuccess={refetch} />
        ) : (
          <Box margin={2}></Box>
        )}

        <Box display="flex" flexDirection="column" alignItems="stretch">
          {posts.map((post, i) => (
            <Post key={i} {...post} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default PostLayout;
