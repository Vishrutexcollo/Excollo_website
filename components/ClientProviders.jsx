"use client";

import React from "react";
import { Box } from "@mui/material";

export default function ClientProviders({ children }) {
  return (
    <Box sx={{ backgroundColor: "#000", color: "#fff" }}>
      {children}
    </Box>
  );
}
