import { Box, Typography } from "@mui/material";
import { FunctionComponent } from "react";

interface CommentListItemProps {}

const CommentListItem: FunctionComponent<CommentListItemProps> = () => {
  return (
    <Box sx={{ display: "flex", mb: 3 }}>
      <Box
        sx={{
          width: 40,
          height: 40,
          borderRadius: "50%",
          bgcolor: "#e0e0e0",
          mr: 2,
          flexShrink: 0,
        }}
      />
      <Box sx={{ flex: 1 }}>
        <Box sx={{ display: "flex", alignItems: "center", mb: 0.5 }}>
          <Typography variant="subtitle2" fontWeight="bold" mr={1}>
            User123
          </Typography>
          <Typography variant="caption" color="text.secondary">
            2 hours ago
          </Typography>
        </Box>
        <Typography variant="body2">
          This is an amazing product! I've been using it for a month and it's
          changed how I manage my channel.
        </Typography>
      </Box>
    </Box>
  );
};

export default CommentListItem;
