import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import DashFollowing from "../components/dashboard/DashFollowing";
import DashHeader from "../components/dashboard/DashHeader";
import DashPosts from "../components/dashboard/DashPosts";
import DashSidebar from "../components/dashboard/DashSidebar";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import DashModal from "../components/dashboard/DashModal";

const DashContainer = styled(Grid)(({ theme }) => ({
  height: "100%",
  maxWidth: "400px",
  margin: "0 auto",
  [theme.breakpoints.up("md")]: {
    maxWidth: "1600px",
    display: "flex",
    justifyContent: "center",
  },
}));

const DashContainerLeft = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.up("sm")]: {
    padding: "2rem 0",
  },
  [theme.breakpoints.up("md")]: {
    padding: "2rem 6rem",
    paddingRight: "2rem",
  },
}));

const DashContainerRight = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    padding: "3rem 0",
    width: "28%",
    maxWidth: "500px",
  },
}));

const DashboardPage = () => {
  const [usersInfo, setUsersInfo] = useState(null);
  const [failedAuth, setFailedAuth] = useState(false);
  const [userFollowingPosts, setUserFollowingPosts] = useState([]);

  // modal state in DashModal.js
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);

  const navigate = useNavigate();

  useEffect(() => {
    const token = sessionStorage.getItem("token");

    if (!token) {
      setFailedAuth(true);
      return;
    }

    axios
      .get("/api/protect", {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((response) => {
        setUsersInfo(response.data);
        const { following_posts, users } = response.data;

        let userPosts = [];
        following_posts.forEach((post) => {
          const userData = users.find((user) => {
            return user.account_id === post.account_id;
          });
          post.username = userData.username;
          post.avatar = userData.avatar;
          userPosts.push(post);
          // userFollowingPosts.push(post);
        });
        setUserFollowingPosts(userPosts);
      })
      .catch(() => {
        setFailedAuth(false);
      });
  }, []);

  const handleLogOut = () => {
    sessionStorage.removeItem("token");
    setUsersInfo(null);
    setFailedAuth(true);
  };

  if (failedAuth) {
    navigate("/");
  }

  if (!usersInfo) {
    return (
      <main>
        <p>Loading...</p>
      </main>
    );
  }

  return (
    <Grid>
      <DashHeader handleLogOut={handleLogOut} usersInfo={usersInfo} />
      <DashContainer>
        <DashContainerLeft>
          <DashFollowing userFollowingPosts={userFollowingPosts} />
          <DashPosts
            handleOpen={handleOpen}
            userFollowingPosts={userFollowingPosts}
            usersInfo={usersInfo}
          />
        </DashContainerLeft>
        <DashContainerRight>
          <DashSidebar usersInfo={usersInfo} />
        </DashContainerRight>
      </DashContainer>
      <DashModal open={open} setOpen={setOpen} />
    </Grid>
  );
};

export default DashboardPage;
