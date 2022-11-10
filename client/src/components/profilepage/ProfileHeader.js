import * as React from "react";
import { AppBar, Toolbar, Typography, Grid } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import SettingsIcon from "@mui/icons-material/Settings";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { theme } from "../ThemeColor";

const ProfileHeader = ({ username }) => {
  return (
    <AppBar position="static">
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          background: "white",
        }}
      >
        <IconButton
          size="large"
          // edge="start"
          color="black"
          aria-label="menu"
        >
          <SettingsIcon fontSize="large" />
        </IconButton>
        <Typography
          variant="h6"
          component="div"
          sx={{ color: theme.palette.black.main }}
        >
          {username}
        </Typography>
        <IconButton
          size="large"
          // edge="start"
          color="black"
          aria-label="menu"
        >
          <PersonAddIcon fontSize="large" />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default ProfileHeader;
