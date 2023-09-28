import { Box, CircularProgress, Stack, Typography } from "@mui/material";
import React from "react";
import VideoCard from "./VideoCard";
import ChannelCard from "./ChannelCard";

export default function Videos({ videos, selectedTheme }) {
  if (!videos) return <CircularProgress />;
  return (
    <Stack
      direction={{ xs: "column", sm: "row", md: "row" }}
      flexWrap="wrap"
      justifyContent="start"
      gap={2}
    >
      {videos.map((video, index) => {
        return (
          <Box key={index}>
            {video.id.videoId && <VideoCard video={video} />}
            {video.id.channelId && <ChannelCard channelDetail={video} />}
          </Box>
        );
      })}
    </Stack>
  );
}
