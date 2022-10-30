import { Grid, Typography } from "@mui/material";
import React from "react";
import alex from "../../assets/images/dashboard/alex-suprun-ZHvM3XIOHoE-unsplash.jpg";
import jake from "../../assets/images/dashboard/jake-nackos-IF9TK5Uy-KI-unsplash.jpg";
import julian from "../../assets/images/dashboard/julian-wan-WNoLnJo7tS8-unsplash.jpg";
import { styled } from "@mui/material/styles";

const DashFollowContainer = styled(Grid)(({ theme }) => ({
  display: "flex",
  gap: "1rem",
  padding: "0.6rem",
  border: "1px solid lightgrey",
  background: "white",
  marginBottom: "1rem",
  // paddingTop: "1rem"

  [theme.breakpoints.up("md")]: {
    margin: "0",
    marginBottom: "1rem",
  },
}));

const DashFollowing = () => {
  return (
    <DashFollowContainer>
      <Grid display="flex" flexDirection="column" alignItems="center">
        <Grid
          sx={{
            width: "50px",
            height: "50px",
            border: "3px solid pink",
            borderRadius: "50%",
          }}
        >
          <img
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "50%",
            }}
            src={jake}
          ></img>
        </Grid>
        <Typography fontSize="12px">Julian</Typography>
      </Grid>
      <Grid display="flex" flexDirection="column" alignItems="center">
        <Grid
          sx={{
            width: "50px",
            height: "50px",
            border: "3px solid pink",
            borderRadius: "50%",
          }}
        >
          <img
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "50%",
            }}
            src={julian}
          ></img>
        </Grid>
        <Typography fontSize="12px">Jake</Typography>
      </Grid>
      <Grid display="flex" flexDirection="column" alignItems="center">
        <Grid
          sx={{
            width: "50px",
            height: "50px",
            border: "3px solid pink",
            borderRadius: "50%",
          }}
        >
          <img
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "50%",
            }}
            src={alex}
          ></img>
        </Grid>
        <Typography fontSize="12px">Alex</Typography>
      </Grid>
    </DashFollowContainer>
  );
};

export default DashFollowing;
