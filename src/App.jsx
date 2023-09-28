import React, { useState } from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { CssBaseline, Switch, ThemeProvider, createTheme } from "@mui/material";
import Layout from "./LAYOUT/RootLayout";
import Feed from "./PAGES/Feed";
import VideoDetail from "./PAGES/VideoDetail";
import ChannelDetail from "./PAGES/ChannelDetail";
import SearchFeed from "./PAGES/SearchFeed";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Layout />}>
          <Route index exact element={<Feed />} />
          <Route path="video/:id" exact element={<VideoDetail />} />
          <Route path="channel/:id" exact element={<ChannelDetail />} />
          <Route path="search/:searchTerm" exact element={<SearchFeed />} />
        </Route>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
