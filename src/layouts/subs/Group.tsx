import { Box, Button, Typography } from "@mui/material";
import { useState, type FC, useEffect, useMemo } from "react";
import { GroupType } from "../../types";
import { Edit, PersonAdd } from "@mui/icons-material";
import { GroupInfo, TabGroup } from "../../components";
import { Outlet, useParams } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getInfoGroup, getListMember, joinGroup, outGroup } from "../../api";
import { User, useAuth } from "../../components/Auth";

interface GroupProps {}

const Group: FC<GroupProps> = () => {
  const { user } = useAuth();
  const { id } = useParams() as { id: string };
  const { data: group } = useQuery<GroupType>({
    queryKey: [`group${id}`],
    queryFn: () => getInfoGroup(id),
    refetchOnWindowFocus: false,
  });
  const { data: listMembers, refetch } = useQuery<User[]>({
    queryKey: [`members`, `group${id}`],
    queryFn: () => getListMember(id),
    initialData: [],
    refetchOnWindowFocus: false,
  });
  const isMember = useMemo(() => {
    if (!user) return false;
    const isInclude = listMembers.map((u) => u.id).includes(user.id);
    return isInclude;
  }, [listMembers, user]);
  const { mutate: handleJoinOutGroup } = useMutation(() => {
    const api = isMember ? outGroup : joinGroup;
    return api(id).then(() => refetch());
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
            <GroupInfo group={group} listMember={listMembers} />
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
                    handleJoinOutGroup();
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
                    {isMember ? "Rời khỏi nhóm" : "Tham gia nhóm"}
                  </Typography>
                </Button>
              )}
            </Box>
          </Box>
          <TabGroup admin={group?.admin} />
        </Box>
        <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default Group;
