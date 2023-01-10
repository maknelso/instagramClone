import React, { useState, useEffect } from 'react';
import { Typography, Grid, Button } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import SettingsIcon from '@mui/icons-material/Settings';
import { styled } from '@mui/material/styles';
import profile from '../../assets/images/profilepage/profile.jpg';
import axios from 'axios';

const ProfileInfoWrapper = styled(Grid)(({ theme }) => ({
  borderBottom: '1px solid lightgrey',
  padding: '3rem',
  [theme.breakpoints.up('sm')]: {},
}));

const ProfileInfoImgWrapper = styled(Grid)(({ theme }) => ({
  maxWidth: '77px',
  [theme.breakpoints.up('sm')]: {
    maxWidth: '150px',
  },
}));

const ProfileMobileName = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    display: 'none',
  },
}));

const ProfileInfoRight = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.6rem',
  },
}));

const ProfileInfoRightFirst = styled(Grid)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  [theme.breakpoints.up('sm')]: {
    flexDirection: 'row',
    alignItems: 'center',
    maxWidth: '300px',
    justifyContent: 'space-between',
  },
}));

const ProfileInfoRightSecond = styled(Grid)(({ theme }) => ({
  display: 'none',

  [theme.breakpoints.up('sm')]: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '300px',
  },
}));

const ProfileInfoRightThird = styled(Grid)(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.up('sm')]: {
    display: 'block',
  },
}));

const ProfileInfoBtn = styled(Button)(({ theme }) => ({
  maxWidth: '250px',
  maxHeight: '30px',
  [theme.breakpoints.up('sm')]: {
    maxWidth: '110px',
    padding: '0.3rem 0',
  },
}));

const ProfileInfo = ({
  account_id,
  username,
  name,
  current_follower,
  current_following,
  currentpost,
  avatar,
  followStatus,
  setFollowStatus,
}) => {
  useEffect(() => {}, [followStatus]);

  const handlePostFollow = () => {
    const token = sessionStorage.getItem('token');
    if (!token) {
      // setFailedAuth(true);
      return;
    }
    // write follow record to db
    axios
      .post(
        '/api/update-follow',
        {
          followingId: account_id,
        },
        {
          headers: {
            Authorization: 'Bearer ' + token,
          },
        }
      )
      .then((res) => {
        console.log(res);
        setFollowStatus(true);
        // handle success
        console.log('data successfully saved to db');
      })
      .catch((err) => {
        // handle API error
        console.log('save failed: ' + err.message);
      });
  };

  const handleDeleteFollow = () => {
    const token = sessionStorage.getItem('token');
    if (!token) {
      // setFailedAuth(true);
      return;
    }
    // write follow record to db
    axios
      .delete('/api/update-follow', {
        headers: {
          Authorization: 'Bearer ' + token,
        },
        data: {
          followingId: account_id,
        },
      })
      .then((res) => {
        console.log(res);
        setFollowStatus(true);
        // handle success
        console.log('data successfully deleted from db');
      })
      .catch((err) => {
        // handle API error
        console.log('delete failed: ' + err.message);
      });
  };

  return (
    <ProfileInfoWrapper container item display="flex">
      <Grid item xs={3} sm={4} display="flex" flexDirection="column" gap={2}>
        <ProfileInfoImgWrapper>
          <img
            src={avatar}
            style={{ borderRadius: '50%', width: '100%' }}
          ></img>
        </ProfileInfoImgWrapper>
        <ProfileMobileName variant="h6">{name}</ProfileMobileName>
      </Grid>
      <ProfileInfoRight item xs={9} sm={8}>
        <ProfileInfoRightFirst>
          <Grid display="flex" alignItems="center">
            <Typography variant="h4">{username}</Typography>
            <IconButton size="large" color="black" aria-label="menu">
              <SettingsIcon fontSize="large" />
            </IconButton>
          </Grid>
          <Button
            className={followStatus ? 'follow__btn' : ''}
            variant="contained"
            onClick={handlePostFollow}
          >
            Follow
          </Button>
          {followStatus && (
            <Button variant="contained" onClick={handleDeleteFollow}>
              Unfollow
            </Button>
          )}
          <ProfileInfoBtn variant="outlined" fullWidth color="secondary">
            Edit Profile
          </ProfileInfoBtn>
        </ProfileInfoRightFirst>
        <ProfileInfoRightSecond>
          <Grid display="flex" alignItems="center" gap={0.6}>
            <Typography sx={{ fontSize: '1.6rem' }}>
              {currentpost.length}
            </Typography>
            <Typography sx={{ fontSize: '1.4rem' }}>post</Typography>
          </Grid>
          <Grid display="flex" alignItems="center" gap={0.6}>
            <Typography sx={{ fontSize: '1.6rem' }}>
              {current_follower}
            </Typography>
            <Typography sx={{ fontSize: '1.4rem' }}>followers</Typography>
          </Grid>
          <Grid display="flex" alignItems="center" gap={0.6}>
            <Typography sx={{ fontSize: '1.6rem' }}>
              {current_following}
            </Typography>
            <Typography sx={{ fontSize: '1.4rem' }}>follwing</Typography>
          </Grid>
        </ProfileInfoRightSecond>
        <ProfileInfoRightThird>
          <Typography variant="h5" fontWeight={700}>
            {name}
          </Typography>
        </ProfileInfoRightThird>
      </ProfileInfoRight>
    </ProfileInfoWrapper>
  );
};

export default ProfileInfo;
