"use client";

import type React from "react";
import { Box, Typography, Button, Paper } from "@mui/material";
import InboxIcon from "@mui/icons-material/Inbox";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

interface EmptyStateProps {
  title?: string;
  description?: string;
  icon?: React.ReactNode;
  actionLabel?: string;
  onAction?: () => void;
  compact?: boolean;
}

export default function EmptyState({
  title = "No data available",
  description = "Please Add Youtube ID",
  icon = <InboxIcon sx={{ fontSize: 64, color: "text.disabled" }} />,
  actionLabel,
  onAction,
  compact = false,
}: EmptyStateProps) {
  return (
    <Paper
      elevation={0}
      sx={{
        p: compact ? 3 : 6,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "background.default",
        border: "1px dashed",
        borderColor: "divider",
        borderRadius: 2,
        height: compact ? "auto" : "100%",
        minHeight: compact ? "auto" : 200,
        width: "100%",
      }}
    >
      <Box sx={{ mb: 2 }}>{icon}</Box>
      <Typography
        variant={compact ? "h6" : "h5"}
        component="h3"
        align="center"
        gutterBottom
      >
        {title}
      </Typography>
      <Typography
        variant="body2"
        color="text.secondary"
        align="center"
        sx={{ mb: actionLabel ? 3 : 0, maxWidth: 400 }}
      >
        {description}
      </Typography>
      {actionLabel && onAction && (
        <Button
          variant="contained"
          startIcon={<AddCircleOutlineIcon />}
          onClick={onAction}
          sx={{
            mt: 2,
            bgcolor: "#0DC5B4",
            "&:hover": {
              bgcolor: "#0AB0A0",
            },
          }}
        >
          {actionLabel}
        </Button>
      )}
    </Paper>
  );
}
