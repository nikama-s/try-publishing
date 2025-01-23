import { AppBar, Typography } from "@mui/material";
import { headerContainer, title } from "./header.styles";

export default function Header() {
  return (
    <AppBar position="static" sx={headerContainer}>
      <Typography variant="h4" component="div" sx={title}>
        Product Viewer
      </Typography>
    </AppBar>
  );
}
