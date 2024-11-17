import { Box, Typography } from "@mui/material";
export default function Error() {
  return (
    <Box sx={{ textAlign: "center", marginTop: "50px" }}>
      <Typography sx={{ fontSize: "2rem", color: "error.main" }}>
        Error loading products
      </Typography>
    </Box>
  );
}
