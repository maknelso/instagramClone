import { Grid } from '@mui/material';
import React, { useState, useEffect } from 'react';
import ProfileInfo from '../components/profilepage/ProfileInfo';
import ProfilePosts from '../components/profilepage/ProfilePosts';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';
import ProfileBottom from '../components/profilepage/ProfileBottom';
import DashHeader from '../components/dashboard/DashHeader';
import { styled } from '@mui/material/styles';
import Loader from '../components/loader/Loader';

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
  // const [failedAuth, setFailedAuth] = useState(false);

  // const navigate = useNavigate();
  const { user_name } = useParams();

  useEffect(() => {
    // const token = sessionStorage.getItem("token");

    // if (!token) {
    //   setFailedAuth(true);
    //   return;
    // }

    axios
      .get(`/api/instagram/${user_name}`, {
        // headers: {
        //   Authorization: "Bearer " + token,
        // },
      })
      .then((response) => {
        console.log(response);
        setUser(response.data);
      })
      .catch(() => {
        // setFailedAuth(false);
      });
  }, []);

  // if (failedAuth) {
  //   navigate("/");
  // }

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
        />
        <ProfilePosts
          currentpost={current_post}
          current_follower={current_follower}
          current_following={current_following}
        />
        <ProfileBottom />
      </ProfileWrapper>
    </ProfileContainer>
  );
};

export default UserProfilePage;
