import { Box, Card, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { parseISO, format } from "date-fns";
import { Link } from "react-router-dom";

export default function Home() {
  const [posts, setPosts] = useState([]);

  async function getPosts() {
    try {
      const rawResponse = await fetch("http://localhost:5000/post", {
        method: "GET",
        mode: "cors",
      });
      const response = await rawResponse.json();
      setPosts(response.posts);
    } catch (err) {
      throw err;
    }
  }

  useEffect(() => {
    getPosts();
  }, []);
  const jsxPosts = posts.map((post) => {
    return (
      <Box key={post._id}>
        <Link to={`post/${post.url.toLowerCase()}`}>
          <Card
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "5px 10px 5px 10px",
            }}
          >
            <Typography variant="body1" sx={{ fontSize: "18px" }}>
              {post.title}
            </Typography>
            <Typography variant="body2">
              {format(parseISO(post.date), "MM/dd/yyyy")}
            </Typography>
          </Card>
        </Link>
      </Box>
    );
  });
  return (
    <Box
      sx={{
        margin: "100px auto 0 auto",
        width: "50%",
      }}
    >
      <Typography variant="h1" sx={{ fontSize: "30px", marginBottom: "20px" }}>
        Posts
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {jsxPosts}
      </Box>
    </Box>
  );
}
