import { Search } from "@mui/icons-material";
import { Box, IconButton, Paper } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
  const [searchTerm, setsearchTerm] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
      setsearchTerm("");
    }
  };
  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      sx={{
        borderRadius: "20px",
        width: "fit-content",
        pl: 2,
        alignItems: "center",
        display: "flex",
      }}
    >
      <Box>
        <input
          className="search-input"
          type="text"
          value={searchTerm}
          placeholder="search..."
          onChange={(e) => {
            setsearchTerm(e.target.value);
          }}
          style={{ border: "none" }}
        />
        <IconButton
          type="submit"
          sx={{ color: "red", borderLeft: "1px solid gray" }}
        >
          <Search color="#9f86ff" />
        </IconButton>
      </Box>
    </Paper>
  );
}
