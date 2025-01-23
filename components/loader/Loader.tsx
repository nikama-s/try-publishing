import { Box, Typography, CircularProgress } from "@mui/material";
import { loaderBox, progress, text } from "./Loader.styles";

export default function Loader() {
  return (
    <Box sx={loaderBox}>
      <CircularProgress sx={progress} />
      <Typography sx={text}>Loading products...</Typography>
    </Box>
  );
}
