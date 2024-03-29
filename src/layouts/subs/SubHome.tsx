import type { FC } from "react";

import { Contact } from "../../components";
import PostLayout from "./Post";
import { Box } from "@mui/material";
import { getAllPosts } from "../../api";

interface SubHomeLayoutProps {}

const SubHomeLayout: FC<SubHomeLayoutProps> = () => {
  return (
    <>
      <Box sx={{ ml: 24, flexBasis: 700 }}>
        <PostLayout fn={getAllPosts} width="100%" />
      </Box>
      <Contact />
    </>
  );
};

export default SubHomeLayout;
