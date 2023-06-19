import { Box, Typography } from "@mui/material";
import type { FC } from "react";
import { useQuery } from "@tanstack/react-query";
import { getListFollowers } from "../api";
import { User } from "./Auth";
import ContactItem from "./ContactItem";

interface ContactProps {}

const Contact: FC<ContactProps> = () => {
  const { data: followers } = useQuery<User[]>({
    queryKey: ["followers"],
    queryFn: () => getListFollowers(),
    initialData: [],
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
        {followers.map((follower, i) => (
          <ContactItem key={i} user={follower} />
        ))}
      </Box>
    </Box>
  );
};

export default Contact;
