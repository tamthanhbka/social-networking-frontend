export type PostType = {
  id: string;
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
  images: string[];
};

export type GroupType = {
  id: string;
  groupName: string;
  status: string;
  admin: string;
  avatar: string;
};

export type Chat = {
  id: string;
  from: string;
  to: string;
  type: "text" | "image" | "video" | "audio" | "file";
  content: string;
  createdAt: string;
  updatedAt: string;
};
