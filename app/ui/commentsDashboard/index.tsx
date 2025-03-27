import { Button, Paper, TextField, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { FunctionComponent } from "react";

interface CommentsDashboardProps {}

const CommentsDashboard: FunctionComponent<CommentsDashboardProps> = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
        padding: 4,
        gap: 2,
      }}
    >
      <Box>
        <Typography variant="h4" gutterBottom>
          Youtube Comments Dashboard
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          Add as many youtube videos and monitor their latest 20 comments
        </Typography>
      </Box>
      <Box display={"flex"} gap={1}>
        <TextField
          label="Add YouTube link"
          variant="outlined"
          size="small"
          color="secondary"
          sx={{ flexBasis: "50%" }}
        />
        <Button
          size="small"
          variant="contained"
          color="secondary"
          sx={{ color: "white" }}
        >
          Add
        </Button>
      </Box>
      <Paper
        elevation={0}
        sx={{
          background: "#F5F5F5",
          display: "flex",
          flexGrow: 1,
          padding: 2,
        }}
      ></Paper>
    </Box>
  );
};

export default CommentsDashboard;
