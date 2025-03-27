"use client";

import { Button, Grid, Paper, TextField, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { FunctionComponent, SyntheticEvent, useState } from "react";
import SectionCard from "./SectionCard";

interface CommentsDashboardProps {}

const CommentsDashboard: FunctionComponent<CommentsDashboardProps> = () => {
  const [cards, setCards] = useState<Record<string, true>>({});
  const [videoId, setVideoId] = useState("");

  const handleAdd = (e: SyntheticEvent) => {
    if (!videoId) {
      return;
    }
    if (cards[videoId]!!) {
      return;
    }
    setCards({ ...cards, [videoId]: true });
  };
  const handleRemove = (videoId: string) => {
    const cardsState = { ...cards };
    delete cardsState[videoId];
    setCards(cardsState);
  };

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
          label="Add YouTube ID"
          variant="outlined"
          size="small"
          color="secondary"
          sx={{ flexBasis: "50%" }}
          onChange={(e) => setVideoId(e.target.value)}
        />
        <Button
          size="small"
          variant="contained"
          color="secondary"
          sx={{ color: "white" }}
          onClick={handleAdd}
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
        <Grid container spacing={2} sx={{ marginTop: 2, width: "100%" }}>
          {Object.keys(cards).map((videoId) => (
            <Grid key={videoId} size={{ xs: 12, md: 6 }}>
              <SectionCard videoId={videoId} closeCallback={handleRemove} />
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Box>
  );
};

export default CommentsDashboard;
