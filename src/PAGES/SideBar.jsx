import React from "react";
import { categories } from "../utilis/constants";
import { Stack, ThemeProvider } from "@mui/material";
import { useState } from "react";

export default function SideBar({ selectedCategory, setSelectedCategory }) {
  return (
    <Stack
      direction={{ xs: "row", md: "column" }}
      pr={1}
      sx={{ overflowY: "auto" }}
    >
      {categories.map((category, index) => {
        return (
          <button
            className="category-btn"
            color="white"
            key={index}
            style={{
              borderRadius: "20px",
              background: category.name === selectedCategory && "red",
              border: "none",
              color: "white",
            }}
            onClick={() => setSelectedCategory(category.name)}
          >
            <span>{category.icon.type.$$typeof}</span>
            <span
              style={{
                opacity: category.name === selectedCategory ? 1 : 0.8,
              }}
            >
              {category.name}
            </span>
          </button>
        );
      })}
    </Stack>
  );
}
