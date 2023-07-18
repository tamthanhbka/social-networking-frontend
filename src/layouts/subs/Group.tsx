import { Box, Button, Typography } from "@mui/material";
import type { FC } from "react";
import { GroupType } from "../../types";
import { Edit, PersonAdd } from "@mui/icons-material";
import { GroupInfo, TabGroup } from "../../components";
import { Outlet, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getInfoGroup } from "../../api";
import { useAuth } from "../../components/Auth";

interface GroupProps {}

const Group: FC<GroupProps> = () => {
  const { user } = useAuth();
  const { id } = useParams() as { id: string };
  const { data: group } = useQuery<GroupType>({
    queryKey: [`group${id}`],
    queryFn: () => getInfoGroup(id),
    refetchOnWindowFocus: false,
  });
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
            <GroupInfo group={group} />
            <Box display="flex" flex={1} justifyContent="end" alignItems="end">
              {group?.admin === user?.id ? (
                <Button
                  sx={{ bgcolor: "#eae9e9", "&:hover": { bgcolor: "#DBDBDB" } }}
                  onClick={() => {
                    // handleOpen();
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
                    Chỉnh sửa thông tin nhóm
                  </Typography>
                </Button>
              ) : (
                <Button
                  sx={{
                    bgcolor: "#2879db",
                    gap: 1,
                    "&:hover": { bgcolor: "#2571ce" },
                  }}
                  onClick={() => {
                    // const handle = isFollowed ? handleUnfollow : handleFollow;
                    // handle();
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
                    {/* {isFollowed ? "Bỏ theo dõi" : "Theo dõi"} */}
                    Tham gia nhóm
                  </Typography>
                </Button>
              )}
            </Box>
          </Box>
          <TabGroup admin={group?.admin} />
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

export default Group;
