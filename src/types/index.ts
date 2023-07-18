export type PostType = {
  author: { username: string; avatar: string; id: string };
  createdAt: string;
  content: string;
  likes: string[];
  comments: {
    content: string;
    createdAt: string;
    updatedAt?: string;
    userId: string;
  }[];
  images: { link: string; createdAt: string }[];
};

export type GroupType = {
  id: string;
  groupName: string;
  status: string;
  admin: string;
  avatar: string;
};
