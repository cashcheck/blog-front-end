import { useState, useEffect } from "react";
import { Paper, Box, Typography, TextField, Button } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import { parseISO, format } from "date-fns";

export default function Post() {
  const params = useParams();
  const url = params.url;
  const navigate = useNavigate();
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

  function edit() {
    navigate(`/post/${url}/edit`);
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
            width: "45%",
            padding: "30px",
            gap: "20px",
            margin: "auto",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h1" sx={{ fontSize: "35px" }}>
              {post.title}
            </Typography>
            <Button onClick={edit}>
              <EditIcon />
            </Button>
          </Box>
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
            width: "45%",
            padding: "30px",
            gap: "20px",
            margin: "40px auto 0 auto",
          }}
        >
          <Typography variant="body2" sx={{ fontSize: "20px" }}>
            Comments ({post.comments.length})
          </Typography>
          <Box component="form">
            <TextField
              variant="outlined"
              multiline
              label="comment"
              rows="4"
              sx={{ width: "100%", fontSize: "5px" }}
            ></TextField>
            <Button type="submit" sx={{ marginTop: "15px" }}>
              Submit
            </Button>
          </Box>
        </Paper>
      </Box>
    );
  }
}
