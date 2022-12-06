import { Button, Grid, TextField, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import { theme } from '../ThemeColor';
import axios from 'axios';
import DashCommentModal from './DashCommentModal';

const DashPosts = ({ handleOpen, userFollowingPosts }) => {
  const [favicon, setFavicon] = useState({});
  const [failedAuth, setFailedAuth] = useState(false);
  const [CommentModal, setCommentModal] = useState(false);
  const [postId, setPostId] = useState(2);

  useEffect(() => {
    let res = {};
    axios.get('/api/like').then((response) => {
      response.data.forEach((user) => {
        res[user.post_id] = true;
      });
      setFavicon(res);
    });
  }, []);

  const handleLike = (post_id) => {
    setFavicon({ ...favicon, [post_id]: !favicon[post_id] });

    const token = sessionStorage.getItem('token');
    if (!token) {
      setFailedAuth(true);
      return;
    }

    axios
      .post(
        '/api/protect',
        {
          post_id: post_id,
          like: !favicon[post_id],
        },
        {
          headers: {
            Authorization: 'Bearer ' + token,
          },
        }
      )
      .then(function (response) {
        // console.log(response);
      })
      .catch(function (error) {
        console.log(error);
        setFavicon({ ...favicon, [post_id]: favicon[post_id] });
      });
  };

  const handleGetPostId = (post_id) => {
    setPostId(post_id);
    setCommentModal(true);
  };

  return userFollowingPosts.map((post, index) => {
    return (
      <Grid
        display="flex"
        flexDirection="column"
        mb="1rem"
        key={index}
        sx={{
          border: '1px solid lightgrey',
          background: 'white',
          borderRadius: '4px',
        }}
      >
        <Grid
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          sx={{ p: '0.8rem' }}
        >
          <Grid display="flex" alignItems="center" gap={2}>
            <Grid
              sx={{
                width: '30px',
                height: '30px',
                borderRadius: '50%',
                padding: '0.2rem',
                border: 'double 2px transparent',
                backgroundImage:
                  'linear-gradient(white, white), radial-gradient(circle at top left, #f00,#F4D35E)',

                backgroundOrigin: 'border-box',
                backgroundClip: 'padding-box, border-box',
                borderRadius: '50%',
              }}
            >
              <img
                style={{
                  width: '100%',
                  objectFit: 'cover',
                  borderRadius: '50%',
                }}
                src={post.avatar}
              ></img>
            </Grid>
            <Grid display="flex" flexDirection="column">
              <Typography fontWeight="bold" fontSize="12px">
                {post.username}
              </Typography>
              <Typography fontSize="12px">Location</Typography>
            </Grid>
          </Grid>
          <MoreHorizIcon
            sx={{ cursor: 'pointer' }}
            fontSize="medium"
            onClick={handleOpen}
          />
        </Grid>
        <Grid>
          <Grid>
            <img
              style={{ width: '100%', maxHeight: '470px', objectFit: 'cover' }}
              src={post.img_url}
            ></img>
          </Grid>
        </Grid>
        <Grid
          display="flex"
          justifyContent="space-between"
          p="1rem"
          sx={{ pb: 0 }}
        >
          <Grid display="flex" gap={1.2}>
            {favicon[post.post_id] ? (
              <FavoriteIcon
                fontSize="large"
                onClick={() => handleLike(post.post_id)}
                sx={{
                  color: theme.palette.red.main,
                  cursor: 'pointer',
                }}
              />
            ) : (
              <FavoriteBorderOutlinedIcon
                fontSize="large"
                onClick={() => handleLike(post.post_id)}
                sx={{
                  color: 'white',
                  cursor: 'pointer',
                }}
              />
            )}
            <ChatBubbleOutlineIcon
              fontSize="large"
              sx={{
                cursor: 'pointer',
              }}
            />
            <ShareOutlinedIcon
              fontSize="large"
              sx={{
                cursor: 'pointer',
              }}
            />
          </Grid>
          <BookmarkBorderIcon
            fontSize="large"
            sx={{
              cursor: 'pointer',
            }}
          />
        </Grid>
        <Grid display="flex" flexDirection="column" gap={1} sx={{ p: '1rem' }}>
          {/* <Typography fontSize="12px">
            Liked by <span>{post.liked_user_name}</span> and
            <span>others</span>
          </Typography> */}
          <Grid display="flex" alignItems="center" gap="0.3rem">
            <Typography
              fontSize="12px"
              sx={{ display: 'inline' }}
              fontWeight="bold"
            >
              {post.username}
            </Typography>
            <span style={{ fontSize: '12px' }}>{post.img_description}</span>
          </Grid>
          <Typography
            fontSize="12px"
            onClick={() => handleGetPostId(post.post_id)}
            sx={{ color: theme.palette.secondary.main, cursor: 'pointer' }}
          >
            View all comments
          </Typography>
          <Typography
            fontSize="12px"
            sx={{ color: theme.palette.secondary.main }}
          >
            14 hours ago
          </Typography>
        </Grid>
        <Grid
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          sx={{ p: '1rem', borderTop: '1px solid lightgrey' }}
        >
          <Grid
            display="flex"
            alignItems="center"
            gap={1}
            sx={{ width: '100%' }}
          >
            <SentimentSatisfiedAltIcon fontSize="large" />
            <TextField
              variant="standard"
              placeholder="Add a comment..."
              sx={{ width: '100%' }}
              InputProps={{
                disableUnderline: true,
              }}
            />
          </Grid>
          <Button>Post</Button>
        </Grid>
        <DashCommentModal
          openCommentModal={CommentModal}
          setOpenCommentModal={setCommentModal}
          postId={postId}
          userFollowingPosts={userFollowingPosts}
          favicon={favicon}
        />
      </Grid>
    );
  });
};

export default DashPosts;
