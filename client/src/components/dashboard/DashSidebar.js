import { Grid, Typography } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
// import avatar from "../../assets/images/dashboard/avatar.jpg";
import { theme } from "../ThemeColor";

const DashSideContainer = styled(Grid)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.up("md")]: {
    display: "flex",
    flexDirection: "column",
  },
}));

const DashSidebar = ({ usersInfo }) => {
  console.log(usersInfo);
  return (
    <DashSideContainer>
      <Grid
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        sx={{ p: "0.2rem", width: "100%" }}
      >
        <Grid display="flex" gap={2}>
          <Grid
            sx={{
              width: "50px",
              height: "50px",
              borderRadius: "50%",
            }}
          >
            <img
              style={{
                width: "100%",
                objectFit: "cover",
                borderRadius: "50%",
              }}
              // src="https://instagramclone-2022.s3.us-west-1.amazonaws.com/avatars/Nelson.jpg"
              src={usersInfo.avatar}
            ></img>
          </Grid>
          <Grid display="flex" flexDirection="column">
            <Typography fontSize="12px" fontWeight="bold">
              {usersInfo.name}
            </Typography>
            <Typography fontSize="12px">{usersInfo.username}</Typography>
          </Grid>
        </Grid>
        <Typography fontWeight="bold" fontSize="12px" color="primary">
          Switch
        </Typography>
      </Grid>
      <Grid
        display="flex"
        justifyContent="space-between"
        sx={{ p: "0.6rem 0" }}
      >
        <Typography variant="body2" sx={{ color: theme.palette.grey.main }}>
          Suggestions For You
        </Typography>
        <Typography variant="body2">See All</Typography>
      </Grid>
      <Grid
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        sx={{ p: "1rem 0", width: "100%" }}
      >
        <Grid display="flex" gap={2}>
          <Grid
            sx={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
            }}
          >
            <img
              style={{
                width: "100%",
                objectFit: "cover",
                borderRadius: "50%",
              }}
              src="https://via.placeholder.com/40"
            ></img>
          </Grid>
          <Grid display="flex" flexDirection="column">
            <Typography variant="body2" fontWeight="bold">
              Cyrilhan
            </Typography>
            <Typography fontSize="12px">Followed by omar + 4 more</Typography>
          </Grid>
        </Grid>
        <Typography fontSize="12px" fontWeight="bold" color="primary">
          Follow
        </Typography>
      </Grid>
    </DashSideContainer>
  );
};

export default DashSidebar;
