"use client";

import { Box, Container, Typography } from "@mui/material";

export default function SimpleHeader() {
    return (
        <Box
            component="header"
            sx={{
                py: 3,
                borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                background: "transparent",
            }}
        >
            <Container maxWidth="xl">
                <Typography
                    variant="h5"
                    sx={{
                        fontWeight: 700,
                        color: "#fff",
                        fontFamily: '"Inter", sans-serif',
                    }}
                >
                    SEO Feedback Tool
                </Typography>
            </Container>
        </Box>
    );
}
