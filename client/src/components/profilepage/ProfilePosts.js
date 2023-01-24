import { Grid, IconButton, Typography } from '@mui/material';
import React from 'react';
import CalendarViewMonthOutlinedIcon from '@mui/icons-material/CalendarViewMonthOutlined';
import TurnedInNotOutlinedIcon from '@mui/icons-material/TurnedInNotOutlined';
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';
import { styled } from '@mui/material/styles';

const ProfilePostWrapper = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    padding: '0 2rem',
  },
}));

const ProfilePostdisappear = styled(Grid)(({ theme }) => ({
  display: 'flex',
  padding: '1.2rem',
  borderBottom: '1px solid lightgrey',
  [theme.breakpoints.up('sm')]: {
    display: 'none',
  },
}));

const ProfileTagTitle = styled(Typography)(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.up('lg')]: {
    display: 'block',
  },
}));

const ProfilePosts = ({ currentpost, current_follower, current_following }) => {
  return (
    <ProfilePostWrapper container item>
      <ProfilePostdisappear container item>
        <Grid
          item
          xs={4}
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Typography>{currentpost.length}</Typography>
          <Typography>post</Typography>
        </Grid>
        <Grid
          item
          xs={4}
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Typography>{current_follower}</Typography>
          <Typography>follower</Typography>
        </Grid>
        <Grid
          item
          xs={4}
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Typography>{current_following}</Typography>
          <Typography>following</Typography>
        </Grid>
      </ProfilePostdisappear>
      <Grid container item display="flex" p="1rem">
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
              <Grid display="flex" alignItems="center">
                <IconButton>{item.icon}</IconButton>
                <ProfileTagTitle>{item.title}</ProfileTagTitle>
              </Grid>
            </Grid>
          );
        })}
      </Grid>
      <Grid container item display="flex" justifyContent="space-between">
        {currentpost.map((post, index) => {
          return (
            <Grid key={index} item xs={3.6} display="flex" sx={{ mb: '3.6rem' }}>
              <img
                style={{
                  width: '100%',
                  height: '300px',
                  objectFit: 'cover',
                }}
                src={post.img_url}
              ></img>
            </Grid>
          );
        })}
      </Grid>
    </ProfilePostWrapper>
  );
};

export default ProfilePosts;

const row_2 = [
  {
    id: 1,
    icon: <CalendarViewMonthOutlinedIcon fontSize="large" />,
    title: 'POSTS',
  },
  {
    id: 2,
    icon: <TurnedInNotOutlinedIcon fontSize="large" />,
    title: 'SAVED',
  },
  {
    id: 3,
    icon: <AssignmentIndOutlinedIcon fontSize="large" />,
    title: 'TAGGED',
  },
];
