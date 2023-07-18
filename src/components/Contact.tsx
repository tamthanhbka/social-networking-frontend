import { Box, Typography } from "@mui/material";
import type { FC } from "react";
import { useQuery } from "@tanstack/react-query";
import { User, useAuth } from "./Auth";
import ContactItem from "./ContactItem";
import { listFollowedPeople } from "../api";

interface ContactProps {}

const Contact: FC<ContactProps> = () => {
  const { user } = useAuth();
  const { data: followedPeople } = useQuery<User[]>({
    queryKey: ["followedPeople"],
    queryFn: () => listFollowedPeople(),
    refetchOnWindowFocus: false,
  });
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        position: "fixed",
        right: 0,
        width: "17%",
        height: "calc(100vh - 60px)",
        overflowY: "auto",
        overflowX: "hidden",
        "&::-webkit-scrollbar": {
          bgcolor: "transparent",
          width: 8,
        },
        "&::-webkit-scrollbar-thumb": {
          bgcolor: "#aaaa",
          borderRadius: 5,
        },
      }}
    >
      <Typography sx={{ fontWeight: 500, fontSize: 18, mt: "1rem" }}>
        Người đang theo dõi
      </Typography>
      <Box display="flex" flexDirection="column" sx={{ mt: 1 }}>
        {/* Danh sach nguoi dang follow */}
        {followedPeople &&
          followedPeople.map((person, i) => (
            <ContactItem key={i} user={person} />
          ))}
      </Box>
    </Box>
  );
};

export default Contact;
