import React, { useEffect, useState } from 'react';
import Modal from '@mui/material/Modal';
import { Button, Grid, TextField, Typography } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import profile from '../../assets/images/profilepage/profile.jpg';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { styled } from '@mui/material/styles';
import axios from 'axios';

const DashModal = styled(Grid)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 280,
  bgcolor: 'background.paper',
  borderRadius: '10px',
  overflow: 'hidden',
  [theme.breakpoints.up('lg')]: {
    display: 'flex',
    width: 950,
  },
}));

const DashModalLeft = styled(Grid)(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.up('lg')]: {
    display: 'flex',
  },
}));

const DashModalRight = styled(Grid)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  mb: '1rem',
  background: 'white',
  borderRadius: '4px',
  marginBottom: 0,
  [theme.breakpoints.up('lg')]: {
    borderRadius: '0px',
  },
}));

const DashModalRightImg = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.up('lg')]: {
    display: 'none',
  },
}));

const DashModalRightHeader = styled(Grid)(({ theme }) => ({
  display: 'none',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0.8rem',
  [theme.breakpoints.up('lg')]: {
    display: 'flex',
    borderBottom: '1px solid lightgrey',
  },
}));

const DashModalRightComment = styled(Grid)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0.8rem',
  [theme.breakpoints.up('lg')]: {},
}));

const DashModalActualComment = styled(Grid)(({ theme }) => ({
  display: 'none',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0.8rem',
  [theme.breakpoints.up('lg')]: {
    display: 'flex',
  },
}));

const DashModalRightImgDesc = styled(Typography)(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.up('lg')]: {
    display: 'flex',
  },
}));

export default function DashCommentModal({
  setOpenCommentModal,
  openCommentModal,
  postId,
  userFollowingPosts,
}) {
  const [filteredPost, setFilteredPost] = useState({});
  const [comments, setComments] = useState([]);

  const handleClose = () => setOpenCommentModal(false);

  useEffect(() => {
    const newPost = userFollowingPosts.find((post) => {
      return post.post_id === postId;
    });
    setFilteredPost(newPost);
  });

  useEffect(() => {
    axios.get(`/api/comment/${postId}`).then((res) => {
      setComments(res.data);
    });
  }, [postId]);

  if (comments.length === 0) {
    return <></>;
  }

  return (
    <Modal
      open={openCommentModal}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      disableAutoFocus={true}
    >
      <DashModal container item>
        <DashModalLeft item lg={6}>
          <img
            style={{
              width: '100%',
              objectFit: 'cover',
            }}
            src={filteredPost.img_url}
          ></img>
        </DashModalLeft>
        <DashModalRight item lg={6}>
          <DashModalRightHeader>
            <Grid display="flex" alignItems="center" gap={2}>
              <Grid
                sx={{
                  width: '30px',
                  height: '30px',
                  borderRadius: '50%',
                  borderRadius: '50%',
                }}
              >
                <img
                  style={{
                    width: '100%',
                    objectFit: 'cover',
                    borderRadius: '50%',
                  }}
                  src={filteredPost.avatar}
                ></img>
              </Grid>
              <Grid display="flex" alignItems="center" gap={0.4}>
                <Typography fontSize="12px" fontWeight="bold">
                  {filteredPost.username}
                </Typography>
                <CheckCircleIcon fontSize="0.4rem" color="primary" />
              </Grid>
            </Grid>
            <MoreHorizIcon sx={{ cursor: 'pointer' }} fontSize="small" />
          </DashModalRightHeader>
          <DashModalRightComment>
            <Grid display="flex" alignItems="center" gap={2}>
              <Grid
                sx={{
                  width: '30px',
                  height: '30px',
                  borderRadius: '50%',
                  borderRadius: '50%',
                }}
              >
                <img
                  style={{
                    width: '100%',
                    objectFit: 'cover',
                    borderRadius: '50%',
                  }}
                  src={filteredPost.avatar}
                ></img>
              </Grid>
              <Grid display="flex" alignItems="center" gap={0.4}>
                <Typography fontSize="12px" fontWeight="bold">
                  {filteredPost.username}
                </Typography>
                <CheckCircleIcon fontSize="0.4rem" color="primary" />

                <DashModalRightImgDesc>
                  {filteredPost.img_description}
                </DashModalRightImgDesc>
              </Grid>
            </Grid>
          </DashModalRightComment>
          {comments.map((comment) => {
            return (
              <DashModalActualComment>
                <Grid display="flex" alignItems="center" gap={2}>
                  <Grid
                    sx={{
                      width: '30px',
                      height: '30px',
                      borderRadius: '50%',
                      borderRadius: '50%',
                    }}
                  >
                    <img
                      style={{
                        width: '100%',
                        objectFit: 'cover',
                        borderRadius: '50%',
                      }}
                      src={comment.avatar}
                    ></img>
                  </Grid>
                  <Grid display="flex" alignItems="center" gap={0.6}>
                    <Typography fontSize="12px" fontWeight="bold">
                      {comment.username}
                    </Typography>
                    <Typography>{comment.comment_text}</Typography>
                  </Grid>
                </Grid>
              </DashModalActualComment>
            );
          })}
          <Grid>
            <DashModalRightImg>
              <img
                style={{
                  width: '100%',
                  maxHeight: '470px',
                  objectFit: 'cover',
                }}
                src={filteredPost.img_url}
              ></img>
            </DashModalRightImg>
          </Grid>
          <Grid
            display="flex"
            justifyContent="space-between"
            p="1rem"
            sx={{ pb: 0, pt: '4rem' }}
          >
            <Grid display="flex" gap={1.2}>
              {/* {favicon[post.post_id] ? (
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
              )} */}
              <FavoriteBorderOutlinedIcon
                fontSize="large"
                // onClick={() => handleLike(post.post_id)}
                sx={{
                  color: 'white',
                  cursor: 'pointer',
                }}
              />
              <ChatBubbleOutlineIcon
                fontSize="large"
                sx={{
                  cursor: 'pointer',
                }}
              />
              <ShareIcon
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
          <Grid p="1rem">
            <Typography fontSize="0.8rem" color="secondary">
              12 HOURS AGO
            </Typography>
          </Grid>
        </DashModalRight>
      </DashModal>
    </Modal>
  );
}
