import { ICommentThreadResource } from "@/app/lib/interfaces/IVideoComments";
import { Box, Button, Typography } from "@mui/material";
import { FunctionComponent, useState } from "react";
import Image from "next/image";
import { getHoursAgo } from "../../utils";

interface CommentListItemProps {
  item: ICommentThreadResource;
}

const CommentListItem: FunctionComponent<CommentListItemProps> = ({ item }) => {
  const {
    snippet: {
      topLevelComment: {
        snippet: {
          textOriginal,
          authorDisplayName,
          authorProfileImageUrl,
          updatedAt,
        },
      },
      totalReplyCount,
    },
  } = item;

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const truncatedText =
    textOriginal.length > 100
      ? textOriginal.substring(0, 100) + "..."
      : textOriginal;

  return (
    <Box sx={{ display: "flex" }}>
      <Box
        sx={{
          width: 40,
          height: 40,
          borderRadius: "50%",
          overflow: "hidden",
          mr: 2,
          flexShrink: 0,
        }}
      >
        <Image
          src={authorProfileImageUrl}
          alt={`${authorDisplayName}'s profile`}
          width={40}
          height={40}
        />
      </Box>

      <Box sx={{ flex: 1, width: "100%", gap: 1 }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography variant="subtitle2" fontWeight="bold" mr={1}>
            {authorDisplayName}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {getHoursAgo(updatedAt)}
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="body2"
            component="pre"
            sx={{ whiteSpace: "pre-wrap" }}
          >
            {textOriginal.length < 100 ? (
              textOriginal
            ) : (
              <>
                {isExpanded ? textOriginal : truncatedText}
                {
                  <Button
                    onClick={toggleExpand}
                    size="small"
                    variant="text"
                    sx={{ color: "text.secondary" }}
                  >
                    {isExpanded ? "Read Less" : "Read More"}
                  </Button>
                }
              </>
            )}
          </Typography>
        </Box>
        <Typography variant="subtitle2" color="info">
          {totalReplyCount} replies
        </Typography>
      </Box>
    </Box>
  );
};

export default CommentListItem;
