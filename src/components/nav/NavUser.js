import { AppBar, Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { UserContext } from "../Controller";
import { useContext } from "react";

export default function NavUser() {
  const user = useContext(UserContext);

  return (
    <Box>
      <AppBar
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px 0 10px 0",
        }}
      >
        <Link to="/">
          <Typography
            variant="h2"
            sx={{ marginLeft: "20px", fontSize: "25px", textAlign: "center" }}
          >
            Hieu Nguyen
          </Typography>
        </Link>
        <Box sx={{ display: "flex", gap: "20px" }}>
          <Link to="/addpost">
            <Button color="inherit">add post</Button>
          </Link>
          <Button
            color="inherit"
            sx={{ marginRight: "20px" }}
            onClick={user.logout}
          >
            logout
          </Button>
        </Box>
      </AppBar>
    </Box>
  );
}
