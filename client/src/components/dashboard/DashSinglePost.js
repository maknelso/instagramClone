import { Button, Grid, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import { theme } from '../ThemeColor';
import DashCommentModal from './DashCommentModal';
import { APIPostComment } from '../../api/comment';
import { styled } from '@mui/material/styles';

const DashSingleWrapper = styled(Grid)(({ theme }) => ({
  border: '1px solid lightgrey',
  background: 'white',
  borderRadius: '4px',
  [theme.breakpoints.up('md')]: {
    maxWidth: '360px',
  },
}));

const DashSinglePost = ({
  post,
  handleOpen,
  favicon,
  handleLike,
  handleGetPostId,
  commentModal,
  setCommentModal,
  postId,
  userFollowingPosts,
}) => {
  const [commentInput, setCommentInput] = useState('');
  const [isReadMore, setIsReadMore] = useState(true);

  useEffect(() => {}, [commentInput]);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  const handleCommentChange = (e) => {
    setCommentInput(e.target.value);
  };

  const handleClickPost = (post_id) => {
    const body = {
      post_id: post_id,
      comment: commentInput,
    };

    APIPostComment(body)
      .then(function (response) {
        setCommentInput('');
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <DashSingleWrapper display="flex" flexDirection="column" mb="1rem">
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
            }}
          >
            <img
              style={{
                width: '100%',
                objectFit: 'cover',
                borderRadius: '50%',
              }}
              src={post.avatar}
              alt="user avatar"
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
        <img
          style={{
            width: '100%',
            height: '470px',
            objectFit: 'cover',
          }}
          src={post.img_url}
          alt={post.img_description}
        ></img>
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
        </Grid>
      </Grid>
      <Grid display="flex" flexDirection="column" gap={1} sx={{ p: '1rem' }}>
        <Grid display="flex" gap="0.6rem">
          <Typography
            fontSize="12px"
            sx={{ display: 'inline' }}
            fontWeight="bold"
          >
            {post.username}
          </Typography>

          <span style={{ fontSize: '12px' }}>
            {isReadMore
              ? post.img_description.slice(0, 28)
              : post.img_description}
          </span>
          <span
            style={{
              cursor: 'pointer',
              fontWeight: 'bold',
              color: '#5A5A5A',
            }}
            onClick={toggleReadMore}
          >
            {isReadMore ? '... more' : ' show less'}
          </span>
        </Grid>
        <Typography
          fontSize="12px"
          onClick={() => handleGetPostId(post.post_id)}
          sx={{ color: theme.palette.secondary.main, cursor: 'pointer' }}
        >
          View all comments
        </Typography>
      </Grid>
      <Grid
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        sx={{ p: '1rem', borderTop: '1px solid lightgrey' }}
      >
        <Grid display="flex" alignItems="center" gap={1} sx={{ width: '100%' }}>
          <SentimentSatisfiedAltIcon fontSize="large" />
          <TextField
            variant="standard"
            placeholder="Add a comment..."
            sx={{ width: '100%' }}
            InputProps={{
              disableUnderline: true,
            }}
            value={commentInput}
            onChange={handleCommentChange}
          />
        </Grid>
        <Button onClick={() => handleClickPost(post.post_id)}>Post</Button>
      </Grid>
      <DashCommentModal
        openCommentModal={commentModal}
        setOpenCommentModal={setCommentModal}
        postId={postId}
        userFollowingPosts={userFollowingPosts}
        favicon={favicon}
      />
    </DashSingleWrapper>
  );
};

export default DashSinglePost;
