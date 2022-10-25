import { Paper, Typography, Box } from "@mui/material";

export default function Comment(props) {
  const { comment } = props;
  if (comment.comments.length) {
  }
  return (
    <Box>
      <Paper>
        <Typography>{comment.user}</Typography>
        <Typography>{comment.content}</Typography>
      </Paper>
    </Box>
  );
}
