import { Box, Typography } from "@mui/material";
import { ReactNode } from "react";
import { container, text } from "./Error.styles";

export default async function Error({ children }: { children: ReactNode }) {
  return (
    <Box sx={container}>
      <Typography sx={text}>{children}</Typography>
    </Box>
  );
}
