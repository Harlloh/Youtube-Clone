import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import { demoProfilePicture } from "../utilis/constants";
import { Link } from "react-router-dom";
import { CheckCircle } from "@mui/icons-material";

export default function ChannelCard({ channelDetail, marginTop }) {
  if (!channelDetail && "Loading...");
  return (
    <div>
      <Box>
        <Link
          to={channelDetail.id ? `/channel/${channelDetail.id.channelId}` : ""}
        >
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              marginTop,
            }}
          >
            <CardMedia
              sx={{
                border: "1px solid white",
                borderRadius: "50%",
                height: "180px",
                width: "180px",
                mb: 2,
              }}
              img={
                channelDetail?.snippet?.thumbnails?.high?.url ||
                demoProfilePicture
              }
              alt={channelDetail.snippet.channelTitle}
            />

            <Typography
              variant="subtitle3"
              sx={{ fontSize: "15px", color: "gray", ml: "5px" }}
            >
              {channelDetail.snippet.channelTitle}
              <CheckCircle
                sx={{ fontSize: "14px", color: "gray", ml: "5px" }}
              />
            </Typography>
            {channelDetail?.statistics?.subscriberCount && (
              <Typography
                sx={{ fontSize: "15px", fontWeight: 500, color: "gray" }}
              >
                {parseInt(
                  channelDetail?.statistics?.subscriberCount
                ).toLocaleString("en-US")}{" "}
                Subscribers
              </Typography>
            )}
          </CardContent>
        </Link>
      </Box>
    </div>
  );
}
