import { Grid, Typography } from '@mui/material';
import React from 'react';
import { styled } from '@mui/material/styles';
import { theme } from '../ThemeColor';

const DashSideContainer = styled(Grid)(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.up('md')]: {
    display: 'flex',
    flexDirection: 'column',
  },
}));

const DashSidebar = ({ usersInfo }) => {
  return (
    <DashSideContainer>
      <Grid
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        sx={{ p: '0.2rem', width: '100%' }}
      >
        <Grid display="flex" gap={2} alignItems="center">
          <Grid
            sx={{
              width: '50px',
              height: '50px',
              borderRadius: '50%',
            }}
          >
            <img
              style={{
                width: '100%',
                objectFit: 'cover',
                borderRadius: '50%',
              }}
              src={usersInfo.avatar}
              alt="user profile"
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
        sx={{ p: '0.6rem 0' }}
      >
        <Typography variant="body1" sx={{ color: theme.palette.grey.main }}>
          Suggestions For You
        </Typography>
        <Typography variant="body2">See All</Typography>
      </Grid>
      <Grid
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        sx={{ p: '1rem 0', width: '100%' }}
      >
        <Grid display="flex" gap={2}>
          <Grid
            sx={{
              maxWidth: '40px',
              height: '40px',
            }}
          >
            <img
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '50%',
              }}
              src="https://instagramclone-2022.s3.us-west-1.amazonaws.com/avatars/lionel-messi-most-liked-instagram-picute-122222-2e46f8ce2f8444948fce28f2c84c72f2.webp"
              alt="user profile"
            ></img>
          </Grid>
          <Grid display="flex" flexDirection="column">
            <Typography variant="body2" fontWeight="bold">
              MessiLeo
            </Typography>
            <Typography fontSize="12px">Followed by Jane + more</Typography>
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
