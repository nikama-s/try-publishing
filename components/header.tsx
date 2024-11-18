import { AppBar, Typography } from "@mui/material";

export default function Header() {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "var(--foreground)",
      }}
    >
      <Typography
        variant="h4"
        component="div"
        sx={{
          color: "var(--background)",
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
