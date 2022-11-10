import { Grid, IconButton, Typography } from "@mui/material";
import React from "react";
import CalendarViewMonthOutlinedIcon from "@mui/icons-material/CalendarViewMonthOutlined";
import TurnedInNotOutlinedIcon from "@mui/icons-material/TurnedInNotOutlined";
import AssignmentIndOutlinedIcon from "@mui/icons-material/AssignmentIndOutlined";

const ProfilePosts = () => {
  return (
    <Grid container item>
      <Grid
        container
        item
        display="flex"
        p="1.2rem"
        sx={{
          borderTop: "1px solid lightgrey",
          borderBottom: "1px solid lightgrey",
        }}
      >
        {row_1.map((item, index) => {
          return (
            <Grid
              item
              xs={4}
              display="flex"
              flexDirection="column"
              alignItems="center"
              key={index}
            >
              <Typography>{item.number}</Typography>
              <Typography>{item.title}</Typography>
            </Grid>
          );
        })}
      </Grid>
      <Grid container item display="flex" pt={0}>
        {row_2.map((item, index) => {
          return (
            <Grid
              item
              xs={4}
              display="flex"
              flexDirection="column"
              alignItems="center"
              key={index}
            >
              <IconButton>{item.icon}</IconButton>
            </Grid>
          );
        })}
      </Grid>
      <Grid container item display="flex">
        <Grid item xs={4} display="flex" justifyContent="space-around">
          <img src="https://via.placeholder.com/128"></img>
        </Grid>
        <Grid item xs={4} display="flex" justifyContent="space-around">
          <img src="https://via.placeholder.com/128"></img>
        </Grid>
        <Grid item xs={4} display="flex" justifyContent="space-around">
          <img src="https://via.placeholder.com/128"></img>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ProfilePosts;

const row_1 = [
  {
    id: 1,
    title: "post",
    number: 1,
  },
  {
    id: 2,
    title: "follower",
    number: 0,
  },
  {
    id: 3,
    title: "following",
    number: 4,
  },
];

const row_2 = [
  {
    id: 1,
    icon: <CalendarViewMonthOutlinedIcon fontSize="large" />,
  },
  {
    id: 2,
    icon: <TurnedInNotOutlinedIcon fontSize="large" />,
  },
  {
    id: 3,
    icon: <AssignmentIndOutlinedIcon fontSize="large" />,
  },
];
