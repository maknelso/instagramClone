import * as React from 'react';
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

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 280,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  borderRadius: '10px',
};

export default function DashCommentModal({
  setOpenCommentModal,
  openCommentModal,
}) {
  const handleClose = () => setOpenCommentModal(false);

  return (
    <Modal
      open={openCommentModal}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      disableAutoFocus={true}
    >
      <Grid sx={style}>
        <Grid
          display="flex"
          flexDirection="column"
          mb="1rem"
          sx={{
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
                  // src={post.avatar}
                  src={profile}
                ></img>
              </Grid>
              <Grid display="flex" alignItems="center" gap={0.4}>
                <Typography fontSize="12px">
                  username
                  {/* {post.username} */}
                </Typography>
                <CheckCircleIcon fontSize="0.4rem" color="primary" />
              </Grid>
            </Grid>
            <MoreHorizIcon sx={{ cursor: 'pointer' }} fontSize="small" />
          </Grid>
          <Grid>
            <Grid>
              <img
                style={{
                  width: '100%',
                  maxHeight: '470px',
                  objectFit: 'cover',
                }}
                src="https://assets.codepen.io/7439974/avocado.jpg"
                // src={post.img_url}
              ></img>
            </Grid>
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
                fontSize="medium"
                // onClick={() => handleLike(post.post_id)}
                sx={{
                  color: 'white',
                  cursor: 'pointer',
                }}
              />
              <ChatBubbleOutlineIcon
                fontSize="medium"
                sx={{
                  cursor: 'pointer',
                }}
              />
              <ShareIcon
                fontSize="medium"
                sx={{
                  cursor: 'pointer',
                }}
              />
            </Grid>
            <BookmarkBorderIcon
              fontSize="medium"
              sx={{
                cursor: 'pointer',
              }}
            />
          </Grid>
          <Grid p="1rem">
            <Typography variant="body2" color="secondary">
              12 HOURS AGO
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Modal>
  );
}
