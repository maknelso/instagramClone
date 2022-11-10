import { Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import ProfileHeader from "../components/profilepage/ProfileHeader";
import ProfileInfo from "../components/profilepage/ProfileInfo";
import ProfilePosts from "../components/profilepage/ProfilePosts";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ProfileBottom from "../components/profilepage/ProfileBottom";

const UserProfilePage = () => {
  const [user, setUser] = useState(null);
  const [failedAuth, setFailedAuth] = useState(false);

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
        setUser(response.data);
      })
      .catch(() => {
        setFailedAuth(false);
      });
  }, []);

  if (failedAuth) {
    navigate("/");
  }

  if (!user) {
    return (
      <main>
        <p>Loading...</p>
      </main>
    );
  }

  console.log(user);

  const { name, username, current_post } = user;

  return (
    <Grid sx={{ height: "100vh" }}>
      <ProfileHeader username={username} />
      <ProfileInfo name={name} username={username} />
      <ProfilePosts currentpost={current_post} />
      <ProfileBottom />
    </Grid>
  );
};

export default UserProfilePage;
