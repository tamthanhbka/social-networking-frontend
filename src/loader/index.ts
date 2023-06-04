import { getAllPosts } from "../api";

const homeLoader = async () => {
  try {
    return await getAllPosts();
  } catch (error) {
    return [];
  }
};
export { homeLoader };
