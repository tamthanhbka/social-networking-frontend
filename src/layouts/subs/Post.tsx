import { FC } from "react";
import { Box } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { Post, CreatePost } from "../../components";
import { PostType } from "../../types";
import { useLocation, useParams } from "react-router-dom";
import { User, useAuth } from "../../components/Auth";
interface PostLayoutProps {
  fn: (pathname?: string) => Promise<any>;
}
const PostLayout: FC<PostLayoutProps> = ({ fn }) => {
  const { id } = useParams();
  const { user } = useAuth();
  const { data: posts, refetch } = useQuery<PostType[]>({
    queryKey: ["posts", id],
    queryFn: () => fn(id),
    initialData: [],
    refetchOnWindowFocus: false,
  });

  return (
    <Box flexDirection="column" sx={{ display: "flex", flex: 1 }}>
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
  );
};

export default PostLayout;
