import { Box, Tab, Tabs as DefaultTabs } from "@mui/material";
import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";

// interface TabsProps {
//   children?: React.ReactNode;
//   index: number;
//   value: number;
// }

// function TabPanel(props: TabsProps) {
//   const { children, value, index, ...other } = props;
//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`simple-tabpanel-${index}`}
//       aria-labelledby={`simple-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box sx={{ p: 3 }}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Tabs: FC = () => {
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
              label="Bài viết"
              {...a11yProps(0)}
              onClick={() => {
                navigate("");
              }}
            />
            <Tab
              label="Người theo dõi"
              {...a11yProps(1)}
              onClick={() => {
                navigate("follower");
              }}
            />
            <Tab
              label="Ảnh"
              {...a11yProps(2)}
              onClick={() => {
                navigate("images");
              }}
            />
          </DefaultTabs>
        </Box>
      </Box>
    </>
  );
};

export default Tabs;
