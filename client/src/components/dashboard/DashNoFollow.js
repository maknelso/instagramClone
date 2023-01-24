import React from 'react';
import { Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const DashNoFollowWrapper = styled(Grid)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '300px',

  [theme.breakpoints.up('sm')]: {
    height: '50px',
  },
}));

const DashNoFollow = () => {
  return (
    <DashNoFollowWrapper>
      <Typography>Please follow your first friend in search feature</Typography>
    </DashNoFollowWrapper>
  );
};

export default DashNoFollow;
