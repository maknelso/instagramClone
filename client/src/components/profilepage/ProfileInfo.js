import * as React from "react";
import { Typography, Grid, Button } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import SettingsIcon from "@mui/icons-material/Settings";
import { styled } from "@mui/material/styles";

const ProfileInfoImgWrapper = styled(Grid)(({ theme }) => ({
  maxWidth: "77px",
  [theme.breakpoints.up("sm")]: {
    maxWidth: "150px",
  },
}));

const ProfileMobileName = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const ProfileInfoRight = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.up("sm")]: {
    display: "flex",
    flexDirection: "column",
    gap: "1.6rem",
  },
}));

const ProfileInfoRightFirst = styled(Grid)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  [theme.breakpoints.up("sm")]: {
    flexDirection: "row",
    alignItems: "center",
    maxWidth: "300px",
    justifyContent: "space-between",
  },
}));

const ProfileInfoRightSecond = styled(Grid)(({ theme }) => ({
  display: "none",

  [theme.breakpoints.up("sm")]: {
    display: "flex",
    justifyContent: "space-between",
    width: "300px",
  },
}));

const ProfileInfoRightThird = styled(Grid)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.up("sm")]: {
    display: "block",
  },
}));

const ProfileInfoBtn = styled(Button)(({ theme }) => ({
  maxWidth: "250px",
  maxHeight: "30px",
  [theme.breakpoints.up("sm")]: {
    maxWidth: "110px",
    padding: "0.3rem 0",
  },
}));

const ProfileInfo = ({ username, name }) => {
  return (
    <Grid
      container
      item
      display="flex"
      p="3rem"
      sx={{ borderBottom: "1px solid lightgrey" }}
    >
      <Grid item xs={3} sm={4} display="flex" flexDirection="column" gap={2}>
        <ProfileInfoImgWrapper>
          <img
            src="https://via.placeholder.com/77"
            style={{ borderRadius: "50%", width: "100%" }}
          ></img>
        </ProfileInfoImgWrapper>
        <ProfileMobileName variant="h6">{name}</ProfileMobileName>
      </Grid>
      <ProfileInfoRight item xs={9} sm={8}>
        <ProfileInfoRightFirst>
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
          <ProfileInfoBtn variant="outlined" fullWidth color="secondary">
            Edit Profile
          </ProfileInfoBtn>
        </ProfileInfoRightFirst>
        <ProfileInfoRightSecond>
          <Grid display="flex" alignItems="center" gap={0.6}>
            <Typography sx={{ fontSize: "1.6rem" }}>1</Typography>
            <Typography sx={{ fontSize: "1.4rem" }}>post</Typography>
          </Grid>
          <Grid display="flex" alignItems="center" gap={0.6}>
            <Typography sx={{ fontSize: "1.6rem" }}>0</Typography>
            <Typography sx={{ fontSize: "1.4rem" }}>followers</Typography>
          </Grid>
          <Grid display="flex" alignItems="center" gap={0.6}>
            <Typography sx={{ fontSize: "1.6rem" }}>4</Typography>
            <Typography sx={{ fontSize: "1.4rem" }}>follwing</Typography>
          </Grid>
        </ProfileInfoRightSecond>
        <ProfileInfoRightThird>
          <Typography variant="h6">{name}</Typography>
        </ProfileInfoRightThird>
      </ProfileInfoRight>
    </Grid>
  );
};

export default ProfileInfo;
