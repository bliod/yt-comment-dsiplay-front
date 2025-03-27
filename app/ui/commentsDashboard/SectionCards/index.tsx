import { Badge, Box, IconButton, Typography } from "@mui/material";
import { FunctionComponent, useEffect, useState } from "react";
import CommentListItem from "./commentListItem";
import { IVideoCommentsDocument } from "@/app/lib/interfaces/IVideoComments";
import CloseIcon from "@mui/icons-material/Close";

interface SectionCardsProps {
  videoId: string;
  closeCallback: (videoId: string) => void;
}

export const dynamicParams = true;

const SectionCards: FunctionComponent<SectionCardsProps> = ({
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
    return <Typography>No results</Typography>;
  }

  console.log(videoComments, "videoComments");
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
        <Box>{videoComments.videoId}</Box>
        <IconButton size="small" onClick={() => closeCallback(videoId)}>
          <CloseIcon />
        </IconButton>
      </Box>

      <Box sx={{ p: 3 }}>
        {videoComments.comments.items.map((item) => (
          <CommentListItem />
        ))}
      </Box>
    </Box>
  );
};

export default SectionCards;
