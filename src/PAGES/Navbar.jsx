import { Box, Stack } from "@mui/material";
import { logo } from "../utilis/constants";
import { NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";

export default function Navbar() {
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        background: "inherit",
        position: "sticky",
        top: 0,
        justifyContent: "space-between",
      }}
    >
      <NavLink to="/" style={{ display: "flex", alignItems: "center" }}>
        <img src={logo} alt="logo" height={45} />
      </NavLink>
      <SearchBar />
    </Stack>
  );
}
