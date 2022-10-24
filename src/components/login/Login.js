import { useState, useContext } from "react";
import { UserContext } from "../Controller";
import { Paper, Button, TextField, Box, Typography } from "@mui/material";

export default function Login() {
  const user = useContext(UserContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleUsername(event) {
    setUsername(event.target.value);
  }

  function handlePassword(event) {
    setPassword(event.target.value);
  }

  async function login(event) {
    try {
      event.preventDefault();
      const data = { username, password };
      const rawResponse = await fetch("http://localhost:5000/login", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const response = await rawResponse.json();
      localStorage.setItem("user", username);
      localStorage.setItem("token", response.token);
      user.setUser(username);
    } catch (error) {
      throw error;
    }
  }
  if (!user.user) {
    return (
      <Paper
        sx={{ width: "30%", padding: "25px", margin: "100px auto 0 auto" }}
      >
        <Box
          component="form"
          onSubmit={login}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "25px",
          }}
        >
          <TextField onChange={handleUsername} label="username"></TextField>
          <TextField
            onChange={handlePassword}
            label="password"
            type="password"
          ></TextField>
          <Button type="submit" variant="contained">
            Login
          </Button>
        </Box>
      </Paper>
    );
  } else {
    return (
      <Paper
        sx={{
          width: "30%",
          padding: "25px",
          margin: "100px auto 0 auto",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
          }}
        >
          <Typography
            variant="h1"
            sx={{ fontSize: "60px", textAlign: "center" }}
          >
            Lost are we?
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontSize: "18px", textAlign: "center" }}
          >
            Hi {user.user}, you are already logged in.{" "}
          </Typography>
          <Button onClick={user.logout}>logout</Button>
        </Box>
      </Paper>
    );
  }
}
