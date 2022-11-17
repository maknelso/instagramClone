import { Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import julian from "../../assets/images/dashboard/julian-wan-WNoLnJo7tS8-unsplash.jpg";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import post from "../../assets/images/dashboard/post.jpg";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ShareIcon from "@mui/icons-material/Share";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import { theme } from "../ThemeColor";

const DashPosts = ({ handleOpen, userFollowingPosts }) => {
  return userFollowingPosts.map((post, index) => {
    return (
      <Grid
        display="flex"
        flexDirection="column"
        mb="1rem"
        key={index}
        sx={{
          border: "1px solid lightgrey",
          background: "white",
          borderRadius: "4px",
        }}
      >
        <Grid
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          sx={{ p: "0.4rem" }}
        >
          <Grid display="flex" gap={2}>
            <Grid
              sx={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
              }}
            >
              <img
                style={{
                  width: "100%",
                  objectFit: "cover",
                  borderRadius: "50%",
                }}
                src={julian}
              ></img>
            </Grid>
            <Grid display="flex" flexDirection="column">
              <Typography fontWeight="bold" fontSize="12px">
                {post.username}
              </Typography>
              <Typography fontSize="12px">Some location</Typography>
            </Grid>
          </Grid>
          <MoreHorizIcon
            sx={{ cursor: "pointer" }}
            fontSize="large"
            onClick={handleOpen}
          />
        </Grid>
        <Grid>
          <Grid>
            <img
              style={{ width: "100%", maxHeight: "470px", objectFit: "cover" }}
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
            <FavoriteBorderIcon fontSize="large" />
            <ChatBubbleOutlineIcon fontSize="large" />
            <ShareIcon fontSize="large" />
          </Grid>
          <BookmarkBorderIcon fontSize="large" />
        </Grid>
        <Grid display="flex" flexDirection="column" gap={1} sx={{ p: "1rem" }}>
          <Typography fontSize="12px">
            Liked by <span>James</span> and <span>others</span>
          </Typography>
          <Grid display="flex" alignItems="center" gap="0.3rem">
            <Typography
              fontSize="12px"
              sx={{ display: "inline" }}
              fontWeight="bold"
            >
              Nelson
            </Typography>
            <span style={{ fontSize: "12px" }}>
              A planter with a black board with some text written on it
            </span>
          </Grid>
          <Typography
            fontSize="12px"
            sx={{ color: theme.palette.secondary.main }}
          >
            View all 2 comments
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
          sx={{ p: "1rem", borderTop: "1px solid lightgrey" }}
        >
          <Grid display="flex" alignItems="center" gap={1}>
            <SentimentSatisfiedAltIcon fontSize="large" />
            <TextField
              variant="standard"
              placeholder="Add a comment..."
              InputProps={{
                disableUnderline: true,
              }}
            />
          </Grid>
          <Button>Post</Button>
        </Grid>
      </Grid>
    );
  });
};

export default DashPosts;
