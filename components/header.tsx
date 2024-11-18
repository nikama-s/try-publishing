import { AppBar, Typography } from "@mui/material";

export default function Header() {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#443b38",
      }}
    >
      <Typography
        variant="h4"
        component="div"
        sx={{
          color: "#ecd9d0",
          flexGrow: 1,
          textAlign: "center",
          fontWeight: "bold",
          padding: "10px",
        }}
      >
        Product Viewer
      </Typography>
    </AppBar>
  );
}
