import { Box, Typography, CircularProgress } from "@mui/material";

export default function Loader() {
  return (
    <Box sx={{ textAlign: "center", marginTop: "50px" }}>
      <CircularProgress sx={{ color: "black" }} />
      <Typography sx={{ marginTop: "20px", fontSize: "1.5rem" }}>
        Loading products...
      </Typography>
    </Box>
  );
}
