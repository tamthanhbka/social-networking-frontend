import { Card, Typography } from "@mui/material";
import type { FC } from "react";
import { User } from "./Auth";
import { useParams } from "react-router-dom";
import { getListRequestJoinGroup } from "../api";
import { useQuery } from "@tanstack/react-query";
import RequestPerson from "./RequestPerson";

interface RequestJoinGroupProps {}

const RequestJoinGroup: FC<RequestJoinGroupProps> = () => {
  const { id } = useParams() as { id: string };
  const { data: listRequestJoinGroup, refetch } = useQuery<User[]>({
    queryKey: [`members`, id],
    queryFn: () => getListRequestJoinGroup(id),
    initialData: [],
    refetchOnWindowFocus: false,
  });
  return (
    <Card
      sx={{
        width: "100%",
        bgcolor: "white",
        mt: 2,
        p: 2,
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
      }}
    >
      {listRequestJoinGroup.length == 0 && (
        <Typography fontWeight="500">Không có yêu cầu tham gia nhóm</Typography>
      )}
      {listRequestJoinGroup.map((member) => {
        return (
          <RequestPerson key={member.id} person={member} onAccepted={refetch} />
        );
      })}
    </Card>
  );
};

export default RequestJoinGroup;
