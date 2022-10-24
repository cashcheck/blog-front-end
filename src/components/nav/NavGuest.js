import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export default function NavGuest() {
  return (
    <Box>
      <AppBar
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: 10,
          justifyContent: "flex-end",
          padding: "5px 0 5px 0",
        }}
      >
        <Link to="/login">
          <Button color="inherit">Login</Button>
        </Link>
        <Link to="/register">
          <Button color="inherit" sx={{ marginRight: "20px" }}>
            Register
          </Button>
        </Link>
      </AppBar>
    </Box>
  );
}
