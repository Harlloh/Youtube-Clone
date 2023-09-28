import { Box, Stack, ThemeProvider, Typography } from "@mui/material";
import React from "react";
import SideBar from "./SideBar";
import Videos from "./Videos";
import { useState } from "react";
import { fetchFromAPI } from "../utilis/fetchFromAPI";
import { useEffect } from "react";

export default function Feed({ selectedTheme }) {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) =>
      setVideos(data.items)
    );
  }, [selectedCategory]);

  return (
    <Stack
      p={2}
      sx={{
        mt: 2,
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
      }}
    >
      <Box
        height={{ xs: "auto", md: "auto" }}
        sx={{ borderRight: "1px solid gray" }}
      >
        <SideBar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Typography
          variant="subtitle2"
          className="copyright"
          sx={{ color: "white", mt: 2 }}
        >
          <i>Copyright Youtube Clone 2023</i>
        </Typography>
      </Box>
      <Box mb={20} sx={{ flex: 2, overflowY: "auto", height: "90vh" }} p={2}>
        {/* //some spacings */}

        <Typography variant="h4" fontWeight="bold" color="white">
          {selectedCategory}
          <span style={{ color: "red" }}> Videos</span>
        </Typography>

        <Videos videos={videos} />
      </Box>
    </Stack>
  );
}
