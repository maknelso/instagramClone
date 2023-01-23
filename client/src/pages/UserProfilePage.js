import { Grid } from '@mui/material';
import React, { useState, useEffect, useContext } from 'react';
import ProfileInfo from '../components/profilepage/ProfileInfo';
import ProfilePosts from '../components/profilepage/ProfilePosts';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import ProfileBottom from '../components/profilepage/ProfileBottom';
import DashHeader from '../components/dashboard/DashHeader';
import { styled } from '@mui/material/styles';
import Loader from '../components/loader/Loader';
import DashNewPostModal from '../components/dashboard/DashNewPostModal';
import UserContext from '../contexts/userContext';
import { APIProtect } from '../api/user';

const ProfileWrapper = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.up('lg')]: {
    marginLeft: '5rem',
    marginRight: '5rem',
  },
}));

const ProfileContainer = styled(Grid)(({ theme }) => ({
  height: '100vh',
  [theme.breakpoints.up('sm')]: {
    marginLeft: '65px',
  },
  [theme.breakpoints.up('lg')]: {
    marginLeft: '200px',
  },
}));

const UserProfilePage = () => {
  const [user, setUser] = useState(null);
  const [followStatus, setFollowStatus] = useState({});
  const [usersInfo, setUsersInfo] = useState(null);
  const { user_name } = useParams();

  const { searchItem } = useContext(UserContext);

  useEffect(() => {
    const token = sessionStorage.getItem('token');

    if (!token) {
      return;
    }

APIProtect()
      .then((response) => {
        setUsersInfo(response.data);
      })
      .catch(() => {});
  }, []);

  useEffect(() => {
    const res = {};
    const token = sessionStorage.getItem('token');
    if (!token) {
      return;
    }

    axios
      .get('/api/update-follow', {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      })
      .then((response) => {
        response.data.forEach((followInfo) => {
          res[followInfo.following_id] = true;
        });
        setFollowStatus(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`/api/instagram/${user_name}`)
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [followStatus, searchItem]);

  if (!user) {
    return <Loader />;
  }

  const {
    account_id,
    name,
    username,
    avatar,
    current_post,
    current_follower,
    current_following,
  } = user;

  return (
    <ProfileContainer>
      <DashHeader />
      <ProfileWrapper>
        <ProfileInfo
          name={name}
          username={username}
          current_follower={current_follower}
          current_following={current_following}
          currentpost={current_post}
          avatar={avatar}
          account_id={account_id}
          followStatus={followStatus}
          setFollowStatus={setFollowStatus}
        />
        <ProfilePosts
          currentpost={current_post}
          current_follower={current_follower}
          current_following={current_following}
        />
        <ProfileBottom />
      </ProfileWrapper>
      <DashNewPostModal usersInfo={usersInfo} />
    </ProfileContainer>
  );
};

export default UserProfilePage;
