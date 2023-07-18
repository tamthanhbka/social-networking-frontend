import { Box, Tabs as DefaultTabs, Tab } from "@mui/material";
import { useState, type FC } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./Auth";

interface TabGroupProps {
  admin?: string;
}
function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const TabGroup: FC<TabGroupProps> = ({ admin }) => {
  const { user } = useAuth();
  const [value, setValue] = useState(0);
  const navigate = useNavigate();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <DefaultTabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab
              label="Thảo luận"
              {...a11yProps(0)}
              onClick={() => {
                navigate("");
              }}
            />
            <Tab
              label="Thành viên"
              {...a11yProps(1)}
              onClick={() => {
                navigate("member");
              }}
            />
            {user?.id === admin && (
              <Tab
                label="Danh sách yêu cầu"
                {...a11yProps(2)}
                onClick={() => {
                  navigate("requestJoingroup");
                }}
              />
            )}
          </DefaultTabs>
        </Box>
      </Box>
    </>
  );
};

export default TabGroup;
