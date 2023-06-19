import { FC } from "react";
import { Box } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { Post, CreatePost } from "../../components";
import { PostType } from "../../types";
import { useParams } from "react-router-dom";
import { User, useAuth } from "../../components/Auth";
import { getInfo } from "../../api";
interface PostLayoutProps {
  fn: (id?: string) => Promise<any>;
}
const PostLayout: FC<PostLayoutProps> = ({ fn }) => {
  const { id } = useParams();
  const { user } = useAuth();
  const { data: posts } = useQuery<PostType[]>({
    queryKey: [`posts${fn}`],
    queryFn: () => fn(id),
    initialData: [],
    refetchOnWindowFocus: false,
  });
  const { data: person } = useQuery<User>({
    queryKey: [`person${id}`],
    queryFn: () => getInfo(id!),
    refetchOnWindowFocus: false,
  });

  return (
    <Box flexDirection="column" sx={{ display: "flex", flex: 1 }}>
      <CreatePost user={person ? person : user!} />
      <Box display="flex" flexDirection="column" alignItems="stretch">
        {posts.map((post, i) => (
          <Post key={i} {...post} />
        ))}
      </Box>
    </Box>
  );
};

export default PostLayout;
