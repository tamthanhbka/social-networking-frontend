import { Box, Button, Typography, styled } from "@mui/material";
import { useState, type FC, useEffect } from "react";
import { User, useAuth } from "../../components/Auth";
import { ConnectWithoutContact, Edit, PersonAdd } from "@mui/icons-material";
import { Tabs } from "../../components";
import { Outlet, useParams } from "react-router-dom";
import { useQuery, useMutation } from "@tanstack/react-query";

import { Info, EditInfo } from "../../components";
import { followUser, getInfo, unfollowUser } from "../../api";

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
  const { id } = useParams() as { id: string };
  const { user } = useAuth();
  const [open, setOpen] = useState(false);
  const [isFollowed, setIsFollowed] = useState(false);
  const { data: person, refetch } = useQuery<User>({
    queryKey: [`person${id}`],
    queryFn: () => getInfo(id),
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    if (person && user)
      setIsFollowed(
        person.followers.some((u) => {
          const condition = u.id === user.id;
          return condition;
        })
      );
  }, [person]);

  const { mutate: handleFollow } = useMutation(() =>
    followUser(id).then(() => refetch())
  );
  const { mutate: handleUnfollow } = useMutation(() =>
    unfollowUser(id).then(() => refetch())
  );
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

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
                <EditButton
                  sx={{ bgcolor: "#eae9e9" }}
                  onClick={() => {
                    handleOpen();
                  }}
                >
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
                <FollowButton
                  sx={{ bgcolor: "#2879db", gap: 1 }}
                  onClick={() => {
                    const handle = isFollowed ? handleUnfollow : handleFollow;
                    handle();
                  }}
                >
                  <PersonAdd sx={{ color: "#ffffff" }} />
                  <Typography
                    sx={{
                      fontSize: 14,
                      fontWeight: 500,
                      textTransform: "initial",
                      color: "#ffffff",
                    }}
                  >
                    {isFollowed ? "Bỏ theo dõi" : "Theo dõi"}
                  </Typography>
                </FollowButton>
              )}
            </Box>
          </Box>
          <Tabs />
        </Box>
        <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
          <Outlet />
        </Box>
      </Box>
      {open && (
        <EditInfo
          user={person}
          open={open}
          onClose={handleClose}
          onUpdateSuccess={refetch}
        />
      )}
    </Box>
  );
};

export default ProfileLayout;
