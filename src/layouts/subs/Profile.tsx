import { Box, Button, Typography, styled } from "@mui/material";
import type { FC } from "react";
import { User, useAuth } from "../../components/Auth";
import { ConnectWithoutContact, Edit, PersonAdd } from "@mui/icons-material";
import { Tabs } from "../../components";
import { Outlet, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import { Info } from "../../components";
import { getInfo } from "../../api";

interface ProfileLayoutProps {}

const EditButton = styled(Button)({
  "&:hover": {
    backgroundColor: "#dbdbdb",
    color: "black",
  },
});

const FollowButton = styled(Button)({
  "&:hover": {
    backgroundColor: "#1A6ED8",
    color: "#ffffff",
  },
});

const ProfileLayout: FC<ProfileLayoutProps> = () => {
  const { id } = useParams();
  const { user } = useAuth();
  if (!id) {
    return <>Khong co param</>;
  }

  const { data: person } = useQuery<User>({
    queryKey: [`person${id}`],
    queryFn: () => getInfo(id),
    refetchOnWindowFocus: false,
  });
  if (!person) {
    return <>Khong tim thay nguoi dung</>;
  }

  return (
    <Box
      display="flex"
      sx={{
        width: "80%",
        ml: 8,
        minHeight: "100vh",
      }}
    >
      <Box display="flex" flexDirection="column" sx={{ width: "100%" }}>
        <Box bgcolor="white" sx={{ p: 3 }}>
          <Box
            display="flex"
            sx={{ width: "100%", borderBottom: "1px solid #c7c7c7" }}
            // justifyContent="center"
            alignItems="center"
            gap={1}
          >
            <Info user={person} />
            <Box display="flex" flex={1} justifyContent="end" alignItems="end">
              {person.id === user?.id ? (
                <EditButton sx={{ bgcolor: "#eae9e9" }}>
                  <Edit sx={{ color: "black" }} />
                  <Typography
                    sx={{
                      fontSize: 14,
                      fontWeight: 500,
                      textTransform: "initial",
                      color: "black",
                    }}
                  >
                    Chỉnh sửa thông tin cá nhân
                  </Typography>
                </EditButton>
              ) : (
                <FollowButton sx={{ bgcolor: "#2879db", gap: 1 }}>
                  <PersonAdd sx={{ color: "#ffffff" }} />
                  <Typography
                    sx={{
                      fontSize: 14,
                      fontWeight: 500,
                      textTransform: "initial",
                      color: "#ffffff",
                    }}
                  >
                    {user?.followers.includes(id) ? "Bỏ theo dõi" : "Theo dõi"}
                  </Typography>
                </FollowButton>
              )}
            </Box>
          </Box>
          <Tabs />
        </Box>
        <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
          <Box sx={{ width: "80%", justifyItems: "center" }}>
            <Outlet />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ProfileLayout;
