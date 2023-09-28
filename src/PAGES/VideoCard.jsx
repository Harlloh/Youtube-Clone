import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import {
  demoChannelTitle,
  demoChannelUrl,
  demoVideoTitle,
  demoVideoUrl,
} from "../utilis/constants";
import { CheckCircle } from "@mui/icons-material";

export default function VideoCard({ video }) {
  console.log(video.snippet.thumbnails);
  return (
    <div>
      <Card sx={{ width: { xs: "100%", sm: "358px", md: "320px" } }}>
        <Link
          to={video.id.videoId ? `/video/${video.id.videoId}` : demoVideoUrl}
        >
          <CardMedia
            image={video.snippet.thumbnails.high.url}
            alt={video.snippet.title}
            sx={{
              width: { xs: "100%", sm: "358px", md: "320px" },
              height: 180,
            }}
          />
        </Link>
        <CardContent sx={{ background: "#1e1e1e" }}>
          <Link>
            <Typography variant="subtitle1" fontWeight={"bold"} color="white">
              {video?.snippet?.title.slice(0, 60) ||
                demoVideoTitle.slice(0, 60)}
            </Typography>
          </Link>
          <Link
            to={
              video.snippet.channelId
                ? `/channel/${video.snippet.channelId}`
                : demoChannelUrl
            }
          >
            <Typography variant="subtitle2" fontWeight={"bold"} color="gray">
              {video?.snippet?.channelTitle || demoChannelTitle}
              <CheckCircle sx={{ fontSize: 12, color: "gray", ml: "5px" }} />
            </Typography>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
