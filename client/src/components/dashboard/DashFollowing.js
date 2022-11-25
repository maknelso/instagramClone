import { Grid, Typography } from "@mui/material";
import React from "react";
import alex from "../../assets/images/dashboard/alex-suprun-ZHvM3XIOHoE-unsplash.jpg";
import jake from "../../assets/images/dashboard/jake-nackos-IF9TK5Uy-KI-unsplash.jpg";
import { styled } from "@mui/material/styles";

const DashFollowContainer = styled(Grid)(({ theme }) => ({
  display: "flex",
  gap: "1rem",
  padding: "0.6rem",
  border: "1px solid lightgrey",
  background: "white",
  marginBottom: "1rem",
  marginTop: "1rem",
  borderRadius: "4px",

  [theme.breakpoints.up("sm")]: {
    marginTop: 0,
  },

  [theme.breakpoints.up("md")]: {
    margin: "0",
    marginBottom: "1rem",
  },
}));

const DashFollowing = ({ userFollowingPosts }) => {
  return (
    <DashFollowContainer>
      {userFollowingPosts.map((user, index) => {
        return (
          <Grid
            display="flex"
            flexDirection="column"
            alignItems="center"
            key={index}
          >
            <Grid
              sx={{
                width: "50px",
                height: "50px",
                padding: "0.2rem",
                border: "double 2px transparent",
                backgroundImage:
                  "linear-gradient(white, white), radial-gradient(circle at top left, #f00,#F4D35E)",

                backgroundOrigin: "border-box",
                backgroundClip: "padding-box, border-box",
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
                src={user.avatar}
              ></img>
            </Grid>
            <Typography fontSize="12px">{user.username}</Typography>
          </Grid>
        );
      })}
    </DashFollowContainer>
  );
};

export default DashFollowing;
