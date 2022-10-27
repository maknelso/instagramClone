import { Grid, Typography } from "@mui/material";
import React from "react";
import alex from "../../assets/images/dashboard/alex-suprun-ZHvM3XIOHoE-unsplash.jpg";
import jake from "../../assets/images/dashboard/jake-nackos-IF9TK5Uy-KI-unsplash.jpg";
import julian from "../../assets/images/dashboard/julian-wan-WNoLnJo7tS8-unsplash.jpg";

const DashFollowing = () => {
  return (
    <Grid
      display="flex"
      gap={2}
      sx={{
        p: "1rem",
        border: "1px solid lightgrey",
        mb: "1.2rem",
        background: "white",
      }}
    >
      <Grid display="flex" flexDirection="column" alignItems="center">
        <Grid
          sx={{
            width: "70px",
            height: "70px",
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
        <Typography>Julian</Typography>
      </Grid>
      <Grid display="flex" flexDirection="column" alignItems="center">
        <Grid
          sx={{
            width: "70px",
            height: "70px",
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
        <Typography>Jake</Typography>
      </Grid>
      <Grid display="flex" flexDirection="column" alignItems="center">
        <Grid
          sx={{
            width: "70px",
            height: "70px",
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
        <Typography>Alex</Typography>
      </Grid>
    </Grid>
  );
};

export default DashFollowing;
