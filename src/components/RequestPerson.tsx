import { DeleteForever, PersonAdd } from "@mui/icons-material";
import { Avatar, Box, Button, Typography } from "@mui/material";
import type { FC } from "react";
import { User } from "./Auth";
import { useParams } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { acceptMember } from "../api";
import { useState } from "react";
import { toast } from "react-toastify";

interface RequestPersonProps {
  person: User;
  onAccepted: () => {};
}

const RequestPerson: FC<RequestPersonProps> = ({ person, onAccepted }) => {
  const { id } = useParams() as { id: string };
  // const [requestPerson, setRequestPerson] = useState<string>();
  const { mutate: handleAcceptMember } = useMutation(
    (requestPerson: string) => {
      return acceptMember(id, requestPerson).then(onAccepted);
    }
  );
  return (
    <Box
      display="flex"
      sx={{
        border: "1px solid #e2e2e2",
        p: 2,
        m: 1,
        borderRadius: 2,
        "&:hover": {
          // transform: "scale(1.001)",
          boxShadow: "0px 0px 3px 3px rgba(242, 242, 242, 1)",
        },
      }}
      alignItems="center"
      justifyContent="space-between"
      width="47%"
    >
      <Box display="flex" gap={1} alignItems="center">
        <Avatar sx={{ width: 60, height: 60 }} src={person.avatar}></Avatar>
        <Typography sx={{ fontWeight: 600 }}>{person.username}</Typography>
      </Box>
      <Box display="flex" gap={1} flexDirection="column">
        <Button
          sx={{
            color: "white",
            bgcolor: "#2879db",
            "&:hover": { bgcolor: "#2571ce" },
            display: "flex",
            alignItems: "center",
            gap: 1,
            textTransform: "initial",
          }}
          onClick={() => {
            handleAcceptMember(person.id);
          }}
        >
          <PersonAdd sx={{ color: "#ffffff" }} />
          Chấp nhận
        </Button>
        {/* <Button
          sx={{
            color: "#000000",
            bgcolor: "#e0e0e0",
            "&:hover": { bgcolor: "#cbcbcb" },
            display: "flex",
            alignItems: "center",
            gap: 1,
            textTransform: "initial",
          }}
        >
          <DeleteForever sx={{ color: "#1c1c1c" }} />
          Từ chối
        </Button> */}
      </Box>
    </Box>
  );
};

export default RequestPerson;
