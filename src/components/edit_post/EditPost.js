import {
  TextField,
  Button,
  Box,
  Paper,
  Typography,
  CircularProgress,
} from "@mui/material";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function EditPost() {
  const token = localStorage.getItem("token");
  const params = useParams();
  const initialUrl = params.url;

  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(true);

  function handleTitle(event) {
    setTitle(event.target.value);
  }

  function handleContent(event) {
    setContent(event.target.value);
  }

  function handleUrl(event) {
    setUrl(event.target.value);
  }

  async function getPost() {
    try {
      const rawResponse = await fetch(
        `http://localhost:5000/post/${initialUrl}`,
        {
          method: "GET",
          mode: "cors",
        }
      );
      const response = await rawResponse.json();
      const post = response.post;
      setLoading(false);
      setTitle(post.title);
      setContent(post.content);
      setUrl(post.url);
    } catch (err) {
      throw err;
    }
  }

  useEffect(() => {
    getPost();
  }, [loading]);

  async function save() {
    try {
      const data = { title, url, content, publish: false };
      await fetch("http://localhost:5000/post", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      });
      navigate("/");
    } catch (err) {
      throw err;
    }
  }

  async function publish() {
    try {
      const data = { title, url, content, publish: true };
      await fetch("http://localhost:5000/post", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      });
      navigate("/");
    } catch (err) {
      throw err;
    }
  }

  if (loading) {
    return (
      <Box>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Paper
      sx={{
        width: "75%",
        padding: "35px",
        margin: "100px auto 0 auto",
      }}
    >
      <Box
        component="form"
        sx={{ display: "flex", flexDirection: "column", gap: "20px" }}
      >
        <Typography variant="h1" sx={{ fontSize: 30 }}>
          Edit Post
        </Typography>
        <Box sx={{ display: "flex", gap: "2%" }}>
          <TextField
            label="Title"
            variant="outlined"
            onChange={handleTitle}
            sx={{ width: "60%" }}
            defaultValue={title}
          ></TextField>
          <TextField
            label="URL"
            variant="outlined"
            onChange={handleUrl}
            sx={{ width: "38%" }}
            defaultValue={url}
          ></TextField>
        </Box>
        <TextField
          label="Content"
          multiline
          rows="17"
          onChange={handleContent}
          defaultValue={content}
        ></TextField>
        <Box sx={{ display: "flex", gap: "20px" }}>
          <Button type="button" onClick={publish}>
            Publish
          </Button>
          <Button type="button" onClick={save}>
            Save
          </Button>
        </Box>
      </Box>
    </Paper>
  );
}
