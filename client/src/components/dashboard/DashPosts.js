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

const DashPosts = () => {
  return (
    <Grid
      display="flex"
      flexDirection="column"
      sx={{ border: "1px solid lightgrey", background: "white" }}
    >
      <Grid
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        sx={{ p: "1rem" }}
      >
        <Grid display="flex" gap={2}>
          <Grid
            sx={{
              width: "50px",
              height: "50px",
              borderRadius: "50%",
            }}
          >
            <img
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "50%",
              }}
              src={julian}
            ></img>
          </Grid>
          <Grid display="flex" flexDirection="column">
            <Typography fontWeight="bold">Julian</Typography>
            <Typography>Vista Valley Conuntry Club</Typography>
          </Grid>
        </Grid>
        <MoreHorizIcon />
      </Grid>
      <Grid>
        <Grid>
          <img style={{ width: "100%" }} src={post}></img>
        </Grid>
      </Grid>
      <Grid display="flex" justifyContent="space-between" p="1rem">
        <Grid display="flex" gap={1.2}>
          <FavoriteBorderIcon fontSize="large" />
          <ChatBubbleOutlineIcon fontSize="large" />
          <ShareIcon fontSize="large" />
        </Grid>
        <BookmarkBorderIcon fontSize="large" />
      </Grid>
      <Grid display="flex" flexDirection="column" gap={1} sx={{ p: "1rem" }}>
        <Typography>
          Liked by <span>James</span> and <span>others</span>
        </Typography>
        <Grid>
          <Typography sx={{ display: "inline" }} fontWeight="bold">
            Julian
          </Typography>
          <span>A planter with a black board with some text written on it</span>
        </Grid>
        <Typography sx={{ color: theme.palette.secondary.main }}>
          View all 2 comments
        </Typography>
        <Typography sx={{ color: theme.palette.secondary.main }}>
          14 hours ago
        </Typography>
      </Grid>
      <Grid
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        sx={{ p: "1rem", border: "1px solid lightgrey" }}
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
};

export default DashPosts;
