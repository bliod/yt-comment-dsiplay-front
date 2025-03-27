import { Button, Grid, Paper, TextField, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { FunctionComponent } from "react";
import SectionCards from "./SectionCards";

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
          display: "flex",
          flexGrow: 1,
        }}
      >
        <Grid container spacing={2} sx={{ marginTop: 2 }}>
          {[1, 1, 1, 1].map((_, index) => (
            <Grid key={index} size={{ xs: 12, md: 6 }}>
              <SectionCards />
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Box>
  );
};

export default CommentsDashboard;
