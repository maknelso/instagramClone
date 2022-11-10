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

const DashContainer = styled(Grid)(({ theme }) => ({
  height: "100vh",
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

  const handleLogOut = () => {
    sessionStorage.removeItem("token");
    setUser(null);
    setFailedAuth(true);
  };

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

  const { email, name, username } = user;

  return (
    <Grid>
      <DashHeader handleLogOut={handleLogOut} />
      <DashContainer>
        <DashContainerLeft>
          <DashFollowing />
          <DashPosts />
        </DashContainerLeft>
        <DashContainerRight>
          <DashSidebar name={name} username={username} />
        </DashContainerRight>
      </DashContainer>
    </Grid>
  );
};

export default DashboardPage;
