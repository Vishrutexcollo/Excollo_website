"use client";

import { Box, Container, Typography } from "@mui/material";

export default function SimpleFooter() {
    return (
        <Box
            component="footer"
            sx={{
                py: 4,
                mt: 8,
                borderTop: "1px solid rgba(255, 255, 255, 0.1)",
                background: "transparent",
            }}
        >
            <Container maxWidth="xl">
                <Typography
                    variant="body2"
                    sx={{
                        color: "rgba(255, 255, 255, 0.6)",
                        textAlign: "center",
                        fontFamily: '"Inter", sans-serif',
                    }}
                >
                    © {new Date().getFullYear()} SEO Feedback Tool. All rights reserved.
                </Typography>
            </Container>
        </Box>
    );
}
