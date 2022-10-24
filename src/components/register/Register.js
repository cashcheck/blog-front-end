import { useState } from "react";
import { Paper, Box, TextField, Button } from "@mui/material";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleUsername(event) {
    setUsername(event.target.value);
  }

  function handlePassword(event) {
    setPassword(event.target.value);
  }

  async function register(event) {
    event.preventDefault();
    const data = { username, password };
    const rawResponse = await fetch("http://localhost:5000/register", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const response = await rawResponse.json();
    console.log(response);
  }

  return (
    <Paper sx={{ width: "30%", padding: "25px", margin: "100px auto 0 auto" }}>
      <Box
        component="form"
        onSubmit={register}
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
          Register
        </Button>
      </Box>
    </Paper>
  );
}
