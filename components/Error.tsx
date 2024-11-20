import { Box, Typography } from "@mui/material";
import { ReactNode } from "react";

export default function Error({ children }: { children: ReactNode }) {
  return (
    <Box sx={{ textAlign: "center", marginTop: "50px" }}>
      <Typography sx={{ fontSize: "2rem", fontStyle: "italic" }}>
        {children}
      </Typography>
    </Box>
  );
}
