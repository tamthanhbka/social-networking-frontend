import { useState, useEffect } from "react";
import { Box, Button, TextField, Typography, styled } from "@mui/material";
import { Link as RLink } from "react-router-dom";
const CssTextField = styled(TextField)({
  "& label, & label.Mui-focused": {
    color: "black",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "black",
  },
  "& .MuiInput-underline": {
    borderBottomColor: "black",
  },
  "& .MuiInput-input": { color: "black" },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "red",
    },
    "&:hover fieldset": {
      borderColor: "red",
    },
    "&.Mui-focused fieldset": {
      borderColor: "green",
    },
  },
});
export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  return (
    <div className="register-form" style={{ backgroundColor: "white" }}>
      <Typography
        variant="h2"
        sx={{ flex: 2, color: "#1877F2" }}
        align="center"
        fontWeight={900}
      >
        Register
      </Typography>
      <Box
        display="block"
        sx={{ flex: 2, display: "flex", flexDirection: "column" }}
      >
        <CssTextField
          label="Email"
          variant="standard"
          type="email"
          className="text-field"
          fullWidth
          required
        />
        <CssTextField
          label="Phone Number"
          variant="standard"
          className="text-field"
          fullWidth
          required
        />
        <CssTextField
          label="Password"
          variant="standard"
          type="password"
          className="text-field"
          fullWidth
          required
        />
        <CssTextField
          label="Confirm Password"
          variant="standard"
          type="password"
          className="text-field"
          fullWidth
          required
        />
      </Box>
      <Box sx={{ m: 2, flex: 1 }}>
        <Button
          variant="contained"
          size="large"
          fullWidth
          sx={{
            backgroundColor: "#4b9bfc",
            backdropFilter: "blur(20px)",
            ":hover": {
              transition: "all 0.3s ease",
              backgroundColor: "#0068e8",
            },
          }}
        >
          Register
        </Button>
      </Box>
      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "start",
          flexDirection: "column",
        }}
      >
        <Typography sx={{ color: "black" }} variant="subtitle1" align="center">
          Have an account?{" "}
          <RLink style={{ color: "black" }} to="/login">
            Login
          </RLink>
        </Typography>
      </Box>
    </div>
  );
}
