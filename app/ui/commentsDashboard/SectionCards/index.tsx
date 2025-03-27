import { Box, Typography } from "@mui/material";
import { FunctionComponent } from "react";
import CommentListItem from "./commentListItem";

interface SectionCardsProps {}

const SectionCards: FunctionComponent<SectionCardsProps> = () => {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 800,
        height: "auto",
        bgcolor: "white",
        borderRadius: 2,
        boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
        overflow: "hidden",
      }}
    >
      <Box sx={{ p: 2, borderBottom: "1px solid #e0e0e0" }}>
        <Typography variant="subtitle1" fontWeight="bold">
          YouTube Comment Dashboard
        </Typography>
      </Box>

      <Box sx={{ p: 3 }}>
        <CommentListItem />

        <CommentListItem />

        <CommentListItem />
      </Box>
    </Box>
  );
};

export default SectionCards;
