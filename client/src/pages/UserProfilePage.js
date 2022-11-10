import { Grid } from "@mui/material";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SettingsIcon from "@mui/icons-material/Settings";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { theme } from "../components/ThemeColor";
import ProfileHeader from "../components/profilepage/ProfileHeader";
import ProfileInfo from "../components/profilepage/ProfileInfo";
import ProfilePosts from "../components/profilepage/ProfilePosts";

const UserProfilePage = () => {
  return (
    <Grid sx={{ height: "100vh" }}>
      <ProfileHeader />
      <ProfileInfo />
      <ProfilePosts />
    </Grid>
  );
};

export default UserProfilePage;
