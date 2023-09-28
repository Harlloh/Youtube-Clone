import { Outlet } from "react-router-dom";
import Navbar from "../PAGES/Navbar";
import { Box } from "@mui/material";

export default function Layout() {
  return (
    <Box sx={{ background: "black", color: "white" }}>
      <Navbar />
      <Outlet />
    </Box>
  );
}
