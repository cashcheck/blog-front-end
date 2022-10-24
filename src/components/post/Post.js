import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Paper, Box, Typography } from "@mui/material";
import { parseISO, format } from "date-fns";

export default function Post() {
  const params = useParams();
  const url = params.url;
  const [post, setPost] = useState("");

  async function getPost() {
    try {
      const rawResponse = await fetch(`http://localhost:5000/post/${url}`, {
        method: "GET",
        mode: "cors",
      });
      const response = await rawResponse.json();
      setPost(response.post);
    } catch (err) {
      throw err;
    }
  }

  useEffect(() => {
    getPost();
  }, []);

  if (post) {
    return (
      <Box sx={{ marginTop: "100px", marginBottom: "100px" }}>
        <Paper
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "35%",
            padding: "30px",
            gap: "20px",
            margin: "auto",
          }}
        >
          <Typography variant="h1" sx={{ fontSize: "35px" }}>
            {post.title}
          </Typography>
          <Box sx={{ display: "flex", gap: "15px" }}>
            <Typography variant="body2">{post.user}</Typography>
            <Typography variant="body2">
              {format(parseISO(post.date), "MM/dd/yyyy")}
            </Typography>
          </Box>
          <Typography sx={{ whiteSpace: "pre-line" }}>
            {post.content}
          </Typography>
        </Paper>
        <Paper
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "35%",
            padding: "30px",
            gap: "20px",
            margin: "auto",
          }}
        ></Paper>
      </Box>
    );
  }
}
