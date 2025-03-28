import { Box, IconButton, Skeleton, Tooltip, Typography } from "@mui/material";
import { FunctionComponent, useEffect, useState } from "react";
import CommentListItem from "./commentListItem";
import { IVideoCommentsDocument } from "@/app/lib/interfaces/IVideoComments";
import CloseIcon from "@mui/icons-material/Close";
import StorageIcon from "@mui/icons-material/Storage";

interface SectionCardProps {
  videoId: string;
  closeCallback: (videoId: string) => void;
}

export const dynamicParams = true;

const SectionCard: FunctionComponent<SectionCardProps> = ({
  videoId,
  closeCallback,
}) => {
  const [videoComments, setVideoComments] =
    useState<IVideoCommentsDocument | null>(null);

  useEffect(() => {
    async function fetchPosts() {
      const res = await fetch(
        `http://localhost:3000/api/videoComments/${videoId}`
      );
      const data = await res.json();
      setVideoComments(data);
    }
    fetchPosts();
  }, []);

  if (!videoComments) {
    return <Skeleton variant="rounded" width={"100%"} height={"100%"} />;
  }

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
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        sx={{ p: 2, borderBottom: "1px solid #e0e0e0" }}
      >
        <Box display={"flex"} gap={2}>
          <Box>{videoComments.videoId}</Box>
          {videoComments.isFromDb && (
            <Tooltip
              title={"Comments are fetched from database"}
              placement="top"
            >
              <StorageIcon color="error" />
            </Tooltip>
          )}
        </Box>
        <IconButton size="small" onClick={() => closeCallback(videoId)}>
          <CloseIcon />
        </IconButton>
      </Box>

      <Box display={"flex"} flexDirection={"column"} sx={{ p: 2, gap: 1 }}>
        {videoComments.commentThread.items.map((item) => (
          <CommentListItem item={item} key={item.id} />
        ))}
      </Box>
    </Box>
  );
};

export default SectionCard;
