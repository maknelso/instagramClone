import * as React from "react";
import { Typography, Grid, Button } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import SettingsIcon from "@mui/icons-material/Settings";

const ProfileInfo = ({ username, name }) => {
  return (
    <Grid container item display="flex" p="3rem">
      <Grid item xs={3} display="flex" flexDirection="column" gap={2}>
        <Grid>
          <img
            src="https://via.placeholder.com/77"
            style={{ borderRadius: "50%" }}
          ></img>
        </Grid>
        <Typography variant="h6">{name}</Typography>
      </Grid>
      <Grid item xs={9} display="flex" flexDirection="column">
        <Grid display="flex" alignItems="center">
          <Typography variant="h4">{username}</Typography>
          <IconButton
            size="large"
            // edge="start"
            color="black"
            aria-label="menu"
          >
            <SettingsIcon fontSize="large" />
          </IconButton>
        </Grid>
        <Button variant="outlined" fullWidth color="secondary">
          Edit Profile
        </Button>
      </Grid>
    </Grid>
  );
};

export default ProfileInfo;
